import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import userAction from '../Modules/Redux/Actions/User'
import { connect } from 'react-redux'

import { SignIn } from '../Containers/Index'

import Cookies from 'universal-cookie'
const cookies = new Cookies()
const ROUTES = require('../Constants/Routes')

const Navbar = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className='container'>
                <Link class="navbar-brand" to={ROUTES.LANDING}><img src={require('../Modules/images/logo.png')} width='100px' /></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto font-weight-bold">
                        <li class="nav-item">
                            <Link class="nav-link" to={ROUTES.HOME}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={ROUTES.DESIGNCATEGORY}>Kategori Desain</Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto font-weight-bold">
                        <li class="nav-item">
                            <a class="nav-link" href='#' data-toggle="modal" data-target='#signInModal'>Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="modal fade" id="signInModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-header" style={{ border: 'unset' }}>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i className='far fa-times-circle text-main' style={{ fontSize: '40px', opacity: '1' }} />
                            </button>
                        </div>
                        <div class="modal-body">
                            <SignIn />
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: (history) => dispatch(userAction.logout(history))
    }
}


export default connect(null, mapDispatchToProps)(withRouter(Navbar))