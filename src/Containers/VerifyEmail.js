import React, { useState } from 'react'
import * as queryString from "query-string";
import { connect } from 'react-redux'
import userAction from '../Modules/Redux/Actions/User'
import LoadingOverlay from 'react-loading-overlay'
import { withRouter } from 'react-router-dom'

const mailImg = require('../Modules/images/mail_sent.svg')

const VerifyEmail = props => {
    const [state, setState] = useState({
        sent: false
    })

    const onVerify = () => {
        props.verifyEmail(queryString.parse(props.location.search).verify)
        setState({ sent: true })
    }

    return (
        <LoadingOverlay spinner active={props.loading} text='Loading please wait...'>
            <div className='bg-light pt-5'>
                <div className='container-fluid mt-5' style={{ overflowX: 'hidden' }}>
                    <div className='row'>
                        <div className='col-md d-flex justify-content-center align-items-center'>
                            {!state.sent && <div>
                                <h2 className='font-weight-bold text-center'>Verify Email</h2>
                                <h1 className='text-center'>{queryString.parse(props.location.search).email || 'No Email Found!'}</h1>
                                <button className='btn btn-main px-5 my-2 btn-block' disabled={!queryString.parse(props.location.search).verify}
                                    onClick={onVerify}>Verify Now!</button>
                                <small>*Note: If this is not your email or if you didn't do this, you can ignore this and proceed.</small>
                            </div>}
                            {state.sent && <div>
                                <h2 className='font-weight-bold text-center'>Email Verified!</h2>
                                <button className='btn btn-main px-5 my-2 btn-block'
                                    onClick={() => {
                                        props.history.push('/home')
                                    }}>Go Back to Home!</button>
                            </div>}
                        </div>
                        <div className='col-md'>
                            <img src={mailImg} />
                        </div>
                    </div>
                </div>
                <div className='shape-wave-bottom'></div>
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
        verifyEmail: (token) => dispatch(userAction.verifyEmail(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VerifyEmail))