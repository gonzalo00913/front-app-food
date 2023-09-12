import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Style from "../Nav/nav.module.css";
import imgLogo from "../img/food-icon.jpeg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Nav = () => {

  const message = () =>{
    toast.error('In progress!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div>
      <div className={Style.nav}>
        <div className="">
          <img className={Style.ban} src={imgLogo} alt="logo" />
        </div>
        <div className={Style.containerNavSearch}>
          <div className={Style.containerLinks}>
            <div>
              <Link
                className={Style.link}
                /* to="/About" */ onClick={message}
              >
            {/*     <i class="fa-solid fa-address-card"></i> */}
                <span className={Style.nombreIcono}>ABOUT</span>
              </Link>
            </div>
            <div className={Style.flexIcono}>
              <Link className={Style.link} to="/">
                {/* <i class="fa-solid fa-utensils"></i> */}
                <span className={Style.nombreIcono}>RECIPES</span>
              </Link>
            </div>
            <div>
              <Link className={Style.link} to="/form">
              {/*   <i class="fa-solid fa-kitchen-set"></i> */}
                <span className={Style.nombreIcono}>CREATE</span>
              </Link>
            </div>
          </div>
          <div className={Style.searchBar}>
            <SearchBar />
          </div>
        </div>

        <ToastContainer/>
      </div>
     
    </div>
  );
};

export default Nav;
