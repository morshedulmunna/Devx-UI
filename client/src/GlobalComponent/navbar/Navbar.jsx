import "./Navbar.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { FaChessQueen, FaLongArrowAltRight, FaHotjar } from "react-icons/fa";
import { GiChaliceDrops } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="Navbar ">
      <div className="nav container">
        <div className="search-logo">
          <img
            src="https://www.uplabs.com/logos/uplabs/default--color.svg"
            alt="Logo"
          />
          <div className="search_area">
            <div className="input">
              <input type="search" placeholder="Search" />
              <span id="search-icons">
                <AiOutlineSearch />
              </span>
            </div>
            <span>GET PREMIUM</span>
          </div>
        </div>
        <div className="right_area">
          <div className="down-Chall">
            <span className="Downloads-Btn">
              <FaChessQueen /> Get Unlimited Downloads
            </span>
            <span className="challenges">
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
        <span>
          <FaHotjar />
          Trending
        </span>
        <div class="dropdown">
          <span>Templates</span>
          <div class="dropdown-content">
            <div className="dropdown-menu">
              <div className="dropdown-left">
                <span>Web Templates</span>
                <span>Andriod Templates</span>
                <span>Logo Templates</span>
                <span>Business Card Templates</span>
                <span>Presentation Templates</span>
                <span>Infographic Templates</span>
                <span>Email Templates</span>
                <span id="all-temp">
                  All Templates <FaLongArrowAltRight />
                </span>
              </div>
              <div className="dropdown-right">
                <span>iOS Templates</span>
                <span>Others Templates</span>
                <span>Social Media Templates</span>
                <span>Resume Templates</span>
                <span>Cerfiticate Templates</span>
              </div>
            </div>
          </div>
        </div>
        <span>Illustrations</span>
        {/* Drop Down ====> */}
        <div class="dropdown">
          <span>Ui Kits</span>
          <div class="dropdown-content">
            <div className="dropdown-menu">
              <div className="dropdown-left">
                <span>iOS UI kits</span>
                <span>Android UI kits</span>
                <span id="all-temp">
                  All Ui Kits
                  <FaLongArrowAltRight />
                </span>
              </div>
              <div className="dropdown-right">
                <span>Web UI Kits</span>
                <span>Others UI Kits</span>
              </div>
            </div>
          </div>
        </div>
        {/* Drop Down ====> */}

        <span>Icons</span>
        {/* Drop Down ====> */}
        <div class="dropdown">
          <span>Mockups</span>
          <div class="dropdown-content">
            <div className="dropdown-menu">
              <div className="dropdown-left">
                <span>iOS Mockups</span>
                <span>Android Mockups</span>
                <span id="all-temp">
                  All Mockups
                  <FaLongArrowAltRight />
                </span>
              </div>
              <div className="dropdown-right">
                <span>Others Mockups</span>
                <span>Android Mockups</span>
              </div>
            </div>
          </div>
        </div>
        {/* Drop Down ====> */}
        <span>Themes</span>
        {/* Drop Down ====> */}
        <div class="dropdown">
          <span>Fonts</span>
          <div class="dropdown-content">
            <div className="dropdown-menu">
              <div className="dropdown-left">
                <span>Others Fonts</span>
                <span>Scripts Fonts</span>
                <span>Serif Fonts</span>
                <span id="all-temp">
                  All Fonts
                  <FaLongArrowAltRight />
                </span>
              </div>
              <div className="dropdown-right">
                <span>Decorative Fonts</span>
                <span>Sans-Serif Fonts</span>
              </div>
            </div>
          </div>
        </div>
        {/* Drop Down ====> */}
      </div>
    </div>
  );
};

export default Navbar;
