import React, {useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom'
import $ from 'jquery'
import userAction from '../Modules/Redux/Actions/User'
import { connect } from 'react-redux'

import { SignIn, SignUp } from '../Containers/Index'

import Cookies from 'universal-cookie'
const cookies = new Cookies()
const ROUTES = require('../Constants/Routes')

const Navbar = (props) => {

    const handleModal = () => {
        $('#signInModal').removeClass('show');
        $('#signUpModal').removeClass('show');
        $('.modal-backdrop').removeClass('show');
    }

    useEffect(() => {
        if (cookies.get('token'))
            props.getUserData()
    }, [])

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id='navbarContainer'>
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
                        {(!props.user && !cookies.get('user')) && <li class="nav-item">
                            <a class="nav-link" href='#' data-toggle="modal" data-target='#signInModal'>Sign In</a>
                        </li>}
                        {(!props.user && !cookies.get('user')) && <li class="nav-item">
                            <a class="nav-link" href='#' data-toggle="modal" data-target='#signUpModal'>Sign Up</a>
                        </li>}
                        {props.user?.type == 'client' && <li class="nav-item">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown d-flex">
                                    <h6 className='my-auto mr-2 font-weight-bold text-secondary'>Hello, {props.user?.name}</h6>
                                    <a class="nav-link dropdown-toggle my-auto" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src={props.user?.profile_pict} width="40" height="40" class="rounded-circle" />
                                    </a>
                                    <div class="dropdown-menu py-0" style={{ maxWidth: '400px' }} aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item d-flex px-5 py-4" href="#">
                                            <img src={props.user?.profile_pict} width="60" height="60" class="my-auto rounded-circle" />
                                            <div className='my-auto ml-4'>
                                                <h5 className='font-weight-bold mb-0 text-wrap'>{cookies.get('user').name}</h5>
                                                <h6 className='text-secondary'>{cookies.get('user').email}</h6>
                                            </div>
                                        </a>
                                        <Link class="text-decoration-none dropdown-item d-flex py-3 px-5 bg-light text-secondary" to={ROUTES.CLIENT.DASHBOARD}>
                                            <i className='fa fa-user text-main my-auto' style={{ fontSize: '20px' }} />
                                            <h6 className='font-weight-bold ml-4 my-auto'>Profile</h6>
                                        </Link>
                                        <Link class="text-decoration-none dropdown-item d-flex py-3 px-5 bg-light text-secondary" to={ROUTES.CLIENT.PROJECTLIST}>
                                            <i className='fa fa-cog text-main my-auto' style={{ fontSize: '20px' }} />
                                            <h6 className='font-weight-bold ml-4 my-auto'>Your Project</h6>
                                        </Link>
                                        <Link class="text-decoration-none dropdown-item d-flex py-3 px-5 bg-light text-secondary" to={ROUTES.CLIENT.CONTESTLIST}>
                                            <i className='fa fa-cog text-main my-auto' style={{ fontSize: '20px' }} />
                                            <h6 className='font-weight-bold ml-4 my-auto'>Your Contests</h6>
                                        </Link>
                                        <Link class="text-decoration-none dropdown-item d-flex py-3 px-5 bg-light text-secondary" href="#">
                                            <i className='fa fa-cog text-main my-auto' style={{ fontSize: '20px' }} />
                                            <h6 className='font-weight-bold ml-4 my-auto'>Pengaturan</h6>
                                        </Link>
                                        <Link class="text-decoration-none dropdown-item d-flex py-3 px-5 bg-light text-secondary border-top rounded-bottom" href="#"
                                            onClick={() => props.logout(props.history)}>
                                            <i className='fa fa-power-off text-main my-auto' style={{ fontSize: '20px' }} />
                                            <h6 className='font-weight-bold ml-4 my-auto'>Logout</h6>
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </li>}
                    </ul>
                </div>
            </div>

            <div class="modal fade" id="signInModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-header" style={{ border: 'unset' }}>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i className='far fa-times-circle text-main' style={{ fontSize: '40px', opacity: '1' }} />
                            </button>
                        </div>
                        <div class="modal-body">
                            <SignIn handleModal={handleModal} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-header" style={{ border: 'unset' }}>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i className='far fa-times-circle text-main' style={{ fontSize: '40px', opacity: '1' }} />
                            </button>
                        </div>
                        <div class="modal-body">
                            <SignUp handleModal={handleModal} />
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        user: state.user.user,
        error: state.user.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserData: () => dispatch(userAction.getUserData()),
        logout: (history) => dispatch(userAction.logout(history))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))