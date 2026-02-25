import {defineType, defineField} from 'sanity'
import {CustomGalleryInput} from '../components/CustomGalleryInput'

export const edukasiType = defineType({
  name: 'edukasi',
  title: 'Feed Edukasi (Carousel Style)',
  type: 'document',
  fields: [
    defineField({
      name: 'judul',
      type: 'string',
      title: 'Judul Posting',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug / Link URL',
      description: "Klik tombol 'Generate' setelah mengisi judul agar link aktif",
      options: {
        source: 'judul',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug wajib diisi'),
    }),

    defineField({
      name: 'isPremium',
      type: 'boolean',
      title: 'Konten Berbayar (Premium)?',
      initialValue: false,
      description: 'Aktifkan jika konten ini memerlukan pembayaran untuk melihat slide penuh',
    }),

    defineField({
      name: 'price',
      type: 'number',
      title: 'Harga (IDR)',
      description: 'Contoh: 25000',
      initialValue: 10000,
      hidden: ({document}) => !document?.isPremium,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document?.isPremium && !value) return 'Harga wajib diisi untuk konten premium'
          return true
        }),
    }),

    defineField({
      name: 'freeLimit',
      type: 'number',
      title: 'Batas Slide Gratis',
      initialValue: 4,
      validation: (Rule) => Rule.min(1).warning('Minimal 1 slide harus bisa dilihat gratis'),
      hidden: ({document}) => !document?.isPremium,
    }),

    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Upload Foto (Bisa banyak)',
      description: 'Drag & drop banyak foto langsung ke area ini.',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      options: {
        layout: 'grid',
        sortable: true,
      },
      components: {
        input: CustomGalleryInput,
      },
      validation: (Rule) => Rule.min(1).error('Minimal upload 1 foto'),
    }),

    defineField({
      name: 'caption',
      type: 'text',
      title: 'Caption / Deskripsi',
      rows: 3,
    }),
  ],

  preview: {
    select: {
      title: 'judul',
      media: 'gallery.0',
      isPremium: 'isPremium',
    },
    prepare(selection) {
      const {title, media, isPremium} = selection
      return {
        title: `${isPremium ? '🔒 ' : ''}${title}`,
        media: media,
      }
    },
  },
})
