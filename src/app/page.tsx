import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Payments from "@/components/Payments";
import Stories from "@/components/Stories";
import TopBar from "@/components/Topbar";
import Videos from "@/components/Videos";
import WhyEnki from "@/components/WhyEnki";


export default function HomePage() {
  return (
    <div className="bg-enkiCream text-enkiNavy font-sans">
      <TopBar />
      <Header />
      <Hero />
      <WhyEnki />
      <Stories />
      <Videos />
      <Payments />
      <Newsletter />
      <Footer />
    </div>
  );
}
