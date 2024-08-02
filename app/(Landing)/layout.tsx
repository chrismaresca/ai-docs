import LandingPageHeader from "@/components/LandingPage/Header";
import LandingPageFooter from "@/components/LandingPage/Footer";

export default function LandingPageLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-hidden ">
      {/* Include shared UI here e.g. a header or sidebar */}
      <LandingPageHeader />

      <div className="max-w-[70rem] mx-auto px-4 sm:px-6 md:px-8 lg:pt-5">
        {children}
        <LandingPageFooter />
      </div>
    </div>
  );
}
