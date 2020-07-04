import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Landing, Page404, Homepage, DesignCategory, Brief } from './Containers/Index'
import { Navbar, Footer } from './Components/Index'

import { Provider as ReduxProvider } from 'react-redux'
import configStore from './Modules/Redux/Store'
const reduxStore = configStore(window.REDUX_INITIAL_DATA)
const ROUTES = require('./Constants/Routes')

const Router = (props) => {
  return (
    <div className='font-roboto'>
      <ReduxProvider store={reduxStore}>
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <div>
              <Navbar />
              <Switch>
                <Route exact path={ROUTES.HOME} component={Homepage} />
                <Route exact path={ROUTES.DESIGNCATEGORY} component={DesignCategory} />
                <Route exact path={ROUTES.BRIEF} component={Brief} />
                <Route component={Page404} />
              </Switch>
              <Footer />
            </div>
          </Switch>
        </BrowserRouter>
      </ReduxProvider>
    </div>
  )
}

export default Router