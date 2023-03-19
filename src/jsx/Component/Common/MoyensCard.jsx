const MoyensCard = ({title, description, imgUrl, link, withLink}) => {
    return(
        <div className="small-card-container">
            <a className="link" href={link}>
                <img src={imgUrl} width="80" height="80"/>
                <br />
                <h4>{title}</h4>
            </a>
            <span className="description">{description}</span>
        </div>
    )
}
export default MoyensCard;