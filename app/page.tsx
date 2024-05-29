import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import PartnerLogo from "@/components/PartnerLogo";
import Portfolio from "@/components/Portfolio";
import Reasons from "@/components/Reasons";
import Review from "@/components/Review";
import Service from "@/components/Service";

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnerLogo />
      <Service />
      <Introduction />
      <Reasons />
      <Portfolio />
      <Review />
      <Contact />
    </div>
  );
}
