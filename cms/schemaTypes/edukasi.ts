import { defineType, defineField } from "sanity"
import { CustomGalleryInput } from "../components/CustomGalleryInput"

export const edukasiType = defineType({
  name: "edukasi",
  title: "Feed Edukasi (Carousel Style)",
  type: "document",
  fields: [
    defineField({
      name: "judul",
      type: "string",
      title: "Judul Posting",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      type: "slug",
      title: "Slug / Link URL",
      description: "Klik tombol 'Generate' setelah mengisi judul agar link aktif",
      options: {
        source: "judul",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Slug wajib diisi"),
    }),

    defineField({
      name: "gallery",
      type: "array",
      title: "Upload Foto (Bisa banyak)",
      description: "Drag & drop banyak foto langsung ke area ini.",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      options: {
        layout: "grid",
        sortable: true,
      },
      components: {
        input: CustomGalleryInput,
      },
      validation: (Rule) =>
        Rule.min(1).error("Minimal upload 1 foto"),
    }),

    defineField({
      name: "caption",
      type: "text",
      title: "Caption / Deskripsi",
      rows: 3,
    }),

    defineField({
      name: "kategori",
      type: "string",
      title: "Kategori",
      options: {
        list: [
          { title: "Persiapan Sebelum Kelahiran", value: "persiapan-kelahiran" },
          { title: "Perawatan Ibu", value: "perawatan-ibu" },
          { title: "Perawatan Anak", value: "perawatan-anak" },
        ],
        layout: "radio",
      },
    }),
  ],

  preview: {
    select: {
      title: "judul",
      media: "gallery.0",
    },
  },
})
