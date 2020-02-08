import { connect } from 'react-redux';
import FreeTable from './FreeTable';

import {getAll, fetchFromAPI,getLoadingState} from '../../../redux/orderTableRedux';


const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () =>dispatch(fetchFromAPI()),

});

export default connect(mapStateToProps, mapDispatchToProps)(FreeTable);
