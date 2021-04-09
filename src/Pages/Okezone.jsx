import React from 'react'
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom"
import ListType from './ListType/ListType';

function Okezone() {
    let match = useRouteMatch();
    return (
        <div>
            <h2>Ini Berita Okezone</h2>
            <ul>
                <li><NavLink to={`${match.url}/sport`}>Sport</NavLink></li>
                <li><NavLink to={`${match.url}/economy`}>Economy</NavLink></li>
            </ul>

            <hr />
            <Switch>
                <Route path={`${match.path}/:type`}>
                <ListType />
                </Route>
            </Switch>
        </div>
    )
}

export default Okezone
