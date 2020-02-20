/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styles from './FreeTables.module.scss';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Tables from './../../common/Table/table.container';
const FreeTable = () => {

  return (
    <Container component="div" className={styles.root}>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} className={styles.title}>
            <h1>TABLES</h1>
          </Grid>
          <Grid container item xs={6} justify="space-between">
            <Button variant="outlined" className={styles.button}>
              New reservation
            </Button>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <Button variant="outlined" className={styles.button}>
              Edit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" className={styles.button}>
              New event
            </Button>
          </Grid>
          <Grid container item xs={6} justify="flex-end">
            <form noValidate>
              <Button variant="outlined" className={styles.button}>
                <TextField
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
              <Tables/>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

// FreeTable.propTypes = {
//   fetchTables: PropTypes.func,
//   TakeAway: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//   loading: PropTypes.shape({
//     active: PropTypes.bool,
//     error: PropTypes.bool,
//   }),
// };

export default FreeTable;
