import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Style from "../Nav/nav.module.css";
import imgLogo from "../img/food-icon.png";

const Nav = () => {
  return (
    <div>
      <div className={Style.nav}>
        <div className="">
          <img className={Style.ban} src={imgLogo} alt="logo" />
        </div>
        <div className={Style.containerNavSearch}>
          <div className={Style.containerLinks}>
            <Link className={Style.link} to="/About">
              <i class="fa-solid fa-address-card"></i>
              <span className={Style.nombreIcono}>About</span>
            </Link>

            <Link className={Style.link} to="/Home">
              <i class="fa-sharp fa-solid fa-bowl-food"></i>
              <span className={Style.nombreIcono}>Recipes</span>
            </Link>

            <Link className={Style.link} to="/Form">
              <i class="fa-solid fa-folder-plus"></i>
              <span className={Style.nombreIcono}>Create</span>
            </Link>
          </div>
          <div className={Style.searchBar}>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
