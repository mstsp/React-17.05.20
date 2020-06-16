import React from 'react';
import './StickerItem.css'

function StickerItem(props) {
    return (
        <div>
            <div className="sticker">
                <div className="sticker-header-block"><span>@</span><span>X</span></div>
                <textarea name="" id="" className="sticker-textarea"></textarea>
            </div>
        </div>
    );
}

export default StickerItem;