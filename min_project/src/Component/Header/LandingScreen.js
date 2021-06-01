
import React from 'react'
import { createStore } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './Component/Header/Header'
import AddItem from './Component/TodoItem/AddItem'
import Todolist from './Component/TodoList/Todolist'
import VisFilter from './Component/Visiblity_Filter/Vis_Filter'
import reducer from './Component/reducer/reducer'
import FormValid from './Component/FormValidation/FormValid'

const LandingScreen = () => {

    const initValue = {
        list: []
    }
    const store = createStore(reducer, initValue)

    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={AddItem} />
                        <Route path='/Todolist' component={Todolist} />
                        <Route path='/login' component={FormValid} />
                        <Route path='/Visfilter' component={VisFilter} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    )
}
export default LandingScreen



