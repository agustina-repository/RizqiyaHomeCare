import CategorySection from "./components/home/categories";
import HeroSection from "./components/home/hero";
import TestimonialSection from "./components/home/testimonials-section";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <CategorySection/>
      <TestimonialSection/>
    </main>
  )
}
