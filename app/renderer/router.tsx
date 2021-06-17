import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import ROUTER from "@common/constants/route";
import Root from '@src/container/root';
import Resume from '@src/container/resume';
function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route path={ROUTER.root} exact>
                    <Root/>
                </Route>
                <Route path={ ROUTER.resume } exact>
                    <Resume/>
                </Route>
            </Switch>
            <Redirect to={ROUTER.root}/>
        </HashRouter>  
    )
}
 
export default Router