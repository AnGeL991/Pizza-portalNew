import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import FreeTables from './components/views/FreeTable/FreeTable';
import SeeWaiter from './components/views/SeeWaiter/SeeWaiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Home from './components/views/Home/Home';
// import FreeTableEdit from './components/views/FreeTable/FreeTableEdit/FreeTableEdit';
// import FreeTableEvent from'./components/views/FreeTable/FreeTableEvent/FreeTableEvent';
// import FreeTableReservation from'./components/views/FreeTable/FreeTableReseration/FreeTableReservation';
// import DetailsEvents from './components/views/DetailsEvents/DetailsEvents';
// import DetailsReservation from './components/views/DetailsReservation/DetailsReservation';
// import SeeWaiterClose from './components/views/SeeWaiter/SeeWaiterClose/SeeWaiterClose';
import SeeWaiterEdit from './components/views/SeeWaiter/SeeWaiterEdit/SeeWaiterEdit';
// import SeeWaiterNew from './components/views/SeeWaiter/SeeWaiterNew/SeeWaiterNew';
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
              {/* <Route exact path={`${process.env.PUBLIC_URL}/FreeTables/DetailsEvents`} component={DetailsEvents}/>
          <Route exact path={`${process.env.PUBLIC_URL}/FreeTables/DetailsReservation`} component={DetailsReservation}/>
          <Route exact path={`${process.env.PUBLIC_URL}/FreeTables/Edit/:id`} component={FreeTableEvent}/>
          <Route exact path={`${process.env.PUBLIC_URL}/FreeTables/Event/:id`} component={FreeTableEdit}/>
          <Route exact path={`${process.env.PUBLIC_URL}/FreeTables/New/:id`} component={FreeTableReservation}/>

          <Route exact path={`${process.env.PUBLIC_URL}/SeeWaiter/Close`} component={SeeWaiterClose}/>
          <Route exact path={`${process.env.PUBLIC_URL}/SeeWaiter/Edit`} component={SeeWaiterEdit}/>
          <Route exact path={`${process.env.PUBLIC_URL}/SeeWaiter/New`} component={SeeWaiterNew}/> */}
              <Route exact path={process.env.PUBLIC_URL+ `/SeeWaiter`} component={SeeWaiter}/>
              <Route exact path={process.env.PUBLIC_URL+ `/Kitchen`} component={Kitchen}/>
              <Route exact path={`${process.env.PUBLIC_URL}/SeeWaiter/Edit`} component={SeeWaiterEdit}/>
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
