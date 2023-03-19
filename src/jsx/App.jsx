import Navbar from "./Component/Navbar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import { useRef } from "react";
const App = () => {
  const anchorAccueilRef = useRef(null);
  const anchorServicesRef = useRef(null);
  const anchorMoyenMaterielRef = useRef(null);
  const anchorPartenairesRef = useRef(null);
  const anchorSolutionsRef = useRef(null);
  const anchorDevisRef = useRef(null);
  const anchorNousConnaitreRef = useRef(null);
  const anchorNousContacterRef = useRef(null);

  return (
    <div id="accueil" ref={anchorAccueilRef} >
    <BrowserRouter>
      <Navbar
        anchorNousConnaitreRef = {anchorNousConnaitreRef}
        anchorAccueilRef = {anchorAccueilRef}
        anchorServicesRef = {anchorServicesRef}
        anchorMoyenMaterielRef = {anchorMoyenMaterielRef}
        anchorPartenairesRef = {anchorPartenairesRef}
        anchorSolutionsRef = {anchorSolutionsRef}
        anchorDevisRef = {anchorDevisRef}
        anchorNousContacterRef = {anchorNousContacterRef}
      />
      <div className="main-container ">
        <Home
          anchorNousConnaitreRef = {anchorNousConnaitreRef}
          anchorAccueilRef={anchorAccueilRef}
          anchorServicesRef={anchorServicesRef}
          anchorMoyenMaterielRef={anchorMoyenMaterielRef}
          anchorPartenairesRef={anchorPartenairesRef}
          anchorSolutionsRef={anchorSolutionsRef}
          anchorDevisRef={anchorDevisRef} />
      </div>
      <Footer anchorNousContacterRef={anchorNousContacterRef}/>
    </BrowserRouter>
    </div>
  )
}

export default App;