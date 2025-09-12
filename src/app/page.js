import OurStory from "./Components/OurStory/OurStory";
import BrandCarousel from "./Components/BrandCarousel/BrandCarousel";
import Faq from "./Components/Faq/Faq";
// import AboutUs from "./Components/AboutUs/AboutUs";
import Testimonial from "./Components/Testimonial/Testimonial";
import StatsSection from "./Components/StateSection/StateSection";
import Services from "./Components/Services/Services";
import SEO from "./Components/SEO/SEO.jsx";
import Solutions from "./Components/Solutions/page.jsx";
import SEOSection from "./Components/SEOSection/SEOSection";
// import PricingPlans from "./Components/PricingPlans/PricingPlans";

export default function Home() {
   return (
      <>
         <div>
            <OurStory />
            <BrandCarousel />

            {/* <Header/> */}
            {/* <FeatureSection/> */}
            {/* <AboutUs/> */}
            <SEO />
            <Services />
            <section className="bg-white py-1">
               <Solutions />
            </section>
            {/* <PricingPlans/> */}
            <StatsSection />
            {/* <SEOSection/> */}
            <Testimonial />
            {/* <GoogleMap/> */}
            <Faq />

         </div>

      </>
   );
}




export const metadata = {
   title: "Ocean Tech Zone - Digital Marketing Agency in Delhi, India",
   description: "Drive traffic, boost conversions, and dominate rankings with our digital marketing agency. Contact us today to elevate your online strategy and grow success.",
   keywords:
      "Digital Marketing Agency,Digital Marketing Agency in Delhi,Digital Marketing Solutions,Search Engine Optimization,website Desiging,Delhi-NCR,SEO Services,PPC Advertising,Social Media Marketing,Content Marketing,Email Marketing,Online Marketing,Digital Strategy,Marketing Solutions",
   robots: "index, follow",
   alternates: {
      canonical: "https://oceantechzone.in",
   },
   icons: {
      icon: "/meta.ico",     // favicon from your logo
      shortcut: "/logo.jpg", // browser shortcut
      apple: "/logo.jpg",    // iOS home screen icon
   },
   verification: {
      google: "lPHNTvgJ0OGhwK75Y7vjisPzK59Km_eoymKvRRQGn1I",
   },
   other: {
      Keywords: "ocean tech zone"
   }
};