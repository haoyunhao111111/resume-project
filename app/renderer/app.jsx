import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,  Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <div>可视化简历平台</div>
                    <div>electron+react+typescript</div>
                </Route>
            </Switch>
        </Router>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'))