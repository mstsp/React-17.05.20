import React from 'react';
import './StickersField.css'
import StickerItem from '../stickerItem/StickerItem'

function StickersField(props) {
    return (
        <div className="stickers-field">StickersField
            <StickerItem></StickerItem>
        </div>
    );
}

export default StickersField;