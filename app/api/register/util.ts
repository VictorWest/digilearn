import { User } from "@/lib/shared/interface"
import { NextResponse } from "next/server"

export const validatePayload = (data: User) => {
    const { userId, fullName, login } = data ?? {}
    const { email, password } = login
    

    if (!userId || !fullName || !email || !password){
        return {
            ok: false,
            error: "All data must be filled"
        }
    }

    return {
        ok: true,
        value : { userId, fullName, email, password }
    }
}

export function handleApiError(error: unknown) {
    // Mongoose duplicate key error
    if ( typeof error === "object" && error !== null && "code" in error && (error as any).code === 11000) {
        return NextResponse.json(
            { message: "User already exists" },
            { status: 409 }
        )
    }

    // Known Error
    if (error instanceof Error) {
        console.error(error.message)
    }

    // Unknown / programmer error
    console.error("Unhandled error:", error)

    return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
    )
}
