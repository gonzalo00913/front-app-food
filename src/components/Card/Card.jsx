import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipesById } from "../../redux/actions";
import style from "../Card/card.module.css";

const Card = ({ recipe, getRecipesById }) => {
  console.log("Recipe:", recipe);
  const handleRecipeClick = () => {
    getRecipesById(recipe.id);
  };

  return (
    <div className={style.containerCardAll}>
      <div className={style.card}>
        <Link
          className={style.link}
          to={`/detail/${recipe.id}`}
          onClick={handleRecipeClick}
        >
          <img
            className={style.cardImage}
            src={recipe.image}
            alt={recipe.name}
          />
        </Link>
        <h2 className={style.cardName}>{recipe.name}</h2>
    {/*     <div className={style.ul}>
          {recipe.Diets.map((diet) => (
            <span className={style.span}>{diet.name}</span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default connect(null, { getRecipesById })(Card);
