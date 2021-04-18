import { Provider } from "react-redux";
import { store } from "../state";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Step1 from "../components/step1";

const Steps = () => {
  return (
    <div>
      <div id="InsuredData">
        <div className="headermobile hide-desktop">
          <div className="home__logo">
            <div className="container">
            <img width="24" height="24" src="Logo_RIMAC.png" alt="" className="logo"/>
            </div>
          </div>
        </div>
        <div className="bg-left bg-left--wshort ">
          <div className="bg-left__logo">
          <img width="24" height="24" src="Logo_RIMAC.png" alt="" className="logo"/>
          </div>
          <hr />
          <div className="bg-left__img">
            <img className="hide-desktop" alt="Seguro de Salud Integral" />
            <img
              className="hide-tablet-on-down"
              src="/img/personaje-datos-personales.png"
              alt="Seguro de Salud Integral"
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Step1></Step1>
          </div>
        </div>
        <p className="legal--mobile hide-tablet-on-up">
          © 2021 RIMAC Seguros y Reaseguros.
        </p>
        <div id="overlayGrid"></div>
      </div>
    </div>
  );
};

export default Steps;
