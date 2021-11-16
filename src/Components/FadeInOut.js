import { useState } from 'react';
import { Transition } from 'react-transition-group';

export default function FadeInOut({ children }) {

    const [inProp, setInProp] = useState(false)

    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };

    setTimeout(() => {
        setInProp(true)
    }, 1000)

    return (
        <Transition in={inProp} timeout={duration}>
            {state => (
                <div style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                    }}>
                    {children}
                </div>
            )}
        </Transition>
    )    
}