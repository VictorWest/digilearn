import User from "@/database/model/user";
import { connectDB } from "@/database/mongodb";
import { hashPassword } from "@/lib/server/password";
import { NextRequest, NextResponse } from "next/server";
import { handleApiError, validatePayload } from "./util";

export default async function POST(req: NextRequest){
    try {
        const body = await req.json()

        const validation = validatePayload(body)

        if (!validation.ok || !validation.value){
            return NextResponse.json({ message: validation.error || "Validation failed" }, { status: 400 })
        }

        const { userId, fullName, email, password } = validation.value

        await connectDB()
        
        const hashedPassword = await hashPassword(password)
        await User.create({ userId, fullName, email, password: hashedPassword })
        return NextResponse.json({ message: "User created successfully." }, { status: 201 })
    } catch (error) {
        return handleApiError(error)
    }
}

