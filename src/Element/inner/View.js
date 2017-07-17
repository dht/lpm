import React from 'react';
import ElementContainer from '../ElementContainer';
import Base from './Base';

const View = (props) => {
    const {childIds = [], content, statePath} = props,
        containerStyle = {...styleView, backgroundImage: `url(${content})`}

    return <Base {...props} containerStyle={containerStyle}>
        {childIds.map(childId => <ElementContainer key={childId} id={childId} statePath={statePath} />)}
    </Base>
}

export default View;

const styleView = {
    position: 'relative',
}