import { connect } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import style from "../Home/home.module.css";
import Filter from "../Filter/Filter";

import imgBaner from "../img/homemade.png";

const Home = ({ recipes, getAllRecipes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orden, setOrden] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const recipesPerPage = 9;

  useEffect(() => {
    setIsLoading(true);
    getAllRecipes().then(() => {
      setIsLoading(false);
    });
  }, [getAllRecipes]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [recipes]);

  const currentRecipes = Array.isArray(recipes)
    ? recipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    : [];

  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    
    <div >
      <div>
      <img className={style.baner} src={imgBaner} alt="" />
      </div>
      <div className={style.containerAllRecipes}>
      <div>
        {isLoading ? (
          <div className={style.loader}></div>
          ) : (
            <div>
          
            <div className={style.containerHomeColor}>

              <Filter
                setCurrentPage={setCurrentPage}
                setOrden={setOrden}
                orden={orden}
              />

              <div className={style.containerHome}>
                {currentRecipes.length > 0 ? (
                  currentRecipes.map((recipe) => (
                    <Card recipe={recipe} key={recipe.id} />
                  ))
                ) : (
                  <p>Recipe not found!</p>
                )}
              </div>

              {isLoading ? (
                <div className={style.loader}>loading...</div>
              ) : (
                <div>{}</div>
              )}
            </div>
            <Paginado
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}

</div>
      </div>
    
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getAllRecipes })(Home);
