import { connect } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import Style from "../Home/home.module.css";
import Filter from "../Filter/Filter";

const Home = ({ recipes, getAllRecipes }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [orden, setOrden] = useState("");
  const recipesPerPage = 9;

  useEffect(() => {
    getAllRecipes();
  }, [getAllRecipes]);

  // Lógica para obtener las recetas de la página actual
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  useEffect(() => {
    setCurrentPage(1); // Reiniciar la página a la primera cuando se actualiza el estado recipes
  }, [recipes]);

  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Filter
        setCurrentPage={setCurrentPage}
        setOrden={setOrden}
        orden={orden}
      />
   
      <div className={Style.containerHome}>
        {currentRecipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.id} />
        ))}
      </div>
      <Paginado
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
  };
};

export default connect(mapStateToProps, { getAllRecipes })(Home);

// mapStateToProps Me permite acceder al estado global
// mapDispatchToProps Me permite despachar acciones