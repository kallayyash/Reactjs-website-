import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import Main from "./../containers/Main";
import MerchantLogin from "./../containers/MerchantLogin";
import somepath1 from "./../containers/somepath1";

class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/login" component={MerchantLogin} />
                    <Route path ="/somepath1" component = {somepath1}/>
                </Switch>
            </main>
        );
    }
}

export default Routes;
