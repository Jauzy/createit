import React, { useState } from 'react'
import * as queryString from "query-string";
import { connect } from 'react-redux'
import userAction from '../Modules/Redux/Actions/User'
import LoadingOverlay from 'react-loading-overlay'
import { withRouter, Link } from 'react-router-dom'

const ROUTES = require('../Constants/Routes')
const forgotIMG = require('../Modules/images/forgot-password.svg')

const ForgotPassword = props => {
    const [state, setState] = useState({
        email: '', password: '', repassword: '', sent: false,
        type: 'client'
    })

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const onSendEmail = () => {
        props.sendResetPasswordEmail(state.email, state.type)
        setState({ ...state, sent: true })
    }

    const onSendReset = () => {
        if (state.password == state.repassword){
            props.resetPassword(queryString.parse(props.location.search).verify, state.password)
            setState({ ...state, sent: true })
        }
    }

    const selectType = (type) => {
        setState({ ...state, type })
    }

    return (
        <LoadingOverlay spinner active={props.loading} text='Loading please wait...'>
            <div className='bg-light pt-5'>
                <div className='container-fluid mt-5' style={{ overflowX: 'hidden' }}>
                    <div className='row'>
                        <div className='col-md d-flex justify-content-center align-items-center'>
                            {!queryString.parse(props.location.search).verify && <div className='m-auto d-flex flex-column'>
                                <h1 className='font-weight-bold'>Forgot Your Password ?</h1>
                                {!state.sent && <div>
                                    <h6>Provide your email and your account type below so we can send reset password email to you.</h6>
                                    <ul class="nav nav-pills nav-fill my-3">
                                        <li class="nav-item">
                                            <Link class={"nav-link " + (state.type == 'client' ? 'active' : '')} onClick={() => selectType('client')} to="#">Client</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class={"nav-link " + (state.type == 'creator' ? 'active' : '')} onClick={() => selectType('creator')} to="#">Creator</Link>
                                        </li>
                                    </ul>
                                    <input type="email" id="email" className="form-control my-2" placeholder="Email" onChange={onChange} value={state.email} />
                                    <button className='btn btn-main px-5 my-2' disabled={!state.email} onClick={onSendEmail}>Reset Now!</button>
                                </div>}
                                {state.sent && <div className='d-flex flex-column'>
                                    <h6>Email sent, check your gmail for reset password instruction.</h6>
                                    <Link className='btn btn-main px-5 my-2' to={ROUTES.HOME} >Go Back Home</Link>
                                    <small>Our Email hasn't been reaching you yet? <strong style={{ cursor: 'pointer' }} onClick={() => setState({ ...state, sent: false })}>
                                        Resend Email.</strong>
                                    </small>
                                </div>}
                            </div>}

                            {queryString.parse(props.location.search).verify && <div className='m-auto d-flex flex-column'>
                                <h1 className='font-weight-bold'>Reset Your Password</h1>
                                {!state.sent && <div className='d-flex flex-column'>
                                    <h6>Enter your new password below to reset <strong>{queryString.parse(props.location.search).email}</strong> password.</h6>
                                    <div className='row'>
                                        <div className='col-md'>
                                            <input type="password" id="password" className="form-control my-2" placeholder="Password" onChange={onChange} value={state.password} />
                                        </div>
                                        <div className='col-md'>
                                            <input type="password" id="repassword" className="form-control my-2" placeholder="Retype your Password" onChange={onChange} value={state.repassword} />
                                        </div>
                                    </div>
                                    {(state.password !== state.repassword) && <small className='text-danger'>Error : Password dont match!</small>}
                                    <button className='btn btn-main px-5 my-2' disabled={!state.password || !state.repassword || state.password !== state.repassword} onClick={onSendReset}>Reset Now!</button>
                                </div>}
                                {state.sent && <div className='d-flex flex-column'>
                                    <h6>Reset Password Success, to Continue Please Login.</h6>
                                    <Link className='btn btn-main px-5 my-2' to={ROUTES.HOME} >Go Back Home</Link>
                                </div>}
                            </div>}
                        </div>
                        <div className='col-md'>
                            <img src={forgotIMG} />
                        </div>
                    </div>
                </div>
            </div>
        </LoadingOverlay>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        error: state.user.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendResetPasswordEmail: (email, type) => dispatch(userAction.sendResetPasswordEmail(email, type)),
        resetPassword: (token, newPassword) => dispatch(userAction.resetPassword(token, newPassword))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ForgotPassword))