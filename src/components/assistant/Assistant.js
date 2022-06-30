import "./Assistant.scss"

const Assistant = (props) => {
    return (
        <div className="assistant-card">
            <div className="assistant-card__name">{props.name}</div>
        </div>
    )
}

export default Assistant