import './CrewText.css'

export default function CrewText({ data: {role, name, bio} }) {

    return (
        <>
            <h4 className="crew-text">{role}</h4>
            <h3 className="crew-text">{name}</h3>
            <p className="crew-text">{bio}</p>
        </>
    )
}