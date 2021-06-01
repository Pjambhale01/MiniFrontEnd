import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Alltodo from './Alltodo'
import Complet from './Complet'
import Header from './Header'
import inComplet from './Incomplet'
import LogInfo from './LogInfo'
const VisFilter = (props) => {

    return (
        <div>
            <BrowserRouter>
                <Header />
                <LogInfo />
                <Switch>
                    <Route path='/complet' component={Complet} />
                    <Route path='/incomplet' component={inComplet} />
                    <Route path='/alltodo' component={Alltodo} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default VisFilter