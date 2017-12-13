import React from 'react'
import ReactDOM from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Router, Route, Link, IndexRoute, IndexLink, Redirect ,BrowserHistory} from 'react-router'
import { createHistory, createHashHistory, useBasename } from 'history';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Index from './js/index'

const history = useBasename(createHashHistory)({
    queryKey: '_key',
    basename: '/app',
});
class AppRouter extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Route path="/" component={Index}/>
            </Router>
        )
    }
}
ReactDOM.render(<AppRouter />, document.getElementById("appWrapper"));