import { FiFastForward } from "react-icons/fi";

import Image from "next/image";
import Button from "../ui/button";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
      <div className="relative self-center">
        <Image
          src="/images/hero1.png"
          width={432}
          height={423}
          alt="image baby"
          className="grayscale absolute -left-15 -top-0"
        />
        <div className="relative ml-40 w-full">
          {/* <div className="text-primary italic">Friday Sale, 50%</div> */}
          <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#e40505] bg-clip-text text-transparent">
            MERAWAT SEPENUH HATI <br/> DENGAN AMANAH  <br /> DAN KASIH SAYANG
          </h1>
          <p className="w-1/2 mt-10 leading-loose">
            Ikhtiar merawat dengan kasih sayang dan doa, pelayanan tulus yang berlandaskan amanah. <br />
            Menghadirkan ketenangan di setiap proses perawatan. Mengharap ridha dan keberkahan dari-Nya.
          </p>
          <div className="flex gap-5 mt-14">
            {/* <Button>
              Explore More <FiFastForward /> 
            </Button>
            <Button variant="ghost">
              Watch Video {" "}
              <Image
                src="/images/icon-play-video.svg"
                width={29}
                height={29}
                alt="icon play"
              />
            </Button> */}
          </div>        
        </div>
        {/* <Image
          src="/images/img-hero.png"
          width={700}
          height={950}
          alt="image sporton hero"
          className="absolute -right-5 top-1/2 -translate-y-1/2"
        /> */}
      </div>
      <Image
        src="/images/hero2.png"
        width={420}
        height={420}
        alt="baby and mom"
        className="absolute -right-[200px] top-1/2 -translate-y-1/2 "
      />
    </section>
  );
};

export default HeroSection;