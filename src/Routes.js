import React from 'react'
import { Switch, Route } from "react-router-dom"
import Okezone from './Pages/Okezone'

function Routes() {
    return (
        <Switch>
            {/* <Route>

            </Route>
            <Route>
                
            </Route>
            <Route>
                
            </Route>
            <Route>
                
            </Route> */}
            <Route path="/okezone" render={() => <Okezone/>} />
        </Switch>
    )
}

export default Routes
