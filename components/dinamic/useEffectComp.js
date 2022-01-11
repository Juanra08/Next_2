import React, { useEffect, useState } from 'react';

export default function useMousePosition () {
    const [mousePosition, setMousePosition] = useState(window.innerHeight);

    const updateMousePosition  = (ev) => {
        setMousePosition(ev.clientX);
    }

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);
        return () => { window.removeEventListener('mousemove', updateMousePosition); }
    }, [])

    return (
        <div className="text-4xl text-red-600">
            {mousePosition}
        </div>
    )
}