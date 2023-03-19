import { section2ColMoyensMateriels } from "../Helper/Constants";
import Section2Col from "./Common/Section2Col";

const Materiels = () => {
    return (
        <div className="moyens moyens-materiels">
            <Section2Col
                title="" content={<MoyensMaterielsLaboratoir />} imgOrContent={<MoyensMaterielsSurSite />} isLeft={true} containsImage={false} />
        </div>
    )
}

const MoyensMaterielsLaboratoir = () => {
    const { MoyensLabo } = section2ColMoyensMateriels;
    return (
        <div className="moyens-materiels-content laboratoire">
            <div className="title">
                <h3>Nos principaux moyens en laboratoire</h3>
            </div>
            <div className="content">
                <ul className="moyens-items">
                    {MoyensLabo.map((moyen) => (
                        <li>
                            {moyen}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const MoyensMaterielsSurSite = () => {
    const { MoyensSite } = section2ColMoyensMateriels;
    return (
        <div className="moyens-materiels-content sur-site">
            <div className="title">
                <h3>Nos principaux moyens sur site</h3>
            </div>
            <div className="content">
                <ul className="moyens-items">
                    {MoyensSite.map((moyen) => (
                        <li>
                            {moyen}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Materiels;
