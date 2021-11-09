import './CrewSlider.css'

export default function CrewSlider({funcs: [member, setMember]}) {

    function handleChangeMember(e) {

        if (e.target instanceof HTMLInputElement) {
            setMember(Number(e.target.value))
        }
        
    }

    return (
        <div className="crew-slider" onClick={handleChangeMember}>
            <label className="radio">
                <input
                    type="radio" 
                    name="crew-member" 
                    value="0"
                    />
                <span className="inner-radio"></span>
            </label>
            <label className="radio">
                <input 
                    type="radio" 
                    name="crew-member" 
                    value="1"
                    />
                <span className="inner-radio"></span>
            </label>
            <label className="radio">
                <input 
                    type="radio" 
                    name="crew-member" 
                    value="2"
                    />
                <span className="inner-radio"></span>
            </label>
            <label className="radio">
                <input 
                    type="radio" 
                    name="crew-member" 
                    value="3"
                    />
                <span className="inner-radio"></span>
            </label>
        </div>
    )
}