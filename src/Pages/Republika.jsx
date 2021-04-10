import React from 'react'
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom"
import ListType from './ListType/ListType';
import {ListGroup, ListGroupItem} from 'reactstrap'

function Republika() {
    let match = useRouteMatch();
    return (
        <div className="my-3">
            <h2>Ini Berita CNBC</h2>
            <ListGroup>
            <ListGroupItem className="justify-content-between"><NavLink to={`${match.url}/khazanah`}>Khazanah</NavLink></ListGroupItem>
            <ListGroupItem className="justify-content-between"><NavLink to={`${match.url}/islam-digest`}>Islam Digest</NavLink></ListGroupItem>
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

export default Republika
