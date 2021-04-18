import { Provider } from 'react-redux';
import { store } from '../state';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Pasos = () => {
  return (
    <div>
      <div id="InsuredData">
        <div className="headermobile hide-desktop">
          <div className="home__logo">
            <div className="container">
              <svg width="100" height="18" viewBox="0 0 100 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.4984 0C55.5899 0 54.9085 0.283912 54.1703 1.36278L44.9716 13.8549L41.4511 1.64669C41.0536 0.397476 40.2587 0 39.5205 0C38.3849 0 37.817 0.454259 37.2492 1.53312L29.1293 17.7729H33.6719L39.1798 6.58675L42.5867 17.7729H46.3912L54.6814 6.64353L54.6246 17.7729H58.4858L58.429 2.15773C58.429 0.624606 57.4637 0.0567823 56.4984 0Z" fill="white"></path>
                <path d="M23.6782 2.8959L20.0442 17.7729H24.1893L27.7666 2.8959H23.6782Z" fill="white"></path>
                <path d="M8.97161 9.653H6.07571L7.15457 5.16719H10.2208C11.8675 5.16719 12.7192 5.90536 12.5489 7.32492C12.3785 8.80126 10.959 9.653 8.97161 9.653ZM16.6372 7.15457C16.8644 5.16719 15.7287 2.8959 11.5836 2.8959H3.57729L0 17.7729H4.08833L5.4511 12.2082H7.55205L11.1861 17.7729H15.6719L11.5836 11.8675C15.2177 10.959 16.4101 9.08517 16.6372 7.15457Z" fill="white"></path>
                <path d="M69.1609 12.265L72.7949 6.81388L74.1577 12.265H69.1609ZM75.5205 17.7729H79.4385L75.6908 4.08833C75.1798 2.49842 74.2145 2.10095 73.1924 2.21451C72.5678 2.27129 71.8864 2.55521 71.205 3.46372L61.3817 17.8297H65.4132L67.4006 14.8202H74.7255L75.5205 17.7729Z" fill="white"></path>
                <path d="M91.9306 15.0473C88.5804 14.9905 86.7066 13.1167 86.9905 10.7319C87.3312 7.49527 90.2839 5.56467 94.429 5.56467C95.6214 5.56467 97.2113 5.67823 98.6309 6.01893L99.3691 3.00946C98.2334 2.72555 96.246 2.49842 94.9401 2.49842C87.899 2.49842 83.4132 5.73502 82.8454 10.6183C82.3344 14.9338 85.4006 18 91.9306 18C93.2366 18 94.3722 17.8864 96.0189 17.6025L96.8139 14.3659C95.1672 14.8202 93.918 15.0473 91.9306 15.0473Z" fill="white"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-left bg-left--wshort ">
          <div className="bg-left__logo">
            <svg width="89" height="16" viewBox="0 0 89 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50.2208 0C49.4133 0 48.8076 0.252366 48.1514 1.21136L39.9748 12.3155L36.8454 1.46372C36.4921 0.353312 35.7855 0 35.1293 0C34.1199 0 33.6151 0.403785 33.1104 1.36278L25.8927 15.7981H29.9306L34.8265 5.85489L37.8549 15.7981H41.2366L48.6057 5.90536L48.5552 15.7981H51.9874L51.9369 1.91798C51.9369 0.555205 51.0789 0.0504732 50.2208 0Z" fill="white"></path>
              <path d="M21.0473 2.57413L17.817 15.7981H21.5016L24.6814 2.57413H21.0473Z" fill="white"></path>
              <path d="M7.97476 8.58044H5.40063L6.35962 4.59306H9.08517C10.5489 4.59306 11.306 5.24921 11.1546 6.51104C11.0032 7.82334 9.74133 8.58044 7.97476 8.58044ZM14.7886 6.35962C14.9905 4.59306 13.9811 2.57413 10.2965 2.57413H3.17981L0 15.7981H3.63407L4.84543 10.8517H6.71293L9.94322 15.7981H13.9306L10.2965 10.5489C13.5268 9.74133 14.5868 8.07571 14.7886 6.35962Z" fill="white"></path>
              <path d="M61.4764 10.9022L64.7066 6.05678L65.918 10.9022H61.4764ZM67.1293 15.7981H70.612L67.2808 3.63407C66.8265 2.22082 65.9685 1.86751 65.0599 1.96845C64.5047 2.01893 63.8991 2.27129 63.2934 3.07886L54.5615 15.8486H58.1451L59.9117 13.1735H66.4227L67.1293 15.7981Z" fill="white"></path>
              <path d="M81.7161 13.3754C78.7382 13.3249 77.0726 11.6593 77.3249 9.53943C77.6278 6.66246 80.2524 4.94637 83.9369 4.94637C84.9969 4.94637 86.4101 5.04732 87.6719 5.35016L88.3281 2.67508C87.3186 2.42271 85.5521 2.22082 84.3912 2.22082C78.1325 2.22082 74.1451 5.09779 73.6404 9.43849C73.1861 13.2744 75.9117 16 81.7161 16C82.877 16 83.8864 15.8991 85.3502 15.6467L86.0568 12.7697C84.5931 13.1735 83.4827 13.3754 81.7161 13.3754Z" fill="white"></path>
            </svg>
          </div>
          <hr/>
          <div className="bg-left__img">
            <img className="hide-desktop" alt="Seguro de Salud Integral"/>
            <img className="hide-tablet-on-down" src="/content/dam/rimac/ami/commons/personaje-datos-personales.png" alt="Seguro de Salud Integral"/>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col right w100">
              <div className="headermobile">
                <div className="headermobile__title">
                  <div className="breadcrumb">
                    <a className="back" href="/comprar/seguro-salud">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11.5" transform="rotate(-180 12 12)" stroke="#FF888D"></circle>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3789 15.1772C13.5366 15.3449 13.5402 15.609 13.3902 15.7813C13.3089 15.8745 13.1928 15.9284 13.0697 15.9284C12.953 15.9284 12.8419 15.88 12.7609 15.7941L9.62135 12.5226C9.54071 12.4369 9.5 12.3246 9.5 12.2141C9.5 12.1034 9.54048 11.9915 9.62113 11.9058L12.7605 8.63451C12.9349 8.44943 13.2246 8.45673 13.3901 8.64681C13.5402 8.81913 13.5366 9.08324 13.3789 9.25095L10.5292 12.2141L13.3789 15.1772Z" fill="#EF3340"></path>
                      </svg>
                    </a>
                    <strong>
                      <span>Paso </span>1 
                    </strong> de 7
                  </div>
                  <div className="headermobile__text title">
                    <h2>Hola,<b> Karina</b> <p>Confirma o edita los datos para continuar</p></h2>
                  </div>
                </div>
              </div>
              <div className="right__content">
                <form>
                  <div className="insured-data col w100">
                    <div className="col insured-data__form">
                      <div className="col cardinsured w100">
                        <div className="col cardinsured__data">
                          <h3 className="cardinsured__data--name">Karina Paola Fuentes Davila Otani</h3>
                          <p className="cardinsured__data--number">DNI 45400203 - F.N  06/11/1988</p>
                        </div>
                      </div>
                      <div className="col input-field">
                        <input type="text" name="email" id="email"  className="" value=""/>
                        <label>Correo</label>
                      </div>
                      <span className="show-error"></span>
                      <div className="col title w100 gender">
                        <h4 className="title__subtitle">Género</h4>
                      </div>
                      <div className="radiobutton">
                        <input type="radio" name="gender" id="man"  value="Masculino"/>
                        <label >Masculino</label>
                      </div>
                      <div className="radiobutton">
                        <input type="radio" name="gender" id="woman"  value="Femenino" />
                        <label >Femenino</label>
                      </div>
                    </div>
                    <div className="col insured-data__choose w100">
                      <div className="col title w100">
                        <h4 className="title__subtitle">¿A quién vamos a asegurar?</h4>
                      </div>
                      <div className="radiobutton">
                        <input type="radio" name="insured" id="titular" value="T"/>
                        <label >Solo a mí</label>
                      </div>
                      <div className="radiobutton">
                        <input type="radio" name="insured" id="family" value="F"/>
                        <label >A mí y a mi familia</label>
                      </div>
                    </div>
                    <div className="col btn">
                      <button className="btn__primary btn-right" >CONTINUAR <i></i></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <p className="legal--mobile hide-tablet-on-up">© 2021 RIMAC Seguros y Reaseguros.</p><div id="overlayGrid"></div></div>
    </div>
  );
};

export default Pasos;
