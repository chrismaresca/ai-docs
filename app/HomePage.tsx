import LandingPageHero from "@/components/LandingPage/Hero";
import WritingStyle from "@/components/LandingPage/Features/WritingStyle";
import Testimonials from "@/components/LandingPage/Testimonials";
import FAQ from "@/components/LandingPage/FAQs";
import Pricing from "@/components/LandingPage/Pricing";

interface HomePageProps {
  email?: string;
}

export default function HomePage({ email }: HomePageProps) {
  return (
    <>
      <LandingPageHero />
      <WritingStyle />
      <Testimonials />
      <Pricing />
      <FAQ />

      {/* <HeroDesktop /> */}
    </>
  );
}
