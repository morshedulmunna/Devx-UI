import "./Home.scss";
import HomeHeader from "./homeComponent/HomeHeader";
import TrendingDesign from "./trendingDesign/TrendingDesign";

const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <div className="container Home-Card ">
        <h2>Trading Design File</h2>
        <div className="Each-Design">
          <TrendingDesign />
          <TrendingDesign />
          <TrendingDesign />
          <TrendingDesign />
          <TrendingDesign />
          <TrendingDesign />
          <TrendingDesign />
        </div>
      </div>
    </div>
  );
};

export default Home;
