import React from "react";
import Style from "../Footer/footer.module.css";

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.contact}>
        <p className={Style.info}>
          <i class="fa-solid fa-envelope"></i> gonzalo-masa@outlook.com
        </p>
        <p className={Style.info}>
          {" "}
          <i class="fa-solid fa-phone"></i> +54 221-561-3460
        </p>
      </div>
      <div className={Style.contact}>
        <a className={Style.p} href="https://gonzalomasa.netlify.app/">
        <i class="fa-solid fa-globe"></i> Portfolio
        </a>

        <a className={Style.l} href="https://www.linkedin.com/in/gonzalo-masa/">
          <i className="fa-brands fa-linkedin"></i> LinkedIn
        </a>

        <a className={Style.g} href="https://github.com/gonzalo00913">
          <i className="fa-brands fa-github"></i> Github
        </a>
        <a
          className={Style.t}
          href="https://twitter.com/GonzaloMsa"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter"></i> Twitter
        </a>
      </div>
    </div>
  );
};

export default Footer;
