import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import userAction from '../Modules/Redux/Actions/User'
import utilsAction from '../Modules/Redux/Actions/Utils'

const SignUp = props => {
    const { loading, handleModal } = props
    const [state, setState] = useState({
        type: 'client',
        email: null,
        password: null,
        name: null
    })

    const onChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value.toString() })
    }

    const selectType = (type) => {
        setState({ ...state, type })
    }

    const onSubmit = async () => {
        if (state.type == 'client') {
            await props.clientRegister(state, props.history)
        } else {
            await props.creatorRegister(state, props.history)
        }
        props.toggleSignUpModal()
        props.toggleSignInModal()
    }

    return (
        <div className='row mx-auto w-100'>
            <div className='col-md'>
                <img src={require('../Modules/images/waving.png')} width='100%' style={{ marginBottom: '-200px' }} />
                <div className='d-flex justify-content-center'>
                    <img src={require('../Modules/images/logo.png')} width='200px' />
                </div>
                <div className='d-flex justify-content-center my-3'>
                    <h6 className='text-center font-weight-bold' style={{ maxWidth: '450px' }}>An Integrated Creative Marketplace that allows Creative Talents to Connect with Clients, Projects, and Learning Ecosystem to Upgrade Their Skills.</h6>
                </div>
            </div>
            <div className='col-md d-flex'>
                <div className='m-auto'>
                    <h1 className='text-main'>Are you new to Create It?!</h1>
                    <h6>Fill form below with your valid information to continue.</h6>
                    <ul class="nav nav-pills nav-fill my-3">
                        <li class="nav-item">
                            <Link class={"nav-link " + (state.type == 'client' ? 'active' : '')} onClick={() => selectType('client')} to="#">Sign Up as Client</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={"nav-link " + (state.type == 'creator' ? 'active' : '')} onClick={() => selectType('creator')} to="#">Sign Up as Creator</Link>
                        </li>
                    </ul>
                    <div className='mt-3'>
                        <label class="sr-only" for="inlineFormInputGroup">Name</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-main"><i className='fa fa-id-card text-white' /></div>
                            </div>
                            <input type="text" class="form-control" id="name" value={state.name} onChange={onChange} placeholder="Your Name" />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label class="sr-only" for="inlineFormInputGroup">Email</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-main"><i className='fa fa-envelope text-white' /></div>
                            </div>
                            <input type="email" class="form-control" id="email" value={state.email} onChange={onChange} placeholder="Email" />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label class="sr-only" for="inlineFormInputGroup">Password</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-main"><i className='fa fa-key text-white' /></div>
                            </div>
                            <input type="password" class="form-control" id="password" value={state.password} onChange={onChange} placeholder="Password" />
                        </div>
                    </div>
                    <div className='d-flex mt-3'>
                        <Link className='ml-auto text-main'>Forgot Your Password?</Link>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md d-flex'>
                            <button className='btn-primary btn-block btn m-auto px-4 py-3 d-flex align-items-center justify-content-center' disabled={!state.email || !state.password || !state.name}
                                onClick={onSubmit}>
                                {loading && <div class="spinner-border text-light mr-2" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>}
                                Daftar</button>
                        </div>
                        <div className='col-md d-flex' data-dismiss='modal'>
                            <Link className='btn- btn m-auto px-4 py-3 text-secondary' onClick={() => {
                                props.toggleSignUpModal()
                                props.toggleSignInModal()
                            }}>Sudah punya akun ? <strong>Masuk</strong></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        clientRegister: (userData, history) => dispatch(userAction.clientRegister(userData, history)),
        creatorRegister: (userData, history) => dispatch(userAction.creatorRegister(userData, history)),
        toggleSignInModal: () => dispatch(utilsAction.toggleSignInModal()),
        toggleSignUpModal: () => dispatch(utilsAction.toggleSignUpModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp))