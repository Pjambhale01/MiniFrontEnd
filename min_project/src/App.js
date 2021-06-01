import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import reducer from './Component/reducer'
import FormValid from './Component/FormValid'
import LandingPage from './Component/LandingPage'

function App() {

  const initValue = {
    LogInfo: []
  }

  const store = createStore(reducer, initValue)

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            
            <Route exact path='/' component={FormValid} />
            <Route path='/landing' component={LandingPage} />
            
          </Switch>
        </BrowserRouter>
      </Provider>

    </div>
  )
}

export default App;































