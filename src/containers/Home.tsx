import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "../components/RepositoriesList";
import Header from "../components/Header";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Provider store={store}>
      <div className="home">
        <div className="bg-left ">
          <img src="img-salud-cotiza.png" className="hide-desktop" alt="" />
        </div>
        <Header />
        <div className="home__container">
          <div className="container">
            <div className="row">
              <div className="home__content">
                <div className="home__beneficios">
                  <div className="title-white">
                    <h1>
                      Seguro de<b> Salud</b>
                    </h1>
                    <p>
                      Cotiza de manera<b> fácil y rápida:</b>
                    </p>
                  </div>
                  <ul>
                    <div className="hide-desktop">
                      <Slider {...settings}>
                        <div>
                          <li
                            className="home__items"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              width="24"
                              height="24"
                              src="icon-clinica.png"
                              alt=""
                            />
                            <span>Cómpralo de manera fácil y rápida</span>
                          </li>
                        </div>
                        <div>
                          <li
                            className="home__items"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              width="24"
                              height="24"
                              src="icon-money.png"
                              alt=""
                            />
                            <span>Cotiza y compra tu seguro 100% digital</span>
                          </li>
                        </div>
                        <div>
                          <li
                            className="home__items"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              width="24"
                              height="24"
                              src="icon-benefit.png"
                              alt=""
                            />
                            <span>Hasta S/.12 millones de cobertura anual</span>
                          </li>
                        </div>
                        <div>
                          <li
                            className="home__items"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <img
                              width="24"
                              height="24"
                              src="icon-benefit.png"
                              alt=""
                            />
                            <span>Más de 300 clínicas en todo el Perú</span>
                          </li>
                        </div>
                      </Slider>
                    </div>
                    <div className="arrows hide-desktop">
                      <div style={{ display: "none", textAlign: "center" }}>
                        <button className="button">Previous</button>
                        <button className="button">Next</button>
                      </div>
                    </div>
                    <div className="hide-tablet-on-down">
                      <p></p>
                      <li className="home__items">
                        <img
                          width="24"
                          height="24"
                          src="icon-benefit.png"
                          alt=""
                        />
                        <span>Cómpralo de manera fácil y rápida</span>
                      </li>
                      <li className="home__items">
                        <img
                          width="24"
                          height="24"
                          src="icon-benefit.png"
                          alt=""
                        />
                        <span>Cotiza y compra tu seguro 100% digital</span>
                      </li>
                      <li className="home__items">
                        <img
                          width="24"
                          height="24"
                          src="icon-money.png"
                          alt=""
                        />
                        <span>Hasta S/.12 millones de cobertura anual</span>
                      </li>
                      <li className="home__items">
                        <img
                          width="24"
                          height="24"
                          src="icon-clinica.png"
                          alt=""
                        />
                        <span>Más de 300 clínicas en todo el Perú</span>
                      </li>
                    </div>
                  </ul>
                  <div className="ad-inline mt-100 hide-tablet-on-down">
                    <p className="legal">© 2020 RIMAC Seguros y Reaseguros.</p>
                    <i className="icon-arrow-white-down"></i>
                  </div>
                </div>
              </div>
              <div className="home__img">
                <img src="img-salud-cotiza.png" alt="sadsadasdasdas" />
              </div>
              <div className="home__form">
                <div className="home__form--title">
                  <h2>
                    Conoce los precios,&nbsp;<b>en 2 pasos</b>
                  </h2>
                  <p>Ingresa los datos para comenzar</p>
                </div>
                <RepositoriesList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default Home;
