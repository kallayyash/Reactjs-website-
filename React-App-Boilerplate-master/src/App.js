import React, { Component } from 'react';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";

import persistStore from './config/store';
import Routes from "./config/Routes";

const persist = persistStore();

class App extends Component {
    render() {
        return (
            <Provider store={persist.store}>
                <PersistGate loading={null} persistor={persist.persistor}>
                    <BrowserRouter>
                        <Routes />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
