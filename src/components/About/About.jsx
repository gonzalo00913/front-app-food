import React from 'react'
import Style from "../About/about.module.css"
import { Link } from "react-router-dom";

const About = () =>{
    return(
        <div className={Style.containerAbout}>
            <h1>About</h1>
          <p className={Style.parrafo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi molestiae assumenda consequatur dicta, 
            eligendi ut odit ullam. Autem aliquid fuga id provident animi. Ad quam ea amet? Velit, quidem placeat!</p>
            <Link to="/home">
        <button type="button" className="btn btn-secondary">
          Back
        </button>
      </Link>
        </div>
    )
}

export default About;