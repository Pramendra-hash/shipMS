import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import AddShip from "../component/AddShip";
import Ships from "../component/Ships";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AddShip />
      <Ships />
      <Footer />
    </>
  );
};

export default Home;