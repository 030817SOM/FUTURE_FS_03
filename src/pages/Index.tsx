import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Quote } from "@/components/site/Quote";
import { Gallery } from "@/components/site/Gallery";
import { Reserve } from "@/components/site/Reserve";
import { Visit } from "@/components/site/Visit";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Quote />
      <Gallery />
      <Reserve />
      <Visit />
      <Footer />
    </main>
  );
};

export default Index;
