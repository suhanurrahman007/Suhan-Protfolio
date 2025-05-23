import About from "@/src/components/UI/about/About";
import { Banner } from "@/src/components/UI/banner/banner";
import ContactUs from "@/src/components/UI/ContactUs/ContactUs";
import HeroSection from "@/src/components/UI/ExploreCollection/ExploreCollection";
import Footer from "@/src/components/UI/Footer/Footer";
import FooterDemo from "@/src/components/UI/Footer/FooterDemo";
 import { ProjectBanner } from "@/src/components/UI/ProjectBanner/ProjectBanner";
import Skill from "@/src/components/UI/skils/Skils";
import { TimelineDemo } from "@/src/components/UI/Timeline/Timeline";

export default function Home() {
  return (
    <>
      <Banner />
      <HeroSection />
      <About />
      <ProjectBanner />
      <Skill />
      <TimelineDemo />
      <ContactUs />
      <Footer />
      <FooterDemo />
    </>
  );
}
