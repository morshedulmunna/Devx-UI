import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav">
        <img
          src="https://www.uplabs.com/logos/uplabs/default--color.svg"
          alt="Logo"
        />
        <div className="search_area">
          <input type="search" />
          <span>Get Premium</span>
        </div>
        <div className="right_area">
          <div className="down-Chall">
            <span>Get Downloads</span>
            <span>Challenges</span>
          </div>
          <div className="login-Upload">
            <span>UPLOAD</span>
            <span>LOGIN</span>
          </div>
        </div>
      </div>
      <div className="nav-btn">
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
