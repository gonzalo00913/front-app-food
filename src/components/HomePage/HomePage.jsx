import { NavLink } from "react-router-dom";
import Style from "../HomePage/homePage.module.css";
import backgroundImage from "../img/img-home-page.jpg";

const HomePage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
  };

  return (
    <div style={backgroundStyle}>
      
      <div className={Style.containertitleParrafo}>
        <h2 className={Style.title}>My Food app</h2>
        <p className={Style.parrafo}>
          "Discover a wide variety of delicious recipes that will inspire you to
          create dishes. In addition, you will be able to explore valuable
          culinary tips and tricks that will help you hone your gastronomic
          skills."
        </p>
        <NavLink className={Style.boton} to="/home">Enter</NavLink>
      </div>
  
    </div>
  );
};

export default HomePage;
