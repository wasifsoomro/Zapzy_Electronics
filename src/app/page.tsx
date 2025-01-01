import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrival";
import TopSelling from "@/components/TopSelling";
import DressStyleSection from "@/components/DressStyleSection";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <NewArrivals />
      <TopSelling />
      <DressStyleSection />
      <Testimonials/>
    </div>
  );
}
