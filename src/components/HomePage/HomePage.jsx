import { NavLink } from "react-router-dom";
import Style from "../HomePage/homePage.module.css";
import imgLogoInicio from "../img/logo-inicio-page.png";
import imgIncioFood from "../img/img-inicio-food.jpg";

const HomePage = () => {
  return (
    <div className={Style.containerColor}>
      <div className={Style.containerColorOne}>
        <div className={Style.containerh1Parrafo}>
          <h1 className={Style.h1}>¡Homemade Delights!</h1>
          <p className={Style.parrafo}>
            Discover a wide variety of <strong className={Style.strong}>"delicious recipes"</strong> that
            will inspire you to create dishes. In addition, you will be able to
            explore <strong className={Style.strong}>"valuable culinary tips and tricks"</strong> that will
            help you hone your gastronomic skills.
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
