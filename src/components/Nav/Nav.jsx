import { Link } from "react-router-dom";
/* import SearchBar from "../SearchBar/SearchBar"; */
import style from "../Nav/nav.module.css";
import iconNav from "../img/food-icon.jpeg";
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
      <div className={style.containerNav}>
        <div className="">
          <img className={style.iconNav} src={iconNav} alt="logo" />
        </div>
        <div className={style.containerNavSearch}>
          <div className={style.containerLinks}>
            <div>
       {/*        <Link
                className={style.link}
                to="/" onClick={message}
              >
                <i class="fa-solid fa-house"></i>
                <span className={style.nombreIcono}>Home</span>
              </Link> */}
            </div>
            <div className={style.flexIcono}>
              <Link className={style.link} to="/">
                <i class="fa-solid fa-utensils"></i>
                <span className={style.nombreIcono}>Recipes</span>
              </Link>
            </div>
            <div>
              <Link className={style.link} to="/form">
                <i class="fa-solid fa-kitchen-set"></i>
                <span className={style.nombreIcono}>Create</span>
              </Link>
            </div>
          </div>
          <div className={style.searchBar}>
         {/*    <SearchBar /> */}
          </div>
        </div>

        <ToastContainer/>
      </div>
     
    </div>
  );
};

export default Nav;
