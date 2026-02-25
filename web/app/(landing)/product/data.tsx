import { ReactNode } from "react";


export type PackageVariant = {
  slug: string;
  title: string;
  price: number;
  note?: string;
};

export type ProductPackage = {
  slug: string;
  title: string;
  image: string;
  description: ReactNode;
  variants: PackageVariant[];
  bookingLink?: string;
};

export type Product = {
  slug: string;
  title: string;
  badge: string;
  image: string;
  bookingLink?: string;
  description?: ReactNode;

  variants?: PackageVariant[];

  packages?: ProductPackage[];
};

export type NormalizedPackage = {
  title?: string;
  image?: string;
  description?: ReactNode;
  variants: PackageVariant[];
};

export const normalizeProductPackages = (
  product: Product
): NormalizedPackage[] => {
  if (product.variants && product.variants.length > 0) {
    return [
      {
        variants: product.variants,
      },
    ];
  }

  if (product.packages && product.packages.length > 0) {
    return product.packages.map((pkg) => ({
      title: pkg.title,
      image: pkg.image,
      description: pkg.description,
      variants: pkg.variants,
    }));
  }

  return [];
};

export const productData: Product[] = [
  {
    slug: "kelas-sebelum-kelahiran",
    title: "Kelas Sebelum Kelahiran",
    badge: "Kelas Sebelum Melahirkan",
    bookingLink: "https://tidycal.com/rizqiyahomecare/booking-kelas-sebelum-kelahiran",
    image: "/images/categories/kelas-sebelum-kelahiran.png",
    description: (
      <>
        Wadah edukatif bagi calon orang tua dalam mempersiapkan diri menyambut
        kehadiran buah hati. Materi meliputi edukasi laktasi, teknik memandikan
        bayi, perawatan tali pusat, dan edukasi lainnya mengenai perawatan bayi.
        <br />
        Informasi detail mengenai pilihan paket tersedia di bawah.
        
      </>
    ),
    variants:[
      {
        slug: "parenting-class",
        title: "Paket Parenting Class (Pijat Laktasi 30 Menit + Edukasi Manajemen Laktasi + Perawatan Bayi Bru Lahir)",
        price: 300000,
      },
      {
        slug: "parenting-class2",
        title: "Paket Parenting Class + Pendampingan 1 Hari di Hari Kelahiran Bayi",
        price: 650000,
      }
    ]
  },
    {
    slug: "baby-spa",
    title: "Baby SPA",
    badge: "Baby SPA",
    bookingLink: "https://tidycal.com/rizqiyahomecare/booking-baby-spa",
    image: "/images/categories/baby spa.png",
    description: (
      <>
        Rangkaian perawatan khusus untuk bayi yang mencakup pijat, senam, serta 
        latihan otot dengan gerakan yang terarah. Perawatan ini bertujuan untuk 
        merangsang sistem sensorik dan motorik bayi, membantu meningkatkan kekuatan 
        otot, koordinasi gerak, serta memberikan efek relaksasi yang mendukung tumbuh 
        kembang optimal.
        <br />
        Informasi detail mengenai pilihan paket tersedia di bawah.
      </>
    ),
    variants:[
      {
        slug: "baby-spa",
        title: "Paket Gym Ball, Massage, Swimming",
        price: 160000,
      },
    ]
  },

  {
    slug: "pijat-bayi-dan-anak",
    title: "Pijat Bayi dan Anak",
    badge: "Pijat Bayi & Anak",
    bookingLink: "https://tidycal.com/rizqiyahomecare/booking-pijat-bayi-dan-anak",
    image: "/images/categories/pijat-bayi-dan-anak.png",
    description: (
      <>
        Rangkaian perawatan lengkap yang dirancang untuk mendukung tumbuh kembang 
        si kecil sejak usia newborn hingga anak berusia di atas 2 tahun.
        <br />
        Paket mencakup pijat newborn, pijat bayi dan anak.
        <br />
        Informasi detail mengenai pilihan paket tersedia di bawah.
      </>
    ),
    variants: [
      {
        slug: "pijat-newborn",
        title: "Pijat Bayi (0-6 bulan)",
        price: 120000,
      },
      {
        slug: "pijat-bayi",
        title: "Pijat Bayi (7–18 bulan)",
        price: 130000,
      },
      {
        slug: "pijat-bayi2",
        title: "Pijat Bayi (19-24 bulan)",
        price: 125000,
      },
      {
        slug: "pijat-anak",
        title: "Pijat Anak (2-6 tahun)",
        price: 125000,
      },
      {
        slug: "pijat-bayi-kembar",
        title: "Hemat Untuk Kembar (0-6 bulan)",
        price: 230000,
      },
      {
        slug: "pijat-bayi-kembar2",
        title: "Hemat Untuk Kembar (7-18 bulan)",
        price: 220000,
      },
      {
        slug: "pijat-bayi-kembar3",
        title: "Hemat Untuk Kembar (19-24 bulan)",
        price: 235000,
      },
      {
        slug: "pijat-bayi-kembar4",
        title: "Hemat Untuk Kembar (2-6 tahun)",
        price: 245000,
      },
      {
        slug: "pijat-hemat-kakak-adik",
        title: "Hemat Untuk Kakak Adik",
        price: 250000,
      },
    ],
  },

  {
    slug: "perawatan-bayi",
    title: "Perawatan Bayi",
    badge: "Perawatan Bayi",
    bookingLink: "https://tidycal.com/rizqiyahomecare/booking-perawatan-bayi",
    image: "/images/categories/perawatan-bayi.png",
    description: (
      <>
        Rangkaian perawatan lengkap yang dirancang untuk mendukung kenyamanan,
        kebersihan, serta tumbuh kembang si kecil sejak usia newborn hingga
        3 bulan.
        <br />
        Paket mencakup perawatan cukur, potong kuku kaki & tangan.
        <br />
        Informasi detail mengenai pilihan paket tersedia di bawah.
      </>
    ),
    variants: [
      {
        slug: "perawatan-newborn",
        title: "Perawatan Bayi Baru Lahir 1 Hari",
        price: 220000,
      },
      {
        slug: "perawatan-newborn2",
        title: "Perawatan Bayi Baru Lahir 3 Hari",
        price: 650000,
      },
      {
        slug: "perawatan-newborn3",
        title: "Perawatan Bayi Baru Lahir 7 Hari",
        price: 150000,
      },
      {
        slug: "perawatan-bayi",
        title: "Cukur Rambut",
        price: 30000,
      },
      {
        slug: "perawatan-bayi2",
        title: "Cukur + Potong Kuku Kaki & Tangan",
        price: 80000,
      },
      {
        slug: "perawatan-bayi3",
        title: "Cukur + Pijat 0 - 3 bulan",
        price: 140000,
      },
      {
        slug: "perawatan-bayi5",
        title: "Pijat 0 - 3 Bulan + Potong Kuku",
        price: 150000,
      },
      {
        slug: "perawatan-bayi4",
        title: "Cukur + Potong Kuku + Pijat 0 - 3 bulan",
        price: 160000,
      },
    ],
  },

  {
    slug: "perawatan-bayi-baru-lahir",
    title: "Perawatan Bayi Baru Lahir",
    badge: "Perawatan Bayi Baru Lahir",
    bookingLink: "https://tidycal.com/rizqiyahomecare/booking-perawatan-bayi-baru-lahir",
    image: "/images/categories/newborn care.png",
    description: (
      <>
        Rangkaian perawatan lengkap yang dirancang untuk mendukung kenyamanan,
        kebersihan buah hati.
        <br />
        Paket mencakup mamandikan, menjemur dan pijat bayi.
        <br />
        Informasi detail mengenai pilihan paket tersedia di bawah.
      </>
    ),
    variants: [
      {
        slug: "perawatan-newborn",
        title: "Perawatan Bayi Baru Lahir 1 Hari",
        price: 220000,
      },
      {
        slug: "perawatan-newborn2",
        title: "Perawatan Bayi Baru Lahir 3 Hari",
        price: 650000,
      },
      {
        slug: "perawatan-newborn3",
        title: "Perawatan Bayi Baru Lahir 7 Hari",
        price: 1500000,
      },
    ],
  },

  {
    slug: "perawatan-ibu",
    title: "Perawatan Ibu",
    badge: "Perawatan Ibu",
    bookingLink: "https://tidycal.com/rizqiyahomecare/perawatan-ibu",
    image: "/images/categories/perawatan-ibu.png",
    description: (
      <>
        Layanan perawatan khusus untuk ibu menyusui yang berfokus untuk melancarkan
        ASI dan kesehatan payudara.<br />
        Perawatan ini terdiri dari <strong>Pijat Laktasi, </strong> <strong>Relaktasi, </strong> dan
        <strong> Penanganan Payudara Tersumbat</strong>.<br/>
        Penjelasan lengkap tersedia di bawah.
      </>
    ),
    packages: [
      {
        slug: "pijat-laktasi",
        title: "Pijat Laktasi",
        image: "/images/packages/pijat laktasi.png",
        bookingLink: "https://tidycal.com/rizqiyahomecare/booking-pijat-laktasi",
        description: (
          <>
            Perawatan awal untuk menstimulasi hormon oksitosin dan prolaktin yang
            berperan penting dalam produksi ASI.
            <br />
            Membantu melancarkan aliran ASI, meningkatkan volume ASI, serta
            mengurangi ketidaknyamanan selama menyusui.
          </>
        ),
        variants: [
          {
            slug: "laktasi-60-menit",
            title: "Pijat Laktasi 60 Menit",
            price: 160000,
          },
          {
            slug: "konsultasi-laktasi",
            title: "Konsultasi Laktasi 60 Menit",
            price: 200000,
          },
          {
            slug: "laktasi-relaksasi",
            title: "Pijat Laktasi + Relaksasi Infrared",
            price: 220000,
          },          
          {
            slug: "laktasi-plus-konsultasi",
            title: "Pijat Laktasi + Konsultasi",
            price: 350000,
          },
          {
            slug: "laktasi-3x",
            title: "Paket Pijat Laktasi 3 Hari",
            price: 475000,
            note: "Lebih hemat untuk perawatan rutin",
          },
          {
            slug: "laktasi-5x",
            title: "Paket Pijat Laktasi 5 Hari",
            price: 790000,
            note: "Paket terbaik & hemat",
          },
          {
            slug: "laktasi-7x",
            title: "Paket Pijat Laktasi 7 Hari",
            price: 1105000,
            note: "Paket terbaik & paling hemat",
          },
        ],
      },
      {
        slug: "payudara-tersumbat",
        title: "Payudara Tersumbat",
        image: "/images/packages/payudara tersumbat.png",
        bookingLink: "https://tidycal.com/rizqiyahomecare/booking-payudara-tersumbat",
        description: (
          <>
            Perawatan khusus yang diberikan kepada ibu menyusui yang mengalami
            sumbatan ASI, ditandai dengan payudara terasa keras, nyeri, dan
            produksi ASI menurun.
            <br />
            Bertujuan melancarkan kembali aliran ASI dan mencegah risiko mastitis.
          </>
        ),
        variants: [
          {
            slug: "tersumbat-1jam",
            title: "Perawatan Payudara Tersumbat 1 Jam",
            price: 165000,
          },
          {
            slug: "tersumbat-2jam",
            title: "Perawatan Payudara Tersumbat 2 Jam",
            price: 320000,
          },
          {
            slug: "tersumbat-3jam",
            title: "Perawatan Payudara Tersumbat 3 Jam",
            price: 475000,
          },
          {
            slug: "tersumbat-4jam",
            title: "Perawatan Payudara Tersumbat 4 Jam",
            price: 630000,
          },
        ],
      },
      {
        slug: "relaktasi",
        title: "Relaktasi",
        image: "/images/packages/perawatan relaktasi.png",
        bookingLink: "https://tidycal.com/rizqiyahomecare/booking-relaktasi",
        description: (
          <>
            Usaha yang diberikan untuk mengembalikan bayi menyusu kembali ke payudara.
          </>
        ),
        variants: [
          {
            slug: "relaktasi-bayi",
            title: "Relaktasi Bayi 0 - 1 Bulan",
            price: 280000,
          },
          {
            slug: "relaktasi-bayi2",
            title: "Relaktasi Bayi 1 - 2 Bulan",
            price: 300000,
          },
        ],
      },
    ],
  },

    {
    slug: "perawatan-ibu-dan-bayi",
    title: "Perawatan Ibu dan Bayi",
    badge: "Perawatan Ibu dan Bayi",
    bookingLink: "https://tidycal.com/rizqiyahomecare/booking-perawatan-ibu-dan-bayi",
    image: "/images/categories/perawatan-ibu-dan-bayi.png",
    description: (
      <>
        Rangkaian perawatan untuk ibu dan bayi 0 - 6 bulan.
        <br />
        Informasi detail mengenai pilihan paket tersedia di bawah.
      </>
    ),
    variants: [
      {
        slug: "laktasi-bayi",
        title: "Pijat Laktasi + Pijat Bayi 1x Pertemuan (90 menit)",
        price: 265000,
      },
      {
        slug: "laktasi-bayi2",
        title: "Pijat Laktasi + Pijat Bayi 2x Pertemuan (90 menit)",
        price: 510000,
      },
      {
        slug: "laktasi-bayi3",
        title: "Pijat Laktasi + Pijat Bayi 3x Pertemuan (90 menit)",
        price: 760000,
      },
    ],
  },
];
