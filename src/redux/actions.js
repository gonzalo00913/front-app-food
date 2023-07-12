import {
  GET_ALL_RECIPES,
  ERROR_GETTING_RECIPES,
  POST_RECIPE,
  FILTER_BY_TYPEDIET,
  FILTER_CREATED,
  ORDER_BY_NAME,
  ORDER_BY_PUNTUATION,
  GET_BY_NAME,
  GET_BY_ID,
  GET_TYPE_DIETS,
} from "./action-types";
import axios from "axios";

export const getAllRecipes = () => {
  return async function (dispatch) {
    try {
      const response = await axios("https://back-food-app-9rem.onrender.com/recipes/all");
/* const response = await axios("http://localhost:3001/recipes/all"); */
      const recipes = response.data;

      dispatch({
        type: GET_ALL_RECIPES,
        payload: recipes,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: ERROR_GETTING_RECIPES,
        payload: error.message,
      });
    }
  };
};

export const getRecipesById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`https://back-food-app-9rem.onrender.com/recipes/${id}`);
    /*   const response = await axios.get(`http://localhost:3001/recipes/${id}`); */
      const recipe = response.data;
      dispatch({
        type: GET_BY_ID,
        payload: recipe,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createRecipe = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("https://back-food-app-9rem.onrender.com/recipes/post", payload);
   /*    const response = await axios.post("http://localhost:3001/recipes/post", payload); */
      const newRecipe = response.data;

      dispatch({
        type: POST_RECIPE,
        payload: newRecipe,
      });
    } catch (error) {
      console.error(error);
      alert("An error occurred while creating the recipe");
    }
  };
};

export const getRecipesByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`https://back-food-app-9rem.onrender.com/recipes?name=${name}`);
     /* const response = await axios.get(`http://localhost:3001/recipes?name=${name}`); */
      const recipes = response.data;

      dispatch({
        type: GET_BY_NAME,
        payload: recipes,
      });
    } catch (error) {
      console.error(error);
      alert("Recipe no encontrado");
    }
  };
};

export const filterRecipesByTypeDiet = (payload) => {
  return {
    type: FILTER_BY_TYPEDIET,
    payload,
  };
};

export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload: payload,
  };
};

export const orderByName = (payload) => {
  return {
    type: ORDER_BY_NAME,
    payload: payload,
  };
};

export const orderByPuntuation = (payload) => {
  return {
    type: ORDER_BY_PUNTUATION,
    payload: payload,
  };
};

export const getTypeDiets = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("https://back-food-app-9rem.onrender.com/types");
      /* const response = await axios.get("http://localhost:3001/types"); */
      const dietTypes = response.data;

      dispatch({
        type: GET_TYPE_DIETS,
        payload: dietTypes,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

