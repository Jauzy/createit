import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import userAction from '../Modules/Redux/Actions/User'
import { connect } from 'react-redux'

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