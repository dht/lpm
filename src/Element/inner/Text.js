import React from 'react';
const sanitizer = require('sanitizer');
import Base from './Base';

const Text = (props) => {
    let {params = {}, data, content} = props,
        {dataField} = data || {};

    if (dataField && params[dataField]) {
        content = params[dataField];
    }

    const text = sanitizer.sanitize(content);

    return <Base {...props}>
        <span className="inner" dangerouslySetInnerHTML={{__html: text}}></span>
    </Base>
}

export default Text;

