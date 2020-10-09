import * as reactRedux from 'react-redux'
import App from './App';
export const connect = reactRedux.connect();

const mapStateToProps = (state, ownProps) => {
  return {

  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);