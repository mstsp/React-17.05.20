import React from 'react';
import './StickerItem.css'

function StickerItem(props) {
    return (
            <div className="sticker">
                <div className="sticker-header-block"><span>@</span><span>X</span></div>
                <textarea name="" id="" className="sticker-textarea" value={props.name}></textarea>
            </div>
    );
}

export default StickerItem;