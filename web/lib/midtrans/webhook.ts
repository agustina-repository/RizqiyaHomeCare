import { coreApi } from "./client";

export async function verifyNotification(body: any) {
 const statusResponse = await (coreApi as any).transaction.notification(body);

  const {
    order_id,
    transaction_status,
    fraud_status,
    custom_field1: email,
    custom_field2: contentId,
    custom_field3: contentTitle,
    gross_amount,
  } = statusResponse;

  const isSuccess =
    (transaction_status === "capture" && fraud_status === "accept") ||
    transaction_status === "settlement";

  return {
    isSuccess,
    orderId: order_id,
    email,
    contentId,
    contentTitle,
    amount: parseInt(gross_amount),
  };
}