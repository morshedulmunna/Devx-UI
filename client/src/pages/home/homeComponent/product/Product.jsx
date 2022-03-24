import "./Product.scss";

const Product = (props) => {
  const { img } = props.pic;

  return (
    <div className="container Product">
      <div className="wrapper">
        <img src={img} alt="Product" />
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
