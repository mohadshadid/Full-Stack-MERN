import React, { useState } from 'react';

function BoxCreator() {
const [boxes, setBoxes] = useState([]);
const [color, setColor] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    setBoxes([...boxes, color]);
    setColor('');
};

return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>
        Color:
        <input
            type="text"
            value={color}
            onChange={(event) => setColor(event.target.value)}
        />
        </label>
        <button type="submit">Add Box</button>
    </form>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {boxes.map((boxColor, index) => (
        <div
            key={index}
            style={{backgroundColor: boxColor,width: '120px',height: '120px',margin: '2px',
            }}
        />
        ))}
    </div>
    </div>
);
}

export default BoxCreator;

