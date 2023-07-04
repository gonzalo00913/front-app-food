import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Style from "../Nav/nav.module.css"


const Nav = () => {
  return (
    <div className={Style.nav}>
      <div className={Style.containerNavSearch} >
      <div className={Style.containerLinks}>
      <Link className={Style.link} to="/About">About</Link>
      <Link className={Style.link} to="/Home">Recipes</Link>
      <Link className={Style.link} to="/Form">Create</Link>
      </div>
      <div className={Style.searchBar}>
      <SearchBar />
      </div>
    </div>
    </div>
  );
};

export default Nav;
