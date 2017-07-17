import React from 'react';
import ElementContainer from '../ElementContainer';
import Base from './Base';

const Image = (props) => {
    const {childIds = [], content, statePath} = props,
        containerStyle = {...styleView};

    if (content) {
        containerStyle['backgroundImage'] = `url(${content})`;
    }

    return <Base {...props} containerStyle={containerStyle}>
        {childIds.map(childId => <ElementContainer key={childId} id={childId} statePath={statePath} />)}
    </Base>
}

export default Image;

const styleView = {
    position: 'relative',
}