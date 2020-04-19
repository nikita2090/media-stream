import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import AppContainer from "./AppContainer";
import AppWithService from "./AppWithService";

// import { Provider } from 'react-redux';
// import store from './reduxInfrostructure/store';

ReactDOM.render(
    <AppWithService />,
    document.getElementById('root')
);

/*
ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);*/
