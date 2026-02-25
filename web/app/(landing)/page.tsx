import CategorySection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import TestimonialSection from "./components/home/testimonials-section";
import RuangEdukasi from "../edukasi/section/RuangEdukasi"
import Certifications from "./components/certification/certifications";
import VipTrust from "./components/home/vip";


export default function Home() {
  return (
    <main>
      <HeroSection/>
      <CategorySection/>
      <RuangEdukasi />
      <Certifications />
      <VipTrust />
      <TestimonialSection/>
    </main>
  )
}
