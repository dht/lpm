import React from 'react';
import Base from './Base';

const View = (props) => {
    const {content} = props,
        containerStyle = {...styleView, backgroundImage: `url(${content})`}

    return <Base {...props} containerStyle={containerStyle}>
    </Base>
}

export default View;

const styleView = {
    position: 'relative',
}