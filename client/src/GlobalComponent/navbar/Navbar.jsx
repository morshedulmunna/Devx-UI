import "./Navbar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { FaChessQueen } from "react-icons/fa";
import { GiChaliceDrops } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="Navbar ">
      <div className="nav container">
        <div className="search_area">
          <img
            src="https://www.uplabs.com/logos/uplabs/default--color.svg"
            alt="Logo"
          />
          <div className="input">
            <input type="search" placeholder="Search" />
            <span id="search-icons">
              <AiOutlineSearch />
            </span>
          </div>
          <span>GET PREMIUM</span>
        </div>
        <div className="right_area">
          <div className="down-Chall">
            <span>
              <FaChessQueen /> Get Unlimited Downloads
            </span>
            <span>
              <GiChaliceDrops /> Challenges
            </span>
          </div>
          <div className="login-Upload">
            <span>UPLOAD</span>
            <span>LOGIN</span>
          </div>
        </div>
      </div>
      <div className=" container nav-btn">
        <span>Trending</span>
        <span>Templates</span>
        <span>Illustrations</span>
        <span>UI kits</span>
        <span>Icons</span>
        <span>Mockups</span>
        <span>Themes</span>
        <span>Fonts</span>
      </div>
    </div>
  );
};

export default Navbar;
