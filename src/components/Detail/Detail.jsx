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
  console.log(data)
  return (

    <div>
    
    <div className={Style.containerDetail}>
     
      {data && (
        <div className={Style.containerDetails}>
        <div className={Style.containerTitleImg}>
          <h2 className={Style.h2}>{data.name}</h2>
          <img className={Style.img} src={data.image} alt={data.name} />
   
       </div>
       <div className={Style.containerResume}>
          <p>Summary: {data.summary}</p>
          <p>Health Score: {data.healthScore}</p>
          <p>Steps: {data.steps}</p>
          Type of diet:
          {
            data.Diets?.map((diet) => <span key={diet.id} >{diet.name}</span>)
          }
          </div>
        </div>
      )}
      <div className={Style.parrafo}></div>
    </div>
    <Link to="/home">
        <button type="button" className={Style.btnBack}>
          Back
        </button>
      </Link>
    </div>
  );
}

export default Details;