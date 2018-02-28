import { connect } from 'react-redux'
import * as actions from './actions';
import FormikComponent from './FormikComponent';

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(FormikComponent);