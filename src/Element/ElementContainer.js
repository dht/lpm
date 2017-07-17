import {connect} from 'react-redux'
import Element from './Element';
import {getStatePath} from '../_utils/element';

const mapStateToProps = (state, ownProps) => {

    const elements = getStatePath(state, ownProps.statePath);
    const element = elements[ownProps.id];

    if (!element) {
        return {};
    }

    let data = element.data || {},
        innerData = data.content;

    return {
        id: ownProps.id,
        parent_id: element.parent_id,
        elementType: element.elementType,
        style: element.style,
        data: data,
        content: innerData,
        childIds: element.childIds,
        selected: false,
        selectedParent: false,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onElementClick: (id, parent_id, element_type, ev) => {
            console.log(`element ${id} clicked`);
        },
        onDoubleClick: (id, parent_id, element_type, ev) => {
            console.log(`element ${id} double clicked`);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Element)

