import "./Product.scss";

const Product = () => {
  return (
    <div className="container Product">
      <div className="wrapper">
        <img
          src="https://assets.materialup.com/uploads/4e981b79-1854-4945-95ad-219b86f29f35/teaser.png"
          alt="Product"
        />
        <p>Marketing Agency Landing Page UI Kit</p>
        <div className="icon-type">
          <img src="https://www.uplabs.com/tools/icons/xd.png" alt="icon" />
          <span>FREE</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
