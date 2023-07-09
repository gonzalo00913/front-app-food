import { NavLink } from "react-router-dom";
import Style from "../HomePage/homePage.module.css";
/* import backgroundImage from "../img/img-home-page.jpg"; */
import imgLogoInicio from "../img/logo-inicio-page.png";
import imgIncioFood from "../img/img-inicio-food.jpg";
const HomePage = () => {
  /*   const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
  }; */

  return (
    /*       <div className={Style.containertitleParrafo}>
        <h2 className={Style.title}>My Food app</h2>
        <p className={Style.parrafo}>
          "Discover a wide variety of delicious recipes that will inspire you to
          create dishes. In addition, you will be able to explore valuable
          culinary tips and tricks that will help you hone your gastronomic
          skills."
        </p>
        <NavLink className={Style.boton} to="/home">Enter</NavLink>
      </div> */
    <div className={Style.containerColor}>
      <div className={Style.containerColorOne}>
        <div className={Style.containerh1Parrafo}>
          <h1 className={Style.h1}>Food App</h1>
          <p className={Style.parrafo}>
            "Discover a wide variety of delicious recipes that will inspire you
            to create dishes. In addition, you will be able to explore valuable
            culinary tips and tricks that will help you hone your gastronomic
            skills."
          </p>
        </div>

        <div className={Style.containerBtnImg}>
          <img className={Style.logoInicio} src={imgLogoInicio} alt="logo" />
          <NavLink className={Style.boton} to="/home">
            explore recipes
          </NavLink>
        </div>
      </div>

      <div className={Style.containerColortwo}>
        <img className={Style.imgIncioFood} src={imgIncioFood} alt="logo" />
      </div>
    </div>
  );
};

export default HomePage;
