import { connect } from 'react-redux';
import Tables from './table';

import {getAll, fetchFromAPI,getLoadingState} from '../../../redux/orderTableRedux';


const mapStateToProps = (state) => ({
  orders: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),

});


export default connect(mapStateToProps, mapDispatchToProps)(Tables);
