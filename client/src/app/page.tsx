import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { CourseCategories } from "@/components/sections/CourseCategories";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <CourseCategories />
      <Partners />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
