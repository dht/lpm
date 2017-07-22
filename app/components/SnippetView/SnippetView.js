import React from 'react';
import './SnippetView.scss';
import Snippet from '../../../src/Snippet';
import {listenToState_adhock, stopToListen} from '../utils/api';

export default class SnippetView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [1, 2]
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({items: [1]});
        }, 5000);

        setTimeout(() => {
            this.setState({items: [1, 3, 5]});
        }, 6000);

        setTimeout(() => {
            this.setState({items: [4, 2]});
        }, 7000);

        setTimeout(() => {
            this.setState({items: [7, 8, 9]});
        }, 8000);

    }


    render() {
        const {items} = this.state;

        return (
            <div className="SnippetView-container">
                {
                    items.map(item => <Snippet
                        key={item} id="76b42d81"
                        listenMethod={listenToState_adhock}
                        unlistenMethod={stopToListen} />)
                }

            </div>
        );
    }
}

const styles = {
}

