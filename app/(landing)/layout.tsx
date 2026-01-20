import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer"

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Pijat Laktasi, Bayi dan Anak Terbaik di Jakarta | Rizqiya Home Care",
  description: "Layanan home care profesional: Pijat laktasi, pijat bayi, dan perawatan ibu pasca melahirkan di Jakarta. Terapis ahli datang ke rumah Anda!",
  keywords: ["pijat laktasi jakarta", "pijat bayi panggil", "home care ibu dan anak", "rizqiya home care"],
  authors: [{ name: "Rizqiya Home Care" },
            { name: "Amanah Tech"}
  ],
  verification: {
    google: "7-CHgcb3LZQG-rxkyw6ygfsnIg3COlNvBs6BWpfaAe8",
  },
  openGraph: {
    title: "Rizqiya Home Care - Layanan Pijat Ibu & Bayi Profesional",
    description: "Terapis ahli datang ke rumah untuk kenyamanan Bunda dan Si Kecil.",
    url: "https://rizqiya-home-care.vercel.app", 
    siteName: "Rizqiya Home Care",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

<meta name="google-site-verification" content="7-CHgcb3LZQG-rxkyw6ygfsnIg3COlNvBs6BWpfaAe8" />


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.className} antialiased`}>
        <Header/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
