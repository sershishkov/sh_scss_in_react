import React from "react";
import imgLogo from "../../img/logo.png";
import imgLogoBbc from "../../img/logo-bbc.png";
import imgLogoForbes from "../../img/logo-forbes.png";
import imgLogoTechcrunch from "../../img/logo-techcrunch.png";
import imgLogoBi from "../../img/logo-bi.png";

export default () => {
  return (
    <header className="header">
      <img src={imgLogo} alt="Nexter logo" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">Seen on</div>
      <div className="header__seenon-logos">
        <img src={imgLogoBbc} alt="Seen on logo 1" />
        <img src={imgLogoForbes} alt="Seen on logo 2" />
        <img src={imgLogoTechcrunch} alt="Seen on logo 3" />
        <img src={imgLogoBi} alt="Seen on logo 4" />
      </div>
    </header>
  );
};
