import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import {
  Landing, Page404, Homepage, DesignCategory, Pricing, TentangKami, Login, Register, MainEvent, Event, Program,
  BriefContest, BriefProject, ContestReview, ProjectReview, Payment, ClientProfile, ContestList, ProjectList, CreatorProfile, ProjectPayment,
  BrowseContest, BrowseProject, BrowseCreator, CreatorPortofolio, CreatorContestList, ProjectDashboard, ContestDashboard, VerifyEmail, ForgotPassword,
  BuatContest, BuatProject
} from './Containers/Index'
import { Navbar, Footer } from './Components/Index'

import { Provider as ReduxProvider } from 'react-redux'
import configStore from './Modules/Redux/Store'
const reduxStore = configStore(window.REDUX_INITIAL_DATA)
const ROUTES = require('./Constants/Routes')

const Router = (props) => {
  return (
    <div className='font-roboto w-100'>
      <ReduxProvider store={reduxStore}>
        <BrowserRouter>
          <Switch>
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route exact path={ROUTES.BRIEFCONTEST} component={BriefContest} />
            <Route exact path={ROUTES.BRIEFCONTESTREVIEW} component={ContestReview} />
            <Route exact path={ROUTES.BRIEFPROJECT} component={BriefProject} />
            <Route exact path={ROUTES.BRIEFPROJECTREVIEW} component={ProjectReview} />
            <Route exact path={ROUTES.PRICING} component={Pricing} />
            <Route exact path={ROUTES.PAYMENT} component={Payment} />

            <Route exact path={ROUTES.PROJECT} component={BrowseProject} />
            <div>
              <Navbar />
              <Switch>
                <Route exact path={ROUTES.HOME} component={Homepage} />
                <Route exact path={ROUTES.LOGIN} component={Login} />
                <Route exact path={ROUTES.REGISTER} component={Register} />
                <Route exact path={ROUTES.DESIGNCATEGORY} component={DesignCategory} />
                <Route exact path={ROUTES.CLIENT.DASHBOARD} component={ClientProfile} />
                <Route exact path={ROUTES.CLIENT.CONTESTLIST} component={ContestList} />
                <Route exact path={ROUTES.CLIENT.PROJECTLIST} component={ProjectList} />
                <Route exact path={ROUTES.CREATOR.DASHBOARD} component={CreatorProfile} />
                <Route exact path={ROUTES.CONTESTDASHBOARD} component={ContestDashboard} />
                <Route exact path={ROUTES.BROWSE.CONTEST} component={BrowseContest} />
                <Route exact path={ROUTES.BROWSE.PROJECT} component={BrowseProject} />
                <Route exact path={ROUTES.BROWSE.CREATOR} component={BrowseCreator} />
                <Route exact path={ROUTES.CREATORPORTOFOLIO} component={CreatorPortofolio} />
                <Route exact path={ROUTES.CREATOR.CONTESTLIST} component={CreatorContestList} />
                <Route exact path={ROUTES.PROJECTDASHBOARD} component={ProjectDashboard} />
                <Route exact path={ROUTES.PROJECTPAYMENT} component={ProjectPayment} />

                <Route path={ROUTES.FORGOTPASSWORD} component={ForgotPassword} />
                <Route path={ROUTES.VERIFYEMAIl} component={VerifyEmail} />

                <Route exact path={ROUTES.TENTANGKAMI} component={TentangKami} />

                <Route exact path={ROUTES.MAINEVENT} component={MainEvent} />
                <Route exact path={ROUTES.EVENT} component={Event} />
                <Route exact path={ROUTES.PROGRAM} component={Program} />

                <Route exact path={ROUTES.BUATCONTEST} component={BuatContest} />
                <Route exact path={ROUTES.BUATPROJECT} component={BuatProject} />

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