import './TechText.css'

export default function TechText({ data: {name, description} }) {
    return (
        <>
            <p className="terminology">The terminology ...</p>
            <h3 className="tech-term">{name}</h3>
            <p className="tech-descrip">{description}</p>
        </>
    )
}