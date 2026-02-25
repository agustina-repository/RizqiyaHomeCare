import { NextRequest, NextResponse } from "next/server";
import { createTransaction } from "@/lib/midtrans/checkout";

export async function POST(req: NextRequest) {
  try {
    const { email, contentId, contentTitle, price } = await req.json();

    if (!email || !contentId || !price) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    const transaction = await createTransaction({ email, contentId, contentTitle, price });

    return NextResponse.json({
      token: transaction.token,
      redirectUrl: transaction.redirect_url,
    });
  } catch (error) {
    console.error("checkout error:", error);
    return NextResponse.json({ error: "Gagal membuat transaksi" }, { status: 500 });
  }
}