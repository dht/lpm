import React from 'react';
import Base from './Base';

const Image = (props) => {
    let {params = {}, content, data} = props,
        {dataField} = data || {},
        containerStyle = {...styleView};

    if (dataField && params[dataField]) {
        content = params[dataField];
    }

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