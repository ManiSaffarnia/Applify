import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import FavoritePage from "../components/FavoritePage";
import ApplifyDashboard from "../components/ApplifyDashboard";

const AppRouters = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ApplifyDashboard} exact/>
                <Route path="/fav" component={FavoritePage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouters;