import "./Card.scss"

const Card = (props) => {
    return (
        <div className="card">
            <h2 className="card__title">{props.groupName}</h2>
            {props.children}
        </div>
    )
}

export default Card