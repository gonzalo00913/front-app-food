import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipesById } from "../../redux/actions";
import Style from "../Card/card.module.css";

const Card = ({ recipe, getRecipesById }) => {
  console.log("Recipe:", recipe);
  const handleRecipeClick = () => {
    getRecipesById(recipe.id);
  };

  return (
    <div className={Style.containerCardAll}>
      <div className={Style.card}>
        <img className={Style.cardImage} src={recipe.image} alt={recipe.name} />
        <Link to={`/detail/${recipe.id}`} onClick={handleRecipeClick}>
          <h2 className={Style.cardName}>{recipe.name}</h2>
        </Link >
     {/*    <div className={Style.ul}>
        {recipe.Diets.map((diet) => (
          <h5 className={Style.li}>{diet.name}</h5>
        ))}
        </div> */}
 
      </div>
    </div>
  );
};

export default connect(null, { getRecipesById })(Card);
