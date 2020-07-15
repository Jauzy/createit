import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import userAction from '../Modules/Redux/Actions/User'

const SignIn = props => {
    const { loading, handleModal } = props
    const [state, setState] = useState({
        type: 'client',
        email: null,
        password: null
    })

    const onChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value.toString() })
    }

    const selectType = (type) => {
        setState({ ...state, type })
    }

    const onSubmit = async () => {
        await props.login(state, props.history)
        if (handleModal) handleModal()
    }

    return (
        <div className='row m-auto'>
            <div className='col-md'>
                <img src={require('../Modules/images/running.png')} width='100%' />
            </div>
            <div className='col-md d-flex'>
                <div className='m-auto'>
                    <h1 className='text-main'>You Are Almost There!</h1>
                    <h6>Please login with your valid credentials.</h6>
                    <ul class="nav nav-pills nav-fill my-3">
                        <li class="nav-item">
                            <Link class={"nav-link " + (state.type == 'client' ? 'active' : '')} onClick={() => selectType('client')} to="#">Login as Client</Link>
                        </li>
                        <li class="nav-item">
                            <Link class={"nav-link " + (state.type == 'creator' ? 'active' : '')} onClick={() => selectType('creator')} to="#">Login as Creator</Link>
                        </li>
                    </ul>
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
                    <div className='row mt-4 m-auto'>
                        <div className='col-md d-flex'>
                            <button className='btn-main btn-block btn m-auto px-4 py-3 d-flex align-items-center justify-content-center' disabled={!state.email || !state.password}
                                onClick={onSubmit}>
                                {loading && <div class="spinner-border text-light mr-2" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>}
                                Masuk</button>
                        </div>
                        <div className='col-md d-flex' data-dismiss='modal'>
                            <Link className='btn-light btn m-auto py-3 text-secondary' to='/register' onClick={
                                () => {
                                    if (handleModal) handleModal()
                                }
                            }>Belum punya akun ? <strong>Daftar</strong></Link>
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
        login: (userData, history) => dispatch(userAction.login(userData, history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))