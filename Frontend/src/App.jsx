import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import FleetStats from "./component/FleetStats";
import Services from "./component/Services";
import ShipTable from "./component/ShipTable";
import CaptainSection from "./component/CaptainSection";
import Testimonials from "./component/Testimonials";
import FAQ from "./component/FAQ";
import ContactSection from "./component/ContactSection";
import Newsletter from "./component/Newsletter";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FleetStats />
      <Services />
      <ShipTable />
      <CaptainSection />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;