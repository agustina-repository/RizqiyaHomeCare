import CategorySection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import TestimonialSection from "./components/home/testimonials-section";
import RuangEdukasi from "../edukasi/section/RuangEdukasi"

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <CategorySection/>
      <RuangEdukasi />
      <TestimonialSection/>
    </main>
  )
}
