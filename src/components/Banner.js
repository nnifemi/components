// Banner.js
import React from 'react';
import Button from './Button';

function Banner({ title, text, button1Text, button1Style, button2Text, button2Style }) {
    return (
        <div className="banner">
            <h2><span className="green">{title}</span></h2>
            <p className="gallery-text">{text}</p>
            <Button text={button1Text} style={button1Style} />
            <Button text={button2Text} style={button2Style} />
        </div>
    );
}

export default Banner;