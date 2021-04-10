import React from 'react'
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom"
import ListType from './ListType/ListType';
import {ListGroup, ListGroupItem} from 'reactstrap'

function Cnbc() {
    let match = useRouteMatch();
    return (
        <div className="my-3">
            <h2>Ini Berita CNBC</h2>
            <ListGroup>
            <ListGroupItem className="justify-content-between"><NavLink to={`${match.url}/market`}>Market</NavLink></ListGroupItem>
            <ListGroupItem className="justify-content-between"><NavLink to={`${match.url}/investment`}>Investment</NavLink></ListGroupItem>
            </ListGroup>

            <hr />
            <Switch>
                <Route path={`${match.path}/:type`}>
                <ListType />
                </Route>
            </Switch>
        </div>
    )
}

export default Cnbc
