import {connect} from 'react-redux'
import Element from './Element';
import {getStatePath} from '../utils/element';

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
        params: ownProps.params,
    }
}

const mapDispatchToProps = () => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Element)

