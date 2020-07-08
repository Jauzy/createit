import React, { useState } from 'react'
import swal from 'sweetalert'
import { withRouter } from 'react-router-dom'
import userAction from '../../Modules/Redux/Actions/User'
import { connect } from 'react-redux'

const ChangePassword = props => {
    const [state, setState] = useState({
        password: null, newPassword: null
    })

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value.toString() })
    }

    const onSubmit = () => {
        if (!state.password || state.password == '') {
            swal({
                title: "Error!",
                text: "Masukan passwordmu saat ini!",
                icon: "error",
                button: "Okay!",
            })
        } else {
            if (!state.newPassword || state.newPassword == '') {
                swal({
                    title: "Error!",
                    text: "Masukan password baru yang diinginkan!",
                    icon: "error",
                    button: "Okay!",
                })
            } else {
                props.changePassword(state.password, state.newPassword)
            }
        }
    }

    return (
        <div className='w-100'>
            <div className='my-3'>
                <h2 className='text-main'>Password Lama</h2>
                <input type="password" class="form-control text-main" style={{ background: 'unset', border: 'unset', fontSize: '40px', borderBottom: '2px solid grey' }}
                    id="password" value={state.password} onChange={onChange} />
                <small class="form-text text-muted">Masukan password anda saat ini.</small>
            </div>
            <div className='my-3'>
                <h2 className='text-main'>Password Baru</h2>
                <input type="password" class="form-control text-main" style={{ background: 'unset', border: 'unset', fontSize: '40px', borderBottom: '2px solid grey' }}
                    id="newPassword" value={state.newPassword} onChange={onChange} />
                <small class="form-text text-muted">Masukan password baru yang diinginkan.</small>
            </div>
            <button className='btn btn-main btn-block' onClick={onSubmit} data-dismiss='modal'>
                Submit
            </button>
        </div>
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
        changePassword: (password, newPassword) => dispatch(userAction.changePassword(password, newPassword))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChangePassword))