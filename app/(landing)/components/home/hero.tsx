import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="relative">
          <Image
            src="/images/hero1.png"
            width={432}
            height={423}
            alt="image baby"
            className="
              grayscale absolute 
              -left-12 -top-12
              w-40 sm:w-52 md:w-72
              opacity-30 md:opacity-100
            "
          />

          <h1 className="
            font-extrabold italic leading-tight
            bg-gradient-to-b from-black to-[#e40505]
            bg-clip-text text-transparent
            text-[clamp(28px,6vw,40px)]
          ">
            <span className="block whitespace-nowrap">MERAWAT SEPENUH HATI</span>
            <span className="block whitespace-nowrap">DENGAN AMANAH</span>
            <span className="block whitespace-nowrap">DAN KASIH SAYANG</span>
          </h1>

          <p className="mt-6 md:mt-10 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            Ikhtiar merawat dengan kasih sayang dan doa, pelayanan tulus yang
            berlandaskan amanah. Menghadirkan ketenangan di setiap proses
            perawatan. Mengharap ridha dan keberkahan dari-Nya.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">
          <Image
            src="/images/hero2.png"
            width={420}
            height={420}
            alt="baby and mom"
            className="w-64 sm:w-72 md:w-96"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
