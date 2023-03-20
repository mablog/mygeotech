import { NavLink } from "react-router-dom";
import {useEffect } from "react";
import logo from '../../../assets/logo.svg';

  const Navbar = ({
    anchorNousConnaitreRef,
    anchorAccueilRef,
    anchorServicesRef,
    anchorMoyenMaterielRef,
    anchorPartenairesRef,
    anchorSolutionsRef,
    anchorDevisRef,
    anchorNousContacterRef}) => {

    useEffect(() => {
      window.addEventListener("scroll", function(){
      var element = document.getElementById("devisbtn");
      var scroll = window.pageYOffset;
      if(scroll > 0){
        element.classList.add("scrolled");
      }
      else {
        element.classList.remove("scrolled");
      }
    });
    }, []);
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="top-nav-items">
            <div className="logo-navbar">
              <img src={logo} alt="mygeotech logo" width="220"/>
            </div>
            <div className="title-navbar">
              <h1>La géotechnique dans toutes ses dimensions</h1>
              <h5>Sondage - Laboratoire - Ingénierie des sols - Interaction sol structure</h5>
            </div>
            <div className="right-nav-items">
              <div id="devisbtn" className="devis-anm">
                <div className="animated-text">
                  <p>A partir de 899€</p>
                  <img src="https://drive.google.com/uc?id=1cMjVr49eeDc5wo9nj-UV594lqerCHq28" width="40" height="40" />
                </div>
                <button className="button-anm" onClick={() => {
                  if (anchorServicesRef != null && anchorServicesRef.current) {
                    anchorServicesRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>Devis en ligne</button>
                <p className="text-down">Offre pour les particuliers</p>
              </div>
            </div>
          </div>
          <div className="bottom-nav-items">
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="nav-links">
              <div className="collapse navbar-collapse active" id="navbarNavDropdown">
                <NavLink className="nav-link" to="#accueil" onClick={() => {
                  if (anchorAccueilRef != null && anchorAccueilRef.current) {
                    anchorAccueilRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>ACCUEIL</NavLink>
              </div>
              <div className="collapse navbar-collapse active" id="navbarNavDropdown">
                <NavLink className="nav-link" to="#nous-connaitre" onClick={() => {
                  if (anchorNousConnaitreRef != null && anchorNousConnaitreRef.current) {
                    anchorNousConnaitreRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>NOUS CONNAITRE</NavLink>
              </div>
              <div className="collapse navbar-collapse active" id="navbarNavDropdown">
                <NavLink className="nav-link" to="#services" onClick={() => {
                  if (anchorServicesRef != null && anchorServicesRef.current) {
                    anchorServicesRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>NOS SERVICES</NavLink>
              </div>
              <div className="collapse navbar-collapse active" id="navbarNavDropdown">
                <NavLink className="nav-link" to="#moyen-materiel" onClick={() => {
                  if (anchorMoyenMaterielRef != null && anchorMoyenMaterielRef.current) {
                    anchorMoyenMaterielRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>NOS MOYENS</NavLink>
              </div>
              <div className="collapse navbar-collapse active" id="navbarNavDropdown">
                <NavLink className="nav-link" to="#contact-us" onClick={() => {
                  if (anchorNousContacterRef != null && anchorNousContacterRef.current) {
                    anchorNousContacterRef.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>NOUS CONTACTER</NavLink>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  };

  export default Navbar;