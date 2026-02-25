import { defineType, defineField } from "sanity"

export const unlockType = defineType({
  name: "unlock",
  title: "Unlock Records",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email Pembeli",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contentId",
      title: "ID Konten",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contentTitle",
      title: "Judul Konten",
      type: "string",
    }),
    defineField({
      name: "invoiceId",
      title: "Invoice ID Midtrans",
      type: "string",
    }),
    defineField({
      name: "amount",
      title: "Jumlah Bayar (Rp)",
      type: "number",
    }),
    defineField({
      name: "paidAt",
      title: "Waktu Bayar",
      type: "datetime",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: ["paid", "pending", "failed"],
      },
      initialValue: "pending",
    }),
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "contentTitle",
    },
  },
})