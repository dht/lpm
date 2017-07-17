import React from 'react';
import Base from './Base';
import {placeholderInnerText} from '../../_utils/element';

const Placeholder = (props) => {
    const {style} = props,
        contentStyle = {...stylePlaceholder, ...style.backgroundImage ? null : styleStripes},
        text = placeholderInnerText(props.style);

    return <Base {...props}>
        <span className="inner" style={contentStyle}>{text}</span>
    </Base>
}

export default Placeholder;

const stylePlaceholder = {
    textAlign: 'center',
    color: 'white',
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    display: 'block',
    minHeight: '20px',
    textShadow: '0 0 3px rgba(0,0,0,0.5)',
    fontSize: '14px',
}

const styleStripes = {
    background: 'repeating-linear-gradient(45deg,#f9f9f9,#f9f9f9 10px,#e7e7e7 10px,#e7e7e7 20px)',
}