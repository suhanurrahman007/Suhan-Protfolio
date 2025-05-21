import About from "@/src/components/UI/about/About";
import { Banner } from "@/src/components/UI/banner/banner";
import ContactUs from "@/src/components/UI/ContactUs/ContactUs";
import Footer from "@/src/components/UI/Footer/Footer";
import Skill from "@/src/components/UI/skils/Skils";

export default function Home() {
  return (
    <>
      <Banner />
      <Skill />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}
