import React, { useEffect } from "react";
import { getRecipesById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Style from "../Detail/detail.module.css"

 const Details = () => {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipesById(id));
  }, [dispatch, id]);

  return (
    <div className={Style.containerDetail}>
      <Link to="/home">
        <button type="button" className="btn btn-secondary">
          Back
        </button>
      </Link>
      <div>
      <h2>{data.name}</h2>
      <p>Health Score: {data.healthScore}</p>
      <p>Punctuation: {data.spoonacularScore}</p>
      <img src={data.image} alt={data.name} />
      <p>type of diet: {data.diets}</p>
      </div>
      <div className={Style.parrafo}>
      <p>steps: {data.steps}</p>
      <p>Resume: {data.resume}</p>
      </div>
    </div>
  );
}

export default Details;