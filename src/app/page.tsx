import { Hero } from "@/components/Hero";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col justify-between">
      <Hero />
      <ContactSection />
      <Footer />
    </main>
  );
}
