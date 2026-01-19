import Image from "next/image";
import Link from "next/link";   

const FooterSection = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const instagramUser = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT;

  return (
    <footer className="bg dark bg-dark-alternate text-white mt-52">
      <div className="container mx-auto flex justify-between pt-14 pb-24">
        <div className="w-105">
          <Image
            src="/images/logo-rhc.png"
            alt="logo rhc footer"
            width={187}
            height={44}
          />
          <p className="mt-8">
            Perawatan terbaik dengan kepedulian dan ketulusan, sigap hadir di rumah Anda.
          </p>
        </div>
        <div className="w-105 grid grid-cols-2">
          <div className="flex gap-7 flex-col">
            <Link href="#">RHC</Link>
            <Link href="#">Layanan Kami</Link>
            <Link href="#">Suara Mereka</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href={`https://www.instagram.com/${instagramUser}`} >Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">TikTok</Link>
            <Link href="#">YouTube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="container mx-auto py-6.5 flex justify-between">
          <div>Rizqiya Home Care © 2025 All Rights Reserverd.</div>

          <div className="grid grid-cols-2 w-105">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default FooterSection;