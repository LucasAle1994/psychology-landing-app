import Hero from '@/components/Hero';
import About from '@/components/About';
import FrequentReasons from '@/components/FrequentReasons';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FrequentReasons />
      <Services />

      <Testimonials />
      <Contact />
    </>
  );
}
