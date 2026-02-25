import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="rhc-section" className="relative overflow-hidden pt-6 md:pt-10 pb-12 md:pb-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="relative z-10">
          <span className="block text-sm md:text-base font-medium text-gray-400 mb-1">
            Selamat Datang di
          </span>
          <h1 className="
            font-extrabold text-[clamp(110px,10vw,90px)]
            leading-[0.9] tracking-tighter mb-4 w-full md:whitespace-nowrap">
            Rizqiya <span className="text-primary">Home Care</span>
          </h1>
          
          <div className="absolute top-[120px] md:top-[140px] -left-10 -z-10">
            <Image 
            src="/images/hero1.png"
            width={432}
            height={423}
            alt="image baby"
            className="grayscale w-40 sm:w-52 md:w-80 opacity-15 md:opacity-40"/>
          </div>

          <h2 className="
            font-extrabold italic leading-tight text-[clamp(24px,5vw,36px)] mt-40">
            <span className="block text-gray-800">MERAWAT SEPENUH HATI</span>
            <span className="block text-gray-700">DENGAN AMANAH</span>
            <span className="block text-primary">DAN KASIH SAYANG</span>
          </h2>

          <p className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-gray-600">
            Ikhtiar merawat dengan kasih sayang dan doa, pelayanan tulus yang
            berlandaskan amanah. Menghadirkan ketenangan di setiap proses
            perawatan. Mengharap ridha dan keberkahan dari-Nya.
          </p>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <Image
            src="/images/hero2.png"
            width={420}
            height={420}
            alt="baby and mom"
            className="w-64 sm:w-72 md:w-[450px] object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;