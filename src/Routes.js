import React from 'react'
import { Switch, Route } from "react-router-dom"
import Bbc from './Pages/Bbc'
import Cnbc from './Pages/Cnbc'
import Okezone from './Pages/Okezone'
import Republika from './Pages/Republika'
import Tempo from './Pages/Tempo'

function Routes() {
    return (
        <Switch>
            <Route path="/bbc-news" render={() => <Bbc/>} />
            <Route path="/republika-news" render={() => <Republika/>} />
            <Route path="/cnbc-news" render={() => <Cnbc/>} />
            <Route path="/tempo-news" render={() => <Tempo/>} />
            <Route path="/okezone-news" render={() => <Okezone/>} />
        </Switch>
    )
}

export default Routes
