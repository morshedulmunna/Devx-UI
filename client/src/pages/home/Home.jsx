import { useEffect, useState } from "react";
import "./Home.scss";
import BrowseBySoftwares from "./homeComponent/browseBySoftwares/BrowseBySoftwares";
import HomeHeader from "./homeComponent/homeHeader/HomeHeader";
import Product from "./homeComponent/product/Product";
import TrendingDesign from "./homeComponent/trendingDesign/TrendingDesign";

const pictures = [
  {
    img: "https://assets.materialup.com/uploads/33c89b4b-cc3f-4a2c-84cd-0663a3a893e8/teaser.png",
  },
  {
    img: "https://assets.materialup.com/uploads/95a9949e-c11b-407d-bc25-4660932e3e01/teaser.png",
  },
  {
    img: "https://assets.materialup.com/uploads/0a316ea6-be4b-4982-8412-7df486502275/teaser.png",
  },
  {
    img: "https://assets.materialup.com/uploads/c43ae71d-ae2b-4fbb-b919-8b41b1687311/teaser.png",
  },
  {
    img: "https://assets.materialup.com/uploads/74958693-ef52-4f22-832b-639a1cb6c3d4/teaser.png",
  },
  {
    img: "https://assets.materialup.com/uploads/469ee51a-e15b-4dff-ae75-a4b1ca7749cf/teaser.png",
  },
  {
    img: "https://assets.materialup.com/uploads/bf23626d-0b9b-4640-84cc-44ff6210f70e/teaser.png",
  },
  {
    img: "https://assets.materialup.com/uploads/b635baff-228f-4363-a005-950548134aa8/teaser.png",
  },
  {
    img: "https://assets.materialup.com/uploads/4e981b79-1854-4945-95ad-219b86f29f35/teaser.png",
  },
  {
    img: "https://assets.materialup.com/uploads/a31e266c-1176-477d-bd58-0b0267042e69/teaser.png",
  },
];

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
          {pictures.map((picture) => (
            <Product pic={picture} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
