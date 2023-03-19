import DisplayImage from "./DisplayImage";

    const Card = ({ data, index }) => {
        return (
            <>
                <div
                    key={data.Id}
                    className={(index === 3) ? 'ISS-card' : ""}
                >
                    <div className="card-image">
                        <div className="star-container d-none">
                            <i className="fas fa-crown"></i>
                        </div>
                        <DisplayImage
                            Id={data.Id}
                            ImageUrl={data.ImageUrl}
                        />
                        <div className="card-detail">
                            <div className="card-title">
                                <h3>{data.Title}</h3>
                            </div>
                            <ul className="card-ticks">
                                {data.ShortDescriptions.map((info) => (
                                    <li key = {info}>{info}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
export default Card;