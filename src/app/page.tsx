import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import DemoVideo from "@/components/DemoVideo";
import Specs from "@/components/Specs";
import Tiers from "@/components/Tiers";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Story />
        <HowItWorks />
        <Features />
        <DemoVideo />
        <Specs />
        <Tiers />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
