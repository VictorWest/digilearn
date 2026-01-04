import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        console.log(await req.json())
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message || "There was an error" }, { status: 500 })
    }
}