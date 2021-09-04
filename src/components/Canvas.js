import React, { useState } from 'react'
import Draggable from 'react-draggable';

export const Canvas = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
     };

    return (
        <Draggable onDrag={(e, data) => trackPos(data)}>
            <div className="box">
                <img src={'/assets/amps/bass_amp_ampeg.png'} alt="" />
                <div>
                        x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
                </div>
            </div>
        </Draggable>
    )
}
