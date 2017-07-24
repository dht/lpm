import React from 'react';
import {firebaseObjectToObject} from '../utils/StateParser';
import Element from '../Connected';

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
        const {subscribe, id} = this.props;

        if (subscribe && id) {
            subscribe(id, this.parseElements);
        }
    }

    componentWillUnmount() {
        const {unsubscribe, id} = this.props;

        if (unsubscribe && id) {
            unsubscribe(this.firebaseRef, this.parseElements);
        }
    }

    render() {
        const {subscribe, unsubscribe} = this.props;
        const {elements} = this.state;

        return (
            <div className="snippet-container disableInnerClicks">
                <Element
                    elements={elements}
                    id={1}
                    onElementClick={() => {}}
                    onElementDblClick={() => {}}
                    subscribe={subscribe}
                    unsubscribe={unsubscribe}
                />
            </div>
        );
    }
}
