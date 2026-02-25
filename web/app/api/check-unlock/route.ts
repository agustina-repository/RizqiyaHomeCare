import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanity/client";

export async function POST(req: NextRequest) {
  try {
    const { email, contentId } = await req.json();

    if (!email || !contentId) {
      return NextResponse.json(
        { error: "Email dan contentId wajib diisi" },
        { status: 400 },
      );
    }

    const record = await client.fetch(
      `*[_type == "unlock" && email == $email && contentId == $contentId && status == "paid"][0]`,
      {
        email: email.toLowerCase().trim(),
        contentId,
      },
    );

    return NextResponse.json({
      unlocked: !!record,
      paidAt: record?.paidAt || null,
    });
  } catch (error) {
    console.error("check-unlock error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
