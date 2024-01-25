import AboutSection from "@/components/AboutSection";
import ArtistSection from "@/components/ArtistSection";
import GigsSection from "@/components/GigsSection";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <HeroSection />
      <AboutSection />
      <GigsSection />

      <ArtistSection />
      <ContactSection/>

    </>
  );
}
