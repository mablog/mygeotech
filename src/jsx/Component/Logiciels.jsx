import { listLogicielsImg } from "../Helper/Constants";
import MoyensCard from "./Common/MoyensCard"

const Logiciels = () => {
    const listeCards = listLogicielsImg;
    return (
        <div className="moyens-logiciels">
            <div className="moyens-logiciels-content">
                {listeCards.map((card, index)=> (
                    <MoyensCard
                        title={card.title}
                        description={card.description}
                        imgUrl={card.imgUrl}
                        link={card.link}
                        isLink={card.isLink}/>
                ))}
            </div>
        </div>
    )
}

export default Logiciels;