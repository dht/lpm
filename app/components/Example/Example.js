import React from 'react';
import Element from '../../../src/Element/ElementContainer';
import ParseWeb from 'lpm-transpilers/transpilers/web/parse';
import {prettifyHtml, prettifyScss} from '../../../src/utils/prettify';
import './Example.scss';
import {listenToState_adhock, stopToListen} from '../utils/api';

export default class Example extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: props.elements
        }

        this.elementClick = this.elementClick.bind(this);
        this.elementDoubleClick = this.elementDoubleClick.bind(this);
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

    elementClick(id, parent_id, element_type, ev) {
        console.log('click: id, parent_id, element_type, ev -> ', id, parent_id, element_type, ev);
    }

    elementDoubleClick(id, parent_id, element_type, ev) {
        console.log('doubleClick: id, parent_id, element_type, ev -> ', id, parent_id, element_type, ev);
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
                        <Element id={1} statePath="elements/present"
                                 onElementClick={this.elementClick}
                                 onElementDblClick={this.elementDoubleClick}
                                 subscribe={listenToState_adhock}
                                 unsubscribe={stopToListen}
                        />
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