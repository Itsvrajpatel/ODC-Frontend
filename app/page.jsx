import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Banner from '../components/Banner';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Banner />
      <ContactForm />
      <Footer />
    </main>
  );
}
