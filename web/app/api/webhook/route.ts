import { NextRequest, NextResponse } from "next/server";
import { verifyNotification } from "@/lib/midtrans/webhook";
import { writeClient } from "@/lib/sanity/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { isSuccess, orderId, email, contentId, contentTitle, amount } =
      await verifyNotification(body);

    if (!isSuccess) {
      return NextResponse.json({ message: "Ignored" }, { status: 200 });
    }

    if (!email || !contentId) {
      return NextResponse.json(
        { error: "Data tidak lengkap" },
        { status: 400 },
      );
    }

    const existing = await writeClient.fetch(
      `*[_type == "unlock" && invoiceId == $orderId][0]._id`,
      { orderId },
    );

    if (existing) {
      return NextResponse.json(
        { message: "Already recorded" },
        { status: 200 },
      );
    }

    // Simpan ke Sanity
    await writeClient.create({
      _type: "unlock",
      email: email.toLowerCase().trim(),
      contentId,
      contentTitle: contentTitle || "",
      invoiceId: orderId,
      amount,
      paidAt: new Date().toISOString(),
      status: "paid",
    });

    // console.log(`✅ Unlock disimpan: ${email} → ${contentId}`);
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    console.error("webhook error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
