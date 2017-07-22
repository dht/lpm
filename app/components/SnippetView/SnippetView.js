import React from 'react';
import './SnippetView.scss';
import Snippet from '../../../src/Snippet';
import {listenToState_adhock} from '../utils/api';

export default class SnippetView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentDidMount() {
    }


    render() {
        const {} = this.state;

        return (
            <div className="SnippetView-container">
                <Snippet id="76b42d81" listenMethod={listenToState_adhock} />
            </div>
        );
    }
}

const styles = {
}

