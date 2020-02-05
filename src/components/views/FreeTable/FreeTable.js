import React from 'react';
import styles from './FreeTables.module.scss';
//import {Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const columns = [
  {id: 'name', label: 'Name', minWidth:170},
  {id: 'code', label: 'ISO\u00a0Code', minWidth:100},
  {
    id: 'population',
    label: 'Population',
    minWidth:170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2),
  },
];
function createData(name, code, population, size) {
  const density = population/size;
  return {name ,code,population, size, density };
}
const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];
const FreeTable =()=>{

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Container component="div" className={styles.root}>
      <Box>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item xs={12}
            className={styles.title}
          >
            <h1>TABLES</h1>
          </Grid>
          <Grid container item xs={6}
            justify="space-between"
          >
            <Button variant="outlined"  className={styles.button}>New reservation</Button>
          </Grid>
          <Grid container item xs={6}
            justify="flex-end"

          >
            <Button variant="outlined"  className={styles.button}>Edit</Button>
          </Grid>
          <Grid  item xs={6}>
            <Button variant="outlined"  className={styles.button}>New event</Button>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <form  noValidate>

              <Button variant="outlined" className={styles.button}><TextField
                className={styles.TextField}
                id="datetime-local"
                type="datetime-local"
                defaultValue="2020-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </Button>
            </form>
          </Grid>
          <Grid item xs={12}>
            <Paper className={styles.paper}>
              <TableContainer className={styles.container}>
                <Table stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      {columns.map(column =>(
                        <TableCell
                          key={column.id}
                          align={column.align}
                          styles={{minWidth: column.minWidth}}>
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                      return(
                        <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                          {columns.map(column =>{
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === 'number' ? column.format(value) : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10,25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );};
export default FreeTable;
