import { NextRequest, NextResponse } from "next/server";
export async function GET(request, res) {
  try {
    return NextResponse.json(
      { message: "HELLO WORLD FROM GET REQUEST" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function POST(request, res) {
  try {
    return NextResponse.json(
      { message: "HELLO WORLD FROM POST REQUEST" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error);
  }
}
