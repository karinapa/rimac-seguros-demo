import { Provider } from "react-redux";
import { store } from "../state";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Step1 from "../components/step1";
import Step2 from "../components/step2";
import { useState } from "react";
import Step3 from "../components/step3";

const Steps = () => {

  const [step, setStep] = useState(1);
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
            <img className="hide-desktop" alt="" />
            <img
              className="hide-tablet-on-down"
              src="/img/personaje-datos-personales.png"
              alt=""
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            {
             (step===1)?<Step1 onTrigger={()=>{ setStep(2)}}></Step1>:((step===2)?<Step2 onTrigger={()=>{ setStep(3)}} onBack={()=>{ setStep(1)}}></Step2>:<Step3 onTrigger={()=>{ console.log()}} onBack={()=>{ setStep(2)}}></Step3>)
            }
            
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
