import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import FreeTables from './components/views/FreeTable/FreeTable';
import SeeWaiter from './components/views/SeeWaiter/SeeWaiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Home from './components/views/Home/Home';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {

      main: '#2B4C6F',
    },
    // secondary: {

    //   main: '#11cb5f',
    // },
  },
});
function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
              <Route exact path={process.env.PUBLIC_URL + `/Dashboard`} component={Dashboard}/>
              <Route exact path={process.env.PUBLIC_URL + `/Login`} component={Login}/>
              <Route exact path={process.env.PUBLIC_URL + `/FreeTables`} component={FreeTables}/>
              <Route exact path={process.env.PUBLIC_URL+ `/SeeWaiter`} component={SeeWaiter}/>
              <Route exact path={process.env.PUBLIC_URL+ `/Kitchen`} component={Kitchen}/>

            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
