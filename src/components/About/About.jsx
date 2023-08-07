import React from "react";
import Style from "../About/about.module.css";

import { Link } from "react-router-dom";
import imgLogo from "../img/food-icon-2.png";
import img from "../Logos/react.png";
import img1 from "../Logos/redux.png";
import img2 from "../Logos/nodejs.png";
import img3 from "../Logos/postgresql.png";
import img4 from "../Logos/sequelize.png";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div>
      <div className={Style.flexTitleImage}>
        <img className={Style.imgAbout} src={imgLogo} alt="logo" />
        <h1 className={Style.h1TypingAnimation}>About Homemade Delights</h1>
        <img className={Style.imgAbout} src={imgLogo} alt="logo" />
      </div>
      <article className={Style.articleOne}>
        <section className={Style.sectionParrafo}>
          <div className={Style.containerImgParrafo}>
            <p className={Style.parrafo}>
              Homemade Delights is an application that allows you to discover
              and explore more than 100 recipes. You can see the details of each
              recipe, search for them by name, filter them and also create your
              own recipes.
            </p>
          </div>
        </section>

        <section className={Style.sectionLogos}>
          <div className={Style.containerTechnologiesLogos}>
            <h2 className={Style.h2}>technologies</h2>
            <img className={Style.img} src={img} alt="logo" />
            <img className={Style.img} src={img1} alt="logo" />
            <img className={Style.img} src={img2} alt="logo" />
            <img className={Style.img} src={img3} alt="logo" />
            <img className={Style.img} src={img4} alt="logo" />
          </div>
        </section>
      </article>
      <hr />
      <div>
        <h2>More projects</h2>
        <p></p>
      </div>
      <Link to="/home">
        <button type="button" className={Style.btn}>
          Back
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default About;
