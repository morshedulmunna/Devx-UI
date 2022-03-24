import "./Home.scss";
import BrowseBySoftwares from "./homeComponent/browseBySoftwares/BrowseBySoftwares";
import HomeHeader from "./homeComponent/homeHeader/HomeHeader";
import Product from "./homeComponent/product/Product";
import TrendingDesign from "./homeComponent/trendingDesign/TrendingDesign";

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
          <TrendingDesign />
        </div>
        <h2>
          Browse by softwares
          <span>
            Filter quality downloads for your next project by softwares
          </span>
        </h2>
        <div className="soft-logo">
          <BrowseBySoftwares />
          <BrowseBySoftwares />
          <BrowseBySoftwares />
          <BrowseBySoftwares />
          <BrowseBySoftwares />
          <BrowseBySoftwares />
        </div>
        <h2>
          Today
          <span>MARCH 24TH</span>
        </h2>
        <div className=" products ">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
