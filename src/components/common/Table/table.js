import React from 'react';
import styles from './table.module.scss';
//import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
//import TablePagination from '@material-ui/core/TablePagination';


class Tables extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    orders: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }


  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();

  }




  render() {
    const { loading: { active, error }, orders } = this.props;
    const columns = [
      { id: 'id', label: 'Number', minWidth: 170 },
      { id: 'status', label: 'Status', minWidth: 100 },
      {
        id: 'Amount',
        label: 'Amount',
        minWidth: 170,
        align: 'right',
        format: value => value.toLocaleString(),
      },
      {
        id: 'Telephone',
        label: 'Telephone Number',
        minWidth: 170,
        align: 'right',
        format: value => value.toLocaleString(),
      },
      {
        id: 'Adres',
        label: 'Adress',
        minWidth: 170,
        align: 'right',
      },
    ];


    console.log(orders);
    if(active || !orders.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {columns.map(column => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      styles={{ minWidth: column.minWidth}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>

              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      );
    }
  }
}
// const columns = [
//   { id: 'id', label: 'Number', minWidth: 170 },
//   { id: 'status', label: 'Status', minWidth: 100 },
//   {
//     id: 'Amount',
//     label: 'Amount',
//     minWidth: 170,
//     align: 'right',
//     format: value => value.toLocaleString(),
//   },
//   {
//     id: 'Telephone',
//     label: 'Telephone Number',
//     minWidth: 170,
//     align: 'right',
//     format: value => value.toLocaleString(),
//   },
//   {
//     id: 'Adres',
//     label: 'Adress',
//     minWidth: 170,
//     align: 'right',
//   },
// ];



// const rows = [
//   {id: '1', status:'delivered', Amount: '9',Telephone: '999-023-234', Adres: 'Warszawa'},
//   {id: '2', status:'delivered', Amount: '9',Telephone: '999-023-234', Adres: 'Warszawa'},
//   {id: '3', status:'delivered', Amount: '9',Telephone: '999-023-234', Adres: 'Warszawa'},
//   {id: '4', status:'delivered', Amount: '9',Telephone: '999-023-234', Adres: 'Warszawa'},
//   {id: '5', status:'delivered', Amount: '9',Telephone: '999-023-234', Adres: 'Warszawa'},
//   {id: '6', status:'delivered', Amount: '9',Telephone: '999-023-234', Adres: 'Warszawa'},
//   {id: '7', status:'delivered', Amount: '9',Telephone: '999-023-234', Adres: 'Warszawa'},
//   {id: '8', status:'delivered', Amount: '9',Telephone: '999-023-234', Adres: 'Warszawa'},
//   {id: '9', status:'delivered', Amount: '9',Telephone: '999-023-234', Adres: 'Warszawa'},
//   {id: '10', status:'delivered', Amount: '9',Telephone: '999-023-234', Adres: 'Warszawa'},
// ];




// function  Tables({loading: {active, error},takeAway}) {
//   const classes = useStyles();
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);
//   console.log(takeAway);
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };
//   React.useEffect(() => {
//     const {fetchTables} = this.fetchTables;
//     fetchTables();
//   },[]);

//   const handleChangeRowsPerPage = event => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   if(active || !takeAway.length){
//     return (
//       <Paper className={styles.component}>
//         <p>Loading...</p>
//       </Paper>
//     );
//   }else if(error) {
//     return (
//       <Paper className={styles.component}>
//         <p>
//           Error! Details:
//         </p>
//       </Paper>
//     );
//   }else {
//     return (
//       <Paper>
//         <TableContainer className={classes.container}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 {columns.map(column => (
//                   <TableCell
//                     key={column.id}
//                     align={column.align}
//                     styles={{ minWidth: column.minWidth}}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {takeAway.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
//                     {columns.map(column => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[10,25,100]}
//           component="div"
//           count={takeAway.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         ></TablePagination>
//       </Paper>
//     );
//   }
// }
// Table.propTypes = {
//   fetchTables: PropTypes.func,
//   takeAway: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//   loading: PropTypes.shape({
//     active: PropTypes.bool,
//     error: PropTypes.bool,
//   }),
// };

export default Tables;
