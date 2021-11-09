import { useRef } from 'react'
import './TechSelect.css'

export default function TechSelect({ funcs: [tech, setTech] }) {

    let buttons = useRef([
        {
            content: '1',
            value: '0',
            selected: false
        },
        {
            content: '2',
            value: '1',
            selected: false
        },
        {
            content: '3',
            value: '2',
            selected: false
        }
    ])

    buttons.current = buttons.current
        .map((button, i) => {

            return (i === tech 
                ? {...button, selected: true}
                : {...button, selected: false}
            )
        })

    function handleSetSelectedTech(e) {
        setTech(Number(e.target.value))
    }

    return (
        <div className="tech-select">
            {buttons.current.map(({ content, value, selected }) => {
                return (
                    <button 
                        key={value}
                        value={value}
                        className={selected ? 'selected' : ''}
                        onClick={handleSetSelectedTech}
                        >{content}</button>
                )
            })}
        </div>    
    )
}