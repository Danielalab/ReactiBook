import { connect } from 'react-redux';
import Main from '../components/Main';

const mapStateToProps = (state) => ({
  navigation: state.AppReducer.navigation,
})

export default connect(mapStateToProps , null)(Main);