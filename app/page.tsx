import Hero from '@/components/Hero';
import About from '@/components/About';
import FrequentReasons from '@/components/FrequentReasons';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import HealthInsurance from '@/components/HealthInsurance';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HealthInsurance />
      <FrequentReasons />

      <Testimonials />
      <Contact />
    </>
  );
}
