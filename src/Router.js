import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import {
  Landing, Page404, Homepage, DesignCategory, Pricing, SignIn, SignUp,
  BriefContest, BriefProject, ContestReview, ProjectReview, Payment, ClientProfile, ContestList, ProjectList, CreatorProfile, ContestDashboard
} from './Containers/Index'
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
                <Route exact path={ROUTES.LOGIN} component={() => (
                  <div className='bg-light'>
                    <div className='container py-5'>
                      <SignIn />
                    </div>
                    <div className='shape-wave-bottom'></div>
                  </div>
                )} />
                <Route exact path={ROUTES.REGISTER} component={() => (
                  <div className='bg-light'>
                    <div className='container py-5'>
                      <SignUp />
                    </div>
                    <div className='shape-wave-bottom'></div>
                  </div>
                )} />

                <Route exact path={ROUTES.HOME} component={Homepage} />
                <Route exact path={ROUTES.DESIGNCATEGORY} component={DesignCategory} />
                <Route exact path={ROUTES.BRIEFCONTEST} component={BriefContest} />
                <Route exact path={ROUTES.BRIEFCONTESTREVIEW} component={ContestReview} />
                <Route exact path={ROUTES.BRIEFPROJECT} component={BriefProject} />
                <Route exact path={ROUTES.BRIEFPROJECTREVIEW} component={ProjectReview} />
                <Route exact path={ROUTES.PRICING} component={Pricing} />
                <Route exact path={ROUTES.PAYMENT} component={Payment} />
                <Route exact path={ROUTES.CLIENT.DASHBOARD} component={ClientProfile} />
                <Route exact path={ROUTES.CLIENT.CONTESTLIST} component={ContestList} />
                <Route exact path={ROUTES.CLIENT.PROJECTLIST} component={ProjectList} />
                <Route exact path={ROUTES.CREATOR.DASHBOARD} component={CreatorProfile} />
                <Route exact path={ROUTES.CONTESTDASHBOARD} component={ContestDashboard} />
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