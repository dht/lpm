import React from 'react';
import {firebaseObjectToObject} from '../_utils/StateParser';
import Element from '../Element';

export default class snippet extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            elements: {}
        }

    }

    componentWillReceiveProps(newProps) {
    }

    componentDidMount() {
        const {listenMethod, id} = this.props;

        if (listenMethod && id) {
            listenMethod(id, (firebaseObject) => {
                let elements = firebaseObjectToObject(firebaseObject);
                this.setState({elements});
            });
        }
    }

    render() {
        const {elements} = this.state;

        return (
            <div className="snippet-container disableInnerClicks">
                <Element
                    elements={elements}
                    id={1}
                    onElementClick={() => {}}
                    onElementDblClick={() => {}}
                />
            </div>
        );
    }
}

const styles = {
}

