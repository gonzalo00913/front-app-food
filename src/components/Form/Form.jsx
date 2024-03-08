import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTypeDiets, createRecipe } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Style from "../Form/form.module.css";
import Footer from "../Footer/Footer";
/* import imgForm from "../img/imgForm.jpeg"; */
/* import backgroundForm from "../img/background-form.jpeg"; */

function controlForm(input) {
  const reg = new RegExp("^[0-9]+$");
  let errors = {};
  if (!input.name) errors.name = "*Please enter the name of the recipe";
  if (!input.summary)
    errors.summary = "*Please enter the summary of the recipe";
  if (
    input.healthScore < 0 ||
    input.healthScore > 100 ||
    !reg.test(input.healthScore)
  )
    errors.healthScore = "*Please enter a health score between 0-100";
  if (!input.steps || input.steps.length === 0)
    // Validación de lista de pasos vacía
    errors.steps = "*Please enter the steps of the recipe";
  if (!input.diets) errors.diets = "*Please enter the typeDiets of the recipe";
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
    if (
      input.name &&
      input.summary &&
      input.healthScore &&
      listSteps.length > 0 &&
      input.diets.length > 0
    ) {
      const recipeData = {
        ...input,
        steps: listSteps.join("|"),
      };
      dispatch(createRecipe(recipeData));
      alert("Recipe created");
      setInput({
        name: "",
        summary: "",
        image: "",
        healthScore: "",
        steps: "",
        diets: [],
      });
      setListSteps([]);
    } else {
      alert("Please fill all the fields");
    }
  }

  function handleChangeStep(e) {
    setStepDescription(e.target.value);
  }

  function handleChangeStep(e) {
    setStepDescription(e.target.value);
    setListSteps([...listSteps, e.target.value]);
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
    <div
      className={
        Style.bgColorForm
      } /* style={{ backgroundImage: `url(${backgroundForm})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }} */
    >
      {/*      <NavLink to="/">
        <button className={Style.backBtn}>Back</button>
      </NavLink> */}
      <div className={Style.flexAllContainer}>
        <div className={Style.leftFormContainer}>
          {/*     <img className={Style.imgForm} src={imgForm} alt="logo" /> */}
        </div>
        <div className={Style.containerAllForm}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={Style.containerFormNameSummaryHealthScore}>
              <div>
                <div className={Style.flexInputText}>
                  <div>
                    <label className={Style.sizeTextForm}>Name</label>
                  </div>
                  <div className={Style.InputErrorMessage}>
                    <input
                      className={Style.sizeInputText}
                      type="text"
                      name="name"
                      value={input.name}
                      onChange={(e) => handleChange(e)}
                      onKeyPress={(e) => handleChange(e)}
                    />

                    {/* {errors.name && <p className={Style.error}>{errors.name}</p>} */}
                  </div>
                </div>

                <div className={Style.flexInputText}>
                  <label className={Style.sizeTextForm}>Summary</label>
                </div>
                <div className={Style.InputErrorMessage}>
                  <div>
                    <input
                      className={Style.sizeInputText}
                      type="text"
                      name="summary"
                      value={input.summary}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  {/* {errors.summary && <p className={Style.error}>{errors.summary}</p>} */}
                </div>
              </div>

              <div>
                <div className={Style.flexInputText}>
                  <label className={Style.sizeTextForm}>HealthScore</label>
                  <div>
                    <div className={Style.InputErrorMessage}>
                      <input
                        className={Style.sizeInputText}
                        type="number"
                        name="healthScore"
                        value={input.healthScore}
                        onChange={(e) => handleChange(e)}
                      />
                      {/* {errors.healthScore && (<p className={Style.error}>{errors.healthScore}</p>)} */}
                    </div>
                  </div>
                </div>

                <div className={Style.flexInputText}>
                  <label className={Style.sizeTextForm}>Step by step</label>
                  <div>
                    <textarea
                      className={Style.sizeInputTextStep}
                      name="steps"
                      value={stepDescription}
                      onChange={handleChangeStep}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className={Style.sizeTextForm}></label>
                <input
                  className={Style.sizeInputBtnImg}
                  type="file"
                  onChange={handleImageUpload}
                />
                <div className={Style.imagen}>
                  <label className={Style.label}></label>
                  {input.image && (
                    <img
                      className={Style.imageURL}
                      src={input.image}
                      alt="Recipe"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className={Style.sizeTextForm}></label>
                <select
                  className={Style.select}
                  onChange={(e) => handleSelect(e)}
                >
                  <option value="">Select a diet</option>
                  {listDiets.map((t) => (
                    <option key={t.name} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </select>

                <div className={Style.containerDietsBtn}>
                  {Array.from(input.diets).map((diet) => (
                    <div className={Style.containerOnlyDietsBtn} key={diet}>
                      <button
                        className={Style.dietsbtn}
                        onClick={() => handleDelete(diet)}
                      >
                        X
                      </button>
                      <span className={Style.dietsText}>{diet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {errors.hasOwnProperty("name") ||
            errors.hasOwnProperty("summmary") ||
            errors.hasOwnProperty("healthScore") ? (
              <p className={Style.errorComplete}>
                Please complete all the inputs to create your recipe
              </p>
            ) : (
              <button className={Style.button} type="submit">
                Create Recipe
              </button>
            )}
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
