import React from 'react';
import Element from '../../../src/Element/ElementContainer';
import Mock from '../../_data/mock_elements';
import ParseWeb from '../../../src/transpilers/web/parse';
import {prettifyHtml, prettifyScss} from '../../../src/_utils/prettify';
import './Example.scss';

export default class Example extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: Mock
        }
    }

    componentDidMount() {
        const {input} = this.state;

        const result = ParseWeb(input, 1);

        this.setState({
            layoutJSON: JSON.stringify(input, null, 4),
            html: prettifyHtml(result.html),
            scss: prettifyScss(result.css.r1)
        })
    }

    render() {
        const {layoutJSON, html, scss} = this.state;

        return (
            <div className="Example-container">
                <div className="row">
                    <div className="col">
                        <textarea rows="30" cols="30" value={layoutJSON}/>
                    </div>
                    <div className="col">
                        <Element id={1} statePath="elements/elements"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <textarea rows="30" cols="30" value={html}/>
                    </div>
                    <div className="col">
                        <textarea rows="30" cols="30" value={scss}/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {}