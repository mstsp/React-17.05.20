import React, {useState} from 'react';
import './StickersField.css'
import StickerItem from '../stickerItem/StickerItem'

function StickersField(props) {
    const [value, setValue] = useState('hello')
    return (
        <div className="stickers-field">
            <StickerItem name={props.name}></StickerItem>
            <div onClick={() => setValue('Bye')}>{value}</div>
        </div>
    );
}

export default StickersField;