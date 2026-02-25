import { snap } from "./client";

interface CheckoutParams {
  email: string;
  contentId: string;
  contentTitle: string;
  price: number;
}

export async function createTransaction({ email, contentId, contentTitle, price }: CheckoutParams) {
  const orderId = `${contentId.slice(0, 8)}_${Date.now()}`;

  const parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: price,
    },
    customer_details: {
      email: email.toLowerCase().trim(),
    },
    item_details: [
      {
        id: contentId,
        price: price,
        quantity: 1,
        name: contentTitle || "Materi Premium",
      },
    ],
    custom_field1: email.toLowerCase().trim(),
    custom_field2: contentId,
    custom_field3: contentTitle || "",
  };

  const transaction = await snap.createTransaction(parameter);
  return transaction;
}