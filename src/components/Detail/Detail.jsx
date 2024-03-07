import React, { useEffect } from "react";
import { getRecipesById } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Style from "../Detail/detail.module.css";
import backgroundDetail from "../img/background-detail.jpeg";
import Togglable from "../Togglable";

const Details = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipesById(id));
  }, [dispatch, id]);
  console.log(data);
  return (
    <div className={Style.bgColorForm}>
      <div className={Style.containerDetail}>
        {data && (
          <div className={Style.containerDetails}>
            <div className={Style.containerTitleImg}>
              <h2 className={Style.h2}>{data.name}</h2>
              <img className={Style.img} src={data.image} alt={data.name} />
            
              </div>
            
            <div className={Style.containerResume}>
              <Togglable buttonLabel="Show summary">
                <p className={Style.resume}>
                  <span className={Style.diets}></span> {data.summary}
                </p>
              </Togglable>

              <Togglable buttonLabel="Show Steps">
                <p className={Style.resume}>
                  <span className={Style.diets}></span> {data.steps}
                </p>
              </Togglable>
              <Togglable buttonLabel="Show diet">
              <span className={Style.diets}></span>
              {data.Diets?.map((diet) => (
                <span className={Style.diets} key={diet.id}>{diet.name}</span>
              ))}
              </Togglable>
            </div>
            
          </div>
        )}
        <div className={Style.parrafo}></div>
      </div>
 {/*      <Link to="/">
        <button type="button" className={Style.btn}>
          Back
        </button>
      </Link> */}
    </div>
  );
};

export default Details;
