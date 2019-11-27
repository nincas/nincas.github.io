import React from 'react';
import ReactDOM from 'react-dom';
import Style from './Theme/style';
import Router from './Router/Router'

ReactDOM.render(
    <React.Fragment>
        <Style/>
        <Router />
    </React.Fragment>, 
    document.getElementById('root')
);

