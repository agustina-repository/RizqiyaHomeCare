import priceFormatter from "./price-formatter";

export const generateWhatsAppLink = (
  productName: string,
  variantName: string,
  price: number
) => {
  // Mengambil nomor dari .env
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  
  if (!phoneNumber) {
    console.warn("WhatsApp number is not defined in .env");
  }

  const message = `Halo Admin, saya ingin memesan:\n\n` +
    `*Category:* ${productName}\n` +
    `*Paket:* ${variantName}\n` +
    `*Harga:* ${priceFormatter(price)}\n\n` +
    `Mohon info detailnya. Terima kasih!`;

  // EncodeURIComponent memastikan karakter seperti spasi dan enter terbaca di URL
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};