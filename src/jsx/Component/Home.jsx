import { section2ColAboutUs,services } from "../Helper/Constants";
import Logiciels from "./Logiciels";
import Materiels from "./Materiels";
import SlideShow from "./SlideShow";
import Section2Col from "./Common/Section2Col";
import Card from "./Common/Card";

import { useState, useEffect } from "react";

    const Home = ({
        anchorNousConnaitreRef,
        anchorAccueilRef,
        anchorServicesRef,
        anchorMoyenMaterielRef,
        anchorPartenairesRef,
        anchorSolutionsRef,
        anchorDevisRef }) => {

        const [index, setIndex] = useState(0);
        const aboutUsTitle = () => {
            return <div className="section-title">
                       <h2>{section2ColAboutUs.Title}</h2>
                     </div>
        }
        useEffect(() => {
            const interval = setInterval(() => {
                setIndex((index + 1) % section2ColAboutUs.ServicesList.length);
            }, 4000);
            return () => clearInterval(interval);
        }, [index]);
        return (
            <div className="home-container">
                <SlideShow />
                <div id="nous-connaitre" ref={anchorNousConnaitreRef} className="about-us-bar-company">
                   <div className="overlay">
                    <div className="text">
                        <h1>MY Geotech bureaux d'études sols structures</h1>
                    </div>
                   </div>
                </div>
                <div className="aboutus">
                    <Section2Col
                        title={aboutUsTitle()} content={section2ColAboutUs.Content} imgOrContent={section2ColAboutUs.ImgUrl} isLeft={true} containsImage={true}>
                    </Section2Col>
                </div>
                <div id="services" ref={anchorServicesRef} className="section-container">
                    <div className="section-title">
                        <h2>Nos differents <strong>SERVICES</strong> pour vos projets</h2>
                        <p>Des solutions personalisées, faites votre choix selon vos besoins</p>
                    </div>
                    {services.map((service, index) => (
                        <div key={service.Id} className={`grid-column${index + 1}`}>
                            <Card  data={service} index={index} />
                        </div>
                    ))}
                </div>
                <div id="moyen-materiel" ref={anchorMoyenMaterielRef} className="nos-moyens">
                    <div className="section-title">
                        <h2>Nos differents moyens <strong>LOGICIELS</strong></h2>
                        <p>Nous disposons des logiciels nécessaires aux traitements des données et aux études d’ingénierie.</p>
                    </div>
                    <Logiciels />
                    <div className="materiel section-title">
                        <h2>Nos differents moyens <strong>Materiels</strong></h2>
                        <p>Nous utilisons les matériaux d'investigation adaptés pour réussir chaque projet</p>
                    </div>
                    <Materiels />
                </div>
                <div id="partenaires" ref={anchorPartenairesRef} className="partenaire-container">

                </div>
                <div id="devis" ref={anchorDevisRef} className="devis-detail">

                </div>
            </div>
        );
    }
export default Home;