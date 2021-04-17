import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from '../components/RepositoriesList';
import Header from '../components/Header';

const Home = () => {
  return (
    <Provider store={store}>
      <div className="home">
        <div className="bg-left ">
          <img src="/content/dam/rimac/ami/home/img-mobile-ami.png" alt=""/>
        </div>
        <Header />
        <div className="home__container">
          <div className="container">
            <div className="row">
              <div className="home__content">
                <div className="home__beneficios">
                  <div className="title-white">
                    <h1>Seguro de<b> Salud</b></h1>
                    <p>Cotiza de manera<b> fácil y rápida:</b></p>
                  </div>
                  <ul>
                    <div className="hide-desktop">
                      <div className="slick-slider slick-initialized" dir="ltr">
                        <div className="slick-list">
                          <div className="slick-track" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px)'}}>
                            <div data-index="0" className="slick-slide slick-active slick-current" aria-hidden="false" style={{outline: 'none', width: '0px'}}>
                              <div>
                                <li className="home__items" style={{width: '100%', display: 'inline-block'}}>
                                  <img width="24" height="24" src="icon-clinica.png" alt=""/>
                                    <span>Más de 300 clínicas en todo el Perú</span>
                                </li>
                              </div>
                            </div>
                            <div data-index="1" className="slick-slide"  aria-hidden="true" style={{outline: 'none', width: '0px'}}>
                              <div>
                                <li className="home__items"  style={{width: '100%', display: 'inline-block'}}>
                                  <img width="24" height="24" src="icon-money.png" alt=""/>
                                  <span>Hasta S/12 millones de cobertura anual</span>
                                </li>
                              </div>
                            </div>
                            <div data-index="2" className="slick-slide"  aria-hidden="true" style={{outline: 'none', width: '0px'}}>
                              <div>
                                <li className="home__items"  style={{width: '100%', display: 'inline-block'}}>
                                <img width="24" height="24" src="icon-benefit.png" alt=""/>
                                <span>Cotiza tu seguro 100% digital</span>
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="arrows hide-desktop">
                      <button className="arrow-beneficios-prev icon-arrow-left-light"></button>
                      <div className="contador">
                        <div className="currentpage">01</div>/
                        <div className="pages">03</div>
                      </div>
                        <button className="arrow-beneficios-next icon-arrow-right-light"></button>
                    </div>
                    <div className="hide-tablet-on-down"><p></p>
                      <li className="home__items">
                        <img width="24" height="24" src="icon-clinica.png" alt=""/>
                          <span>Más de 300 clínicas en todo el Perú</span></li>
                      <li className="home__items"><img width="24" height="24" src="icon-money.png" alt=""/>
                        <span>Hasta S/12 millones de cobertura anual</span></li>
                      <li className="home__items">
                        <img width="24" height="24" src="icon-benefit.png" alt=""/>
                          <span>Cotiza tu seguro 100% digital</span>
                      </li>
                    </div>
                  </ul>
                  <div className="ad-inline">
                    <p className="legal">© 2020 RIMAC Seguros y Reaseguros.</p>
                    <i className="icon-arrow-white-down"></i>
                  </div>
                </div>
              </div>
              <div className="home__img"><img src="img-salud-cotiza.png" alt="sadsadasdasdas"/>
              </div>
              <div className="home__form">
                <div className="home__form--title"><h2>Conoce los precios,&nbsp;<b>en 2 pasos</b></h2>
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
