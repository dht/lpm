import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = (state, ownProps) => {

	return {
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {

	return {
	}
}

const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

export default AppContainer
