import React from 'react'
import { connect } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import reducer from './reducer'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import VisiblityFilter from './VisiblityFilter'
import HeaderTodo from './Header'
const LandingPage = (props) => {
    
    const { LogInfo} = props
   
    const initValue = {
        list: []
    }
    const store = createStore(reducer, initValue)
    return (
        <div>
            <div style={{float:'right',marginRight:'350px',color:'orange'}}>
             {LogInfo.map((item) => 
                 <div>
                     <div>{item.fname}</div>
                     <div>{item.Email}</div>
                     <div>{item.mobile}</div>
                </div>)}
             </div>
            <Provider store={store}>
                <BrowserRouter>
                    <HeaderTodo/>
                    <Switch>  
                        <Route path='/AddTodo' component={AddTodo} />
                        <Route path='/Todolist' component={TodoItem} />
                        <Route path='/visiblity' component={VisiblityFilter} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        LogInfo:state.LogInfo
    }
}
export default connect(mapStateToProps)(LandingPage)