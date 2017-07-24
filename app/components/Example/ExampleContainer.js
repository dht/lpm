import {connect} from 'react-redux'
import Example from './Example'

const mapStateToProps = (state, ownProps) => {
    const {elements} = state|| {},
        {present} = elements;

    return {
        elements: present
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        method: () => {
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Example)
