import React from 'react';
import {firebaseObjectToObject} from '../_utils/StateParser';
import Element from '../Element';

export default class snippet extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            elements: {}
        }

        this.parseElements = this.parseElements.bind(this);
    }

    parseElements(firebaseObject, ref) {
        let elements = firebaseObjectToObject(firebaseObject);
        this.setState({elements});
        this.firebaseRef = ref;
    }

    componentDidMount() {
        const {listenMethod, id} = this.props;

        if (listenMethod && id) {
            listenMethod(id, this.parseElements);
        }
    }

    componentWillUnmount() {
        const {unlistenMethod, id} = this.props;

        if (unlistenMethod && id) {
            unlistenMethod(this.firebaseRef, this.parseElements);
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

