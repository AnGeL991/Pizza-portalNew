import { connect } from 'react-redux';
import Waiter from './SeeWaiter';
import { getAll, fetchFromAPI, getLoadingState,updateStatus } from '../../../redux/tablesRedux';

const mapStateToProps = (state) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  changeTableStatus: (id) => dispatch(updateStatus(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
