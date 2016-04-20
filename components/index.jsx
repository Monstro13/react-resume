import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './app';
import About from './about';
import Experience from './experience';
import Education from './education';
import Skills from './skills';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={About}/>
            <Route path="/about" component={About}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/education" component={Education}/>
            <Route path="/skills" component={Skills}/>
        </Route>
    </Router>,
    document.getElementById('appRoot')
);