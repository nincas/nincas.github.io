import React from 'react';
import ReactDOM from 'react-dom';
import Style from './Theme/style';
import Router from './Router/Router';
import { Helmet } from 'react-helmet';
import ReallySmoothScroll from 'really-smooth-scroll';

ReallySmoothScroll.shim();
ReactDOM.render(
    <React.Fragment>
        <Helmet>
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>
        </Helmet>
        <Style/>
        <Router />
    </React.Fragment>, 
    document.getElementById('root')
);

