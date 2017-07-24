import React from 'react';
import Base from './Base';

const Image = (props) => {
    const {content} = props,
        containerStyle = {...styleView};

    if (content) {
        containerStyle['backgroundImage'] = `url(${content})`;
    }

    return <Base {...props} containerStyle={containerStyle}>
    </Base>
}

export default Image;

const styleView = {
    position: 'relative',
}