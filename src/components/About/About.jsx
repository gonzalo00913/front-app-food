import React from 'react'
import Style from "../About/about.module.css"
import { Link } from "react-router-dom";
import imgLogo from "../img/food-icon-2.png";
import img from "../Logos/react.png";
import img1 from "../Logos/redux.png";
import img2 from "../Logos/nodejs.png";
import img3 from "../Logos/postgresql.png";
import img4 from "../Logos/sequelize.png";



const About = () =>{
    return(
        <div className={Style.containerAbout}>
            <h1 className={Style.h1}>Food App</h1>
            <div className={Style.containerImgParrafo}>
            <img className={Style.imgAbout} src={imgLogo} alt="logo" />
          <p className={Style.parrafo}>Food App is an application that allows you to discover and explore more than 100 recipes.
          You can see the details of each recipe, search for them by name, filter them and also create your own recipes.</p>
            </div>
            <div className={Style.containerTechnologiesLogos}>
              <h2>technologies</h2>
              <img className={Style.img} src={img} alt="logo" />
              <img className={Style.img} src={img1} alt="logo" />
              <img className={Style.img} src={img2} alt="logo" />
              <img className={Style.img} src={img3} alt="logo" />
              <img className={Style.img} src={img4} alt="logo" />
            </div>
            <Link to="/home">
        <button type="button" className="btn btn-secondary">
          Back
        </button>
      </Link>
     
        </div>
    )
}

export default About;