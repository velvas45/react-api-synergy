import React from 'react'
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom"
import ListType from './ListType/ListType';
import {ListGroup, ListGroupItem} from 'reactstrap'

function Bbc() {
    let match = useRouteMatch();
    return (
        <div className="my-3">
            <h2>Ini Berita CNBC</h2>
            <ListGroup>
            <ListGroupItem className="justify-content-between"><NavLink to={`${match.url}/dunia`}>Dunia</NavLink></ListGroupItem>
            <ListGroupItem className="justify-content-between"><NavLink to={`${match.url}/multimedia`}>Multimedia</NavLink></ListGroupItem>
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

export default Bbc
