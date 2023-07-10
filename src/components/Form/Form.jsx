import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTypeDiets, createRecipe } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Style from "../Form/form.module.css";

function controlForm(input) {
  const reg = new RegExp("^[0-9]+$");
  let errors = {};
  if (!input.name) errors.name = "Please enter the name of the recipe";
  if (!input.summary) errors.summary = "Please enter the summary of the recipe";
  if (
    input.healthScore < 0 ||
    input.healthScore > 100 ||
    !reg.test(input.healthScore)
  )
    errors.healthScore = "Please enter a health score between 0-100";
  if (!input.diets) errors.diets = "Please enter the typeDiets of the recipe";
  return errors;
}

export default function CreateRecipe() {
  const dispatch = useDispatch();
  let listDiets = useSelector((state) => state.typediets);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [listSteps, setListSteps] = useState([]);
  const [stepDescription, setStepDescription] = useState("");
  const [input, setInput] = useState({
    name: "",
    summary: "",
    image: "",
    healthScore: "",
    steps: "",
    diets: [],
  });
  useEffect(() => {
    dispatch(getTypeDiets());
  }, [dispatch]);

  useEffect(() => {
    const stepsString = listSteps.join("|");
    setInput((prevInput) => ({
      ...prevInput,
      steps: stepsString,
    }));
  }, [listSteps, input]);

  function handleChange(e) {
    // Verificar si el carácter ingresado es un número
    if (/\d/.test(e.key)) {
      e.preventDefault();
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
      setErrors(
        controlForm({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }
  }

  function handleSelect(e) {
    const selectedDiet = e.target.value;

    if (!input.diets.includes(selectedDiet)) {
      setInput((prevInput) => ({
        ...prevInput,
        diets: [...prevInput.diets, selectedDiet],
      }));
    }
  }

  function handleDelete(diet) {
    setInput((prevInput) => ({
      ...prevInput,
      diets: prevInput.diets.filter((d) => d !== diet),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const recipeData = {
      ...input,
    };
    dispatch(createRecipe(recipeData));

    if (
      input.name &&
      input.summary &&
      input.healthScore &&
      input.steps &&
      input.diets
    ) {
      alert("Recipe created");
      setInput({
        name: "",
        summary: "",
        image: "",
        healthScore: "",
        steps: "",
        diets: [],
      });
    } else {
      alert("Please fill all the fields");
    }
  }

  function handleChangeStep(e) {
    setStepDescription(e.target.value);
  }

  function handleStep(e) {
    e.preventDefault();
    if (stepDescription !== "") {
      setListSteps([...listSteps, stepDescription]);
      setStep(step + 1);
      setStepDescription("");
    } else {
      alert("Please enter a step");
    }
  }

  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      setInput({
        ...input,
        image: URL.createObjectURL(file),
      });
    }
  }

  return (
    <div>
      <div className={Style.formContainer}>
        <NavLink to="/home">
          <button className={Style.btnBack}>Back</button>
        </NavLink>
      
        <form className={Style.form} onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className={Style.label}>Name:</label>
            <input
              className={Style.input}
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              onKeyPress={(e) => handleChange(e)}
            />
            {errors.name && <p className="input-error">{errors.name}</p>}
          </div>

          <div>
            <label className={Style.label}>Summary:</label>
            <input
              className={Style.input}
              type="text"
              name="summary"
              value={input.summary}
              onChange={(e) => handleChange(e)}
            />
            {errors.summary && <p>{errors.summary}</p>}
          </div>

          <div>
            <label className={Style.label}>Imagen:</label>
            <input
              className={Style.inputImage}
              type="file"
              onChange={handleImageUpload}
            />
          </div>

          <div>
            <label className={Style.label}>Image URL:</label>
            <input
              className={Style.input}
              type="text"
              name="image"
              value={input.image}
              onChange={(e) => handleChange(e)}
            />
            {input.image && (
              <img className={Style.imageURL} src={input.image} alt="Recipe" />
            )}
          </div>

          <div>
            <label className={Style.label}>HealthScore:</label>
            <input
              className={Style.input}
              type="number"
              name="healthScore"
              value={input.healthScore}
              onChange={(e) => handleChange(e)}
            />
            {errors.healthScore && <p>{errors.healthScore}</p>}
          </div>

          <div>
            <label className={Style.label}>Step by step:</label>
            <div className={Style.containerTextBtn}>
              <textarea
                className={Style.textarea}
                name="steps"
                value={stepDescription}
                onChange={handleChangeStep}
              />
              <button className={Style.btn} onClick={handleStep}>
                Add
              </button>
            </div>
          </div>

          <div></div>
          <div>
            <label className={Style.labelDiets}>Select Diet:</label>
            <select onChange={(e) => handleSelect(e)}>
              <option value="">Select a diet</option>
              {listDiets.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
            <div>
              {Array.from(input.diets).map((diet) => (
                <div key={diet}>
                  <button onClick={() => handleDelete(diet)}>X</button>
                  <span>{diet}</span>
                </div>
              ))}
            </div>
          </div>

          {errors.hasOwnProperty("name") ||
          errors.hasOwnProperty("summmary") ||
          errors.hasOwnProperty("healthScore") ? (
            <p>Please complete all the inputs to create your recipe</p>
          ) : (
            <button className={Style.button} type="submit">
              Create Recipe
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
