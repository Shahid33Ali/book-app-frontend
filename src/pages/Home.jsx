import Banner from "../components/Banner";
import Recommened from "../components/Recommended";
import TopSellers from "../components/TopSellers";
import News from "../components/News";
const Home = () => {
  return (
    <>
      <Banner />;
      <TopSellers />
      <Recommened />
      <News />
    </>
  );
};

export default Home;
