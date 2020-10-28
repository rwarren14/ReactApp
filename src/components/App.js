
import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {BrowserRouter, Route, Switch }from "react-router-dom";
import theme from './ui/Theme';
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={() => <div>home</div>} />
            <Route exact path="/services" component={() => <div>Services</div>} />

            <Route
                exact
                path="/customsoftware"
                component={() => <div>Custom Software</div>}
            />
            <Route
                exact
                path="/mobileapps"
                component={() => <div>Mobile Apps</div>}
            />
            <Route
                exact
                path="/websites"
                component={() => <div>Website</div>}
            />
            <Route
                exact
                path="/revolution"
                component={() => <div> The Revolution</div>}
            />
            <Route
                exact
                path="/aboutus"
                component={() => <div>About Us</div>}
            />
            <Route
                exact
                path="/contact"
                component={() => <div>Contact Us</div>}
            />
            <Route
                exact
                path="/estimate"
                component={() => <div>Estimate</div>}
            />
        </Switch>

        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
