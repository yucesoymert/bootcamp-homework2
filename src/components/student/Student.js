import "./Student.scss"

const Student = (props) => {
    return (
        <div className="student-card">
            <div className="student-card__name">{props.name}</div>
        </div>
    )
}

export default Student