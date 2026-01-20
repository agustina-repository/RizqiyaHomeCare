import { ReactNode } from "react";

/* ================= TYPES ================= */

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
};

export type Product = {
  slug: string;
  title: string;
  badge: string;
  image: string;
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

/* ================= DATA ================= */

export const productData: Product[] = [
  {
    slug: "kelas-sebelum-kelahiran",
    title: "Kelas Sebelum Kelahiran",
    badge: "Kelas Sebelum Melahirkan",
    image: "/images/categories/kelas-sebelum-kelahiran.png",
    description: (
      <>
        Wadah edukatif bagi calon orang tua dalam mempersiapkan diri menyambut
        kehadiran buah hati. Materi meliputi edukasi laktasi, teknik memandikan
        bayi, perawatan tali pusat, serta pijat bayi yang aman dan tepat.
        <br />
        Informasi detail mengenai pilihan paket tersedia di bawah.
        
      </>
    ),
    variants:[
      {
        slug: "konsultasi-60-menit",
        title: "Konsultasi 60 Menit dan Kosultasi",
        price: 250000,
      }
    ]
  },
    {
    slug: "baby-spa",
    title: "Baby SPA",
    badge: "Baby SPA",
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
        slug: "3-perawatan",
        title: "3 Perawatan",
        price: 150000,
      },
    ]
  },

  {
    slug: "pijat-bayi-dan-anak",
    title: "Pijat Bayi dan Anak",
    badge: "Pijat Bayi & Anak",
    image: "/images/categories/pijat-bayi-dan-anak.png",
    description: (
      <>
        Rangkaian perawatan lengkap yang dirancang untuk mendukung kenyamanan,
        kebersihan, serta tumbuh kembang si kecil sejak usia newborn hingga anak
        berusia di atas 2 tahun.
        <br />
        Paket mencakup pijat newborn, pijat bayi dan anak, serta perawatan
        tambahan seperti cukur rambut dan manicure pedicure anak.
        <br />
        Informasi detail mengenai pilihan paket tersedia di bawah.
      </>
    ),
    variants: [
      {
        slug: "pijat-newborn",
        title: "Pijat Newborn",
        price: 120000,
      },
      {
        slug: "pijat-bayi",
        title: "Pijat Bayi (1–12 bulan)",
        price: 130000,
      },
      {
        slug: "pijat-anak",
        title: "Pijat Anak (>2 tahun)",
        price: 150000,
      },
      {
        slug: "cukur-rambut",
        title: "Cukur Rambut Bayi & Anak",
        price: 50000,
      },
      {
        slug: "manicure-pedicure",
        title: "Manicure & Pedicure Anak",
        price: 60000,
      },
    ],
  },

  {
    slug: "perawatan-ibu",
    title: "Perawatan Ibu",
    badge: "Perawatan Ibu",
    image: "/images/categories/perawatan-ibu.png",
    description: (
      <>
        Layanan perawatan khusus untuk ibu menyusui yang berfokus pada kelancaran
        ASI dan kesehatan payudara.<br />
        Perawatan ini terdiri dari <strong>Pijat Laktasi</strong> dan
        <strong> Penanganan Payudara Tersumbat</strong>.<br/>
        Penjelasan lengkap tersedia di bawah.
      </>
    ),
    packages: [
      {
        slug: "pijat-laktasi",
        title: "Pijat Laktasi",
        image: "/images/packages/pijat laktasi.png",
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
            price: 150000,
          },
          {
            slug: "laktasi-plus-konsultasi",
            title: "Pijat Laktasi + Konsultasi",
            price: 250000,
          },
          {
            slug: "laktasi-3x",
            title: "Paket Pijat Laktasi 3x",
            price: 435000,
            note: "Lebih hemat untuk perawatan rutin",
          },
          {
            slug: "laktasi-5x",
            title: "Paket Pijat Laktasi 5x",
            price: 700000,
            note: "Paket terbaik & paling hemat",
          },
        ],
      },
      {
        slug: "payudara-tersumbat",
        title: "Payudara Tersumbat",
        image: "/images/packages/payudara tersumbat.png",
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
            price: 150000,
          },
          {
            slug: "tersumbat-2jam",
            title: "Perawatan Payudara Tersumbat 2 Jam",
            price: 280000,
          },
          {
            slug: "tersumbat-3jam",
            title: "Perawatan Payudara Tersumbat 3 Jam",
            price: 400000,
          },
        ],
      },
    ],
  },
];
