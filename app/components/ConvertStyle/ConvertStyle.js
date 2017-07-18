import React from 'react';
import {parseStyle} from './Parser';

import './ConvertStyle.scss';

export default class ConvertStyle extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const value = e.target.value;

        this.textarea.value = parseStyle(value);
    }

    render() {
        const {} = this.state;

        return (
            <div className="ConvertStyle-container">
                <textarea placeholder="type or paste css (single selector)" rows="30" cols="30" onChange={this.onChange} />
                <textarea placeholder="get React style" ref={(c) => this.textarea = c} rows="30" cols="30" />
            </div>
        );
    }
}

const styles = {
}

