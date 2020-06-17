import React from 'react';
import './Stickers.css'
import StickersField from "../stickersField/StickersField";

function Stickers() {
    // let stickers = [
    //     {positionX: 50, positionY: 50, content: 'jdsjfkhdjsfhj'},
    //     {positionX: 50, positionY: 50, content: 'fdgfdh'},
    //     {positionX: 50, positionY: 50, content: 'jdsjfkrytruhdjsfhj'},
    //     {positionX: 50, positionY: 50, content: 'sdfdf'},
    //     {positionX: 50, positionY: 50, content: 'yuiuyi'}
    //     ]
    return (
        <div>
            <header>Stickers App</header>
            <StickersField name="Alex"></StickersField>
        </div>
    );
}

export default Stickers;