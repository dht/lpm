import React from 'react';
const sanitizer = require('sanitizer');
import Base from './Base';

const Text = (props) => {
    const {content} = props,
        text = sanitizer.sanitize(content);

    return <Base {...props}>
        <span className="inner" dangerouslySetInnerHTML={{__html: text}}></span>
    </Base>
}

export default Text;

