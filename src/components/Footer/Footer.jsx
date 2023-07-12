import React from "react";
import Style from "../Footer/footer.module.css";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.contact}>
        Contact: gonzalo-masa@outlook.com | Teléfono: +54 221-561-3460
      </div>
      <div className={Style.contact}>
        <a className={Style.l} href="https://www.linkedin.com/in/gonzalo-masa/">
          <i className="fa-brands fa-linkedin"></i>Linkedin
        </a>
        
        <a className={Style.g} href="https://github.com/gonzalo00913">
          <i className="fa-brands fa-github" ></i>GitHub
        </a>
        <a
          className={Style.t}
          href="https://twitter.com/GonzaloMsa"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter"></i>Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;
