import Hero from "../components/Hero";
import WhyChooseBluestone from "../components/WhyChooseBluestone";
import About from "./About";
import Programs from "./Program";
import ContactUs from "./Contact";
import Gallery from "./Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseBluestone />
      <About />
      <Programs />
      <ContactUs />
      <Gallery />
    </>
  );
}
