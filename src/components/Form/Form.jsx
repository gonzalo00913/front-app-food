import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTypeDiets, createRecipe } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Style from "../Form/form.module.css"

function controlForm(input) {
  const reg = new RegExp("^[0-9]+$");
  let errors = {};
  if (!input.name) errors.name = "Please enter the name of the recipe";
  if (!input.resume) errors.resume = "Please enter the resume of the recipe";
  if (input.healthScore < 0 || input.healthScore > 100 || !reg.test(input.healthScore))
    errors.healthScore = "Please enter a health score between 0-100";
  if (!input.typeDiets) errors.typeDiets = "Please enter the typeDiets of the recipe";
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
    resume: "",
    image: "",
    healthScore: "",
    steps: "",
    typeDiets: [],
  });

  useEffect(() => {
    dispatch(getTypeDiets());
  }, [dispatch]);

  useEffect(() => {
    const stepsString = listSteps.join("|");
    setInput({
      ...input,
      steps: stepsString,
    });
  }, [listSteps]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(controlForm({
      ...input,
      [e.target.name]: e.target.value
    }));
  }

  function handleSelect(e) {
    setInput({
      ...input,
      typeDiets: [...input.typeDiets, e.target.value],
    });
  }

  function handleDelete(diet) {
    setInput({
      ...input,
      typeDiets: input.typeDiets.filter((d) => d !== diet),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  

    const recipeData = {
      ...input,
    
    };
  

    dispatch(createRecipe(recipeData));

    if (
      input.name &&
      input.resume &&
      input.healthScore &&
      input.steps &&
      input.typeDiets
    ) {
      alert("Recipe created");
      setInput({
        name: "",
        resume: "",
        image: "",
        healthScore: "",
        steps: "",
        typeDiets: [],
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
    <div className={Style.formContainer}>
      <div >
      <h1 className={Style.h1}>Create your recipe</h1>
        <form className={Style.form} onSubmit={(e) => handleSubmit(e)}>
          <div >
            <label className={Style.label} >Name:</label>
            <input className={Style.input}
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
           /*    className={`input-field ${errors.name ? 'input-error' : ''}`} */
            />
            {errors.name && <p className="input-error">{errors.name}</p>}
          </div>

          <div >
            <label className={Style.label}>Resume:</label>
            <input className={Style.input}
              type="text"
              name="resume"
              value={input.resume}
              onChange={(e) => handleChange(e)}
             /*  className={`input-field ${errors.resume ? 'input-error' : ''}`} */
            />
            {errors.resume && <p>{errors.resume}</p>}
          </div>

          <div>
            <label className={Style.label}>HealthScore:</label>
            <input className={Style.input}
              type="number"
              name="healthScore"
              value={input.healthScore}
              onChange={(e) => handleChange(e)}
            /*   className={`input-field ${errors.healthScore ? 'input-error' : ''}`} */
            />
            {errors.healthScore && <p>{errors.healthScore}</p>}
          </div>

          <div>
            <label className={Style.label}>Step by step:</label>
            <input className={Style.input}
              type="text"
              name="steps"
              value={stepDescription}
              onChange={handleChangeStep}
             /*  className="input-field" */
            />
            <button onClick={handleStep}>Add</button>
          </div>

          <div >
            <label className={Style.label}>Imagen:</label>
            <input className={Style.inputImage} type="file" onChange={handleImageUpload}/>
          </div>

          <div >
            <label className={Style.label}>Image URL:</label>
            <input className={Style.input}
            type="text"
            name="image"
            value={input.image}
            onChange={(e) => handleChange(e)} />
            {input.image && (
              <img className={Style.imageURL} src={input.image} alt="Recipe"/>
            )}
          </div>

          <div >
            <label className={Style.labelDiets}>Select Diet:</label>
            <select  onChange={(e) => handleSelect(e)}>
              <option value="">Select a diet</option>
              {listDiets.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
            <div >
              {input.typeDiets.map((diet) => (
                <div key={diet}>
                  <button
                    
                    onClick={() => handleDelete(diet)}
                  >
                    X
                  </button>
                  <span>{diet}</span>
                </div>
              ))}
            </div>
          </div>

          {errors.hasOwnProperty("name") ||
          errors.hasOwnProperty("resume") ||
          errors.hasOwnProperty("healthScore") ? (
            <p>Please complete all the inputs to create your recipe</p>
          ) : (
            <button className={Style.button} type="submit" >
              Create Recipe
            </button>
          )}
        </form>
        <NavLink to="/home">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
}
