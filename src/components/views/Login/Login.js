import React from 'react';
import styles from './Login.module.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    width: 190,
    height: 60,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  TextField: {

    height:60,
    margin:20,
    width: 400,
  },
  Link:{
    fontSize:12,

  },
}));

const preventDefault = event =>event.preventDefault();
const Login = () => {
  const classes = useStyles();
  return (

    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" className={styles.root}>
          <Grid container
            direction="column"
            justify="space-between"
            alignItems="center"
            spacing={2}>
            <Grid item xs={6} container alignItems="flex-start">
              <h1 className={styles.titlePage}> Login </h1>
            </Grid>
            <Grid
              item xs={6}
            >
              <form  noValidate autoComplete="off">
                <TextField className={classes.TextField} required id="filled-required" label="Username" variant="filled" />
                <TextField className={classes.TextField}  id="filled-password-input" label="Password" type="current-password" variant ="filled"/>
              </form>
            </Grid>
            <Grid
              container
              item xs={6}
              justify="center"
            >
              <Button  variant="outlined" className={classes.margin}>Cancel</Button>
              <Button variant="outlined" className={classes.margin}>Log in</Button>
              <div className={styles.link}>
                <Grid item xs={12}>
                  <Link href="#" onClick={preventDefault} className={styles.links}>Forget Password or username?</Link>
                </Grid>
                <Grid container item xs={12}
                  justify="center"
                >
                  <Link href="#" onClick={preventDefault} className={styles.links}>Tell it to the menager!!!</Link>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Login;
