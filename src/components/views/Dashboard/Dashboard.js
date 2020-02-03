import React from 'react';
import styles from './Dashboard.module.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const demoContent = [
  {id: '1', status: 'Yes', name: 'A.Nowa', Table: 'leave'},
  {id: '2', status: 'No', name: 'A.Nowa', Table: 'leave'},
  {id: '3', status: 'Yes', name: 'A.Nowa', Table: 'leave'},
  {id: '4', status: 'Yes', name: 'A.Nowa', Table: 'leave'},
  {id: '5', status: 'Yes', name: 'A.Nowa', Table: 'leave'},
  {id: '6', status: 'Yes', name: 'A.Nowa', Table: 'leave'},
  {id: '7', status: 'No', name: 'A.Nowa', Table: 'leave'},
  {id: '8', status: 'No', name: 'A.Nowa', Table: 'leave'},
];
const demoContentReservation =[
  {id: '1', status: 'Yes', name: 'A.Nowa', Table: 'leave'},
  {id: '2', status: 'No', name: 'A.Nowa', Table: 'leave'},
  {id: '3', status: 'Yes', name: 'A.Nowa', Table: 'leave'},
  {id: '4', status: 'No', name: 'A.Nowa', Table: 'leave'},
  {id: '5', status: 'Yes', name: 'A.Nowa', Table: 'leave'},
  {id: '6', status: 'No', name: 'A.Nowa', Table: 'leave'},
  {id: '7', status: 'No', name: 'A.Nowa', Table: 'leave'},
  {id: '8', status: 'Yes', name: 'A.Nowa', Table: 'leave'},
];
const useStyles = makeStyles(theme => ({
  TableCell: {
    minWidth:180,
    fontSize:20,
  },
  Paper:{
    marginTop:50,
  },
}));


const Dashboard = () =>{
  const classes = useStyles();
  return (
    <Container component="div" className={styles.root}>
      <Grid
        container
        direction='column'
        justify='space-around'
        alignItems="center"
      >
        <h1 className={styles.title}>Dashboard</h1>
        <Grid container item xs={12}
          direction ="row"
          justify='space-around'
          alignContent="center">
          <Box component='div' className={styles.box}>
            <h3>Remote order</h3>
            <p> 1231.55$</p>
          </Box>
          <Box component='div' className={styles.box}>
            <h3>Total Sale</h3>
            <p> 1231.55$</p>
          </Box>
        </Grid>
        <Grid>
          <Box component='div' className={styles.box}>
            <h3>Local order</h3>
            <p> 1231.55$</p>
          </Box>
        </Grid>
        <Grid container item xs={12}
          direction ="row"
          justify='space-between'
          alignContent="space-between">
          <Paper className={classes.Paper}>
            <Table >
              <TableHead>
                <TableRow className={styles.TableRow}>
                  <TableCell className={classes.TableCell}>Reservation</TableCell>
                  <TableCell className={classes.TableCell}>Name and Amount</TableCell>
                  <TableCell className={classes.TableCell}>Table</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {demoContent.map(row => (
                  <TableRow key={row.id} className={styles.TableRow}>
                    <TableCell className={classes.TableCell} component='th' scope='row'>{row.status}</TableCell>
                    <TableCell className={classes.TableCell}>{row.name}</TableCell>
                    <TableCell className={classes.TableCell}>{row.Table}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <Paper className={classes.Paper} >
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell className={classes.TableCell}>Event</TableCell>
                  <TableCell className={classes.TableCell}>Name and Amount</TableCell>
                  <TableCell className={classes.TableCell}>Table</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {demoContentReservation.map(row => (
                  <TableRow key={row.id}>
                    <TableCell className={classes.TableCell} component='th' scope='row'>{row.status}</TableCell>
                    <TableCell className={classes.TableCell}>{row.name}</TableCell>
                    <TableCell className={classes.TableCell}>{row.Table}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};




export default Dashboard;
