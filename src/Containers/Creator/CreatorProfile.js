import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie'
import swal from 'sweetalert'
import userAction from '../../Modules/Redux/Actions/User'
import { connect } from 'react-redux'
import LoadingOverlay from 'react-loading-overlay'
import {ChangePassword, EditAvatar} from '../../Components/Index'

const cookies = new Cookies()

const defaultState = {
    name: null,
    phone_no: null,
    address: null,
    profile_pict: null,
    isEditModeOn: false
}

const CreatorProfile = props => {
    const { loading, user } = props

    const [state, setState] = useState({
        name: null,
        phone_no: null,
        address: null,
        profile_pict: null,
        isEditModeOn: false,
        verified: false
    })

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value.toString() })
    }

    const onUndo = async () => {
        setState({ isEditModeOn: false, ...user })
    }

    const editSaveToggle = async () => {
        if (state.isEditModeOn) {
            if (state.name == '') {
                swal({
                    title: "Error!",
                    text: "Nama Lengkap tidak boleh kosong!",
                    icon: "error",
                    button: "Okay!",
                })
            } else {
                props.userUpdate(state)
                setState({ ...state, isEditModeOn: !state.isEditModeOn })
            }
        } else
            setState({ ...state, isEditModeOn: !state.isEditModeOn })
    }

    useEffect(() => {
        setState({
            ...state, ...user
        })
    }, [user])

    useEffect(() => {
        props.getUserData()
    }, [])

    return (
        <LoadingOverlay
            active={loading}
            spinner
            text='Loading your content...'
        >
            <div>
                <h2 className='px-5'>Profil</h2>
                <div className='row px-5'>
                    <div className='col-md-auto d-flex'>
                        <img src={props.user?.profile_pict} width="150" height="150" class="my-auto border rounded-circle" />
                    </div>
                    <div className='col-md d-flex'>
                        <div className='my-auto px-2'>
                            <h6 className='text-secondary my-3'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </h6>
                            <div className='btn btn-main px-5' data-toggle='modal' data-target='#editAvatar'>
                                Edit Avatar
                        </div>
                        </div>
                    </div>
                </div>
                <hr className='mt-4 mb-5 px-5' style={{ border: '1px solid grey' }} />
                <div className='d-flex px-4'>
                    <h2 className='my-auto'>Tentang Anda</h2>
                    <i className={'ml-5 fa text-main my-auto fa-' + (state.isEditModeOn ? 'save' : 'pen')} style={{ fontSize: '40px', cursor: 'pointer' }}
                        onClick={editSaveToggle}
                    />
                    {state.isEditModeOn && <i className={'ml-4 fa text-main my-auto fa-undo'} style={{ fontSize: '40px', cursor: 'pointer' }}
                        onClick={onUndo}
                    />}
                </div>
                <table className='text-dark mt-4' style={{ width: '100%' }}>
                    <tr>
                        <td className='py-2 px-4'><h6 className='font-weight-bold'>Nama Lengkap</h6></td>
                        <td className='py-2 px-4'>
                            {state.isEditModeOn ?
                                <input type="text" class="form-control" value={state.name} id='name' onChange={onChange}
                                    style={{ maxWidth: 'auto', border: 'unset', borderBottom: '1px solid grey' }} />
                                :
                                <h6 className='text-secondary'>{(state.name && state.name != '') ? state.name : 'Edit untuk menambahkan.'}</h6>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2 px-4'><h6 className='font-weight-bold'>Nomor Telepon</h6></td>
                        <td className='py-2 px-4'>
                            {state.isEditModeOn ?
                                <input type="text" class="form-control" value={state.phone_no} id='phone_no' onChange={onChange}
                                    style={{ maxWidth: 'auto', border: 'unset', borderBottom: '1px solid grey' }} />
                                :
                                <h6 className='text-secondary'>{(state.phone_no && state.phone_no != '') ? state.phone_no : 'Edit untuk menambahkan.'}</h6>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2 px-4'><h6 className='font-weight-bold'>Alamat</h6></td>
                        <td className='py-2 px-4' style={{ maxWidth: '200px' }}>
                            {state.isEditModeOn ?
                                <textarea class="form-control" value={state.address} id='address' onChange={onChange}
                                    style={{ maxWidth: 'auto', border: 'unset', borderBottom: '1px solid grey' }} />
                                :
                                <h6 className='text-secondary'>{(state.address && state.address != '') ? state.address : 'Edit untuk menambahkan.'}</h6>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2 px-4'><h6 className='font-weight-bold'>Alamat Email</h6></td>
                        <td className='py-2 px-4'>
                            {state.isEditModeOn ?
                                <input type="text" class="form-control" value={cookies.get('user').email} id='email' disabled
                                    style={{ maxWidth: 'auto', border: 'unset', borderBottom: '1px solid grey' }} />
                                :
                                <h6 className='text-secondary'>{cookies.get('user').email}</h6>
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2 px-4'>
                            <Link to='#' className='text-main' data-toggle='modal' data-target='#changePassword'>
                                <h6 className='font-weight-bold'>Atur Password</h6>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2 px-4'>
                            <Link to='#' className='text-secondary text-decoration-none'>
                                {!state.verified && <div onClick={() => {props.sendVerification()}}>
                                    <h6 className='font-weight-bold text-danger mb-1'><i className='fa fa-times mr-2' />Akunmu belum terverifikasi</h6>
                                    <small>Akunmu belum terverifikasi, segera lakukan verifikasi.</small>
                                </div>}
                                {
                                    state.verified && <div>
                                        <h6 className='font-weight-bold text-success mb-1'><i className='fa fa-check mr-2' />Akunmu sudah terverifikasi</h6>
                                        <small>Akunmu sudah terverifikasi, terimakasih atas kerjasamanya.</small>
                                    </div>
                                }
                            </Link>
                        </td>
                    </tr>
                </table>

                <div class="modal fade" id="changePassword" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                        <div class="modal-content">
                            <div class="modal-header" style={{ border: 'unset' }}>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <i className='far fa-times-circle text-main' style={{ fontSize: '40px', opacity: '1' }} />
                                </button>
                            </div>
                            <div class="modal-body">
                                <ChangePassword />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="editAvatar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-xl">
                        <div class="modal-content">
                            <div class="modal-header" style={{ border: 'unset' }}>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <i className='far fa-times-circle text-main' style={{ fontSize: '40px', opacity: '1' }} />
                                </button>
                            </div>
                            <div class="modal-body">
                                <EditAvatar />
                            </div>
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
        user: state.user.user,
        error: state.user.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserData: () => dispatch(userAction.getUserData()),
        userUpdate: (payload) => dispatch(userAction.userUpdate(payload)),
        sendVerification : () => dispatch(userAction.sendVerificationEmail())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreatorProfile))