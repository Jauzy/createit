import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import projectAction from '../../Modules/Redux/Actions/Project'
import utilsAction from '../../Modules/Redux/Actions/Utils'
import socketIOClient from 'socket.io-client'
import projectPayment from '../../Modules/Redux/Actions/ProjectPayment'
import Select from 'react-select'

const ROUTES = require('../../Constants/Routes')
const Chatroom = props => {
    const { project, designer, socket, user, payments } = props
    const { projectID } = props.match.params
    const [state, setState] = useState({
        newMSG: '', messages: [], messages_init: []
    })

    const [userPaymentData, setUserPayment] = useState({
        receiver_bank: '', receiver_account_no: '', amount: 0
    })

    const ref = useRef(null)

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const onChangeUserPayment = e => {
        setUserPayment({ ...userPaymentData, [e.target.id]: e.target.value })
    }

    const onSubmit = () => {
        if (socket && state.newMSG.length > 0) {
            socket.emit('chatMessage', ({ uid: user._id, utype: user.type, room: `${projectID}-${designer._id}`, msg: state.newMSG }))
        }
        setState({ ...state, newMSG: '' })
    }

    const onIssue = () => {
        props.creatorUpdate(projectID, userPaymentData, `${projectID}-${designer._id}`)
    }

    useEffect(() => {
        if (socket) {
            socket.emit('joinRoom', ({ uid: user._id, utype: user.type, room: `${projectID}-${designer._id}` }))
            socket.on('recoverMessage', messages => {
                setState({ ...state, messages })
            })
            socket.on('message', data => {
                // let newmessages = messages
                // newmessages.push(data)
                // setState({ ...state, messages: newmessages })
                console.log(data)
                const item = data
                const div = document.createElement('div')
                div.classList.add('my-3')
                div.classList.add('bg-white')
                div.innerHTML = `
                <div class='pl-3 py-3 shadow-sm rounded-right' style="border-left:5px solid #2375C6">
                    <div class='d-flex align-items-center'>
                        <div class=''>
                            <img src='${item.client ? item.client.profile_pict : item.creator.profile_pict}' width='50px' height='50px' class='rounded-circle border' />
                        </div>
                        <div class='ml-3'>
                            <div class='d-flex'>
                                <h6 class='my-auto font-weight-bold'>${item.client ? item.client.name : item.creator.name}</h6>
                                <small class='my-auto text-secondary ml-2'>@${item.client ? 'Owner' : 'Designer'} ${item.time}</small>
                            </div>
                            <small class='w-100'>${item.text}</small>
                        </div>
                    </div>
                </div>
                `
                document.querySelector('.chatbox').appendChild(div)
                if (ref)
                    ref.current.scrollTop = ref.current.scrollHeight
            })
        }
    }, [socket])

    useEffect(() => {
        const socket = socketIOClient(ROUTES.ENDPOINTS)
        props.setupSocket(socket)
        props.getPayments(projectID)
    }, [])

    useEffect(() => {
        if (payments) {
            setUserPayment({ ...payments.filter(item => item.for._id == designer._id)[0] })
        }
    }, [payments])

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight
    }, [state.messages])

    return (
        <div>
            <div className='container py-4'>
                <h4>Participants</h4>
                <div className='d-flex flex-wrap'>
                    <div className='d-flex m-2'>
                        <img width='50' height='50' className='rounded-circle mr-2' src={project?.user.profile_pict} />
                        <div className='my-auto'>
                            <h6 className='font-weight-bold mb-0'>{project?.user.name}</h6>
                            <small className=''>Owner</small>
                        </div>
                    </div>
                    <div className='d-flex m-2'>
                        <img width='50' height='50' className='rounded-circle mr-2' src={designer?.profile_pict} />
                        <div className='my-auto'>
                            <h6 className='font-weight-bold mb-0'>{designer?.name}</h6>
                            <small className=''>Designer</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='d-flex align-items-center'>
                        <small>*this chatroom only shows 20 latest chats</small>
                        {user?.type === 'creator' && <button className='btn btn-primary ml-auto' data-toggle='modal' data-target='#paymentModal'>Issue Payment</button>}
                    </div>
                    <div style={{ height: '500px', overflowY: 'scroll' }} ref={ref} className='chatbox'>
                        {state?.messages?.map(item => (
                            <Message item={item} designer={designer} user={user} projectID={projectID} history={props.history} />
                        ))}
                    </div>
                    <div className='d-flex mt-3'>
                        <textarea class="form-control mt-2 my-auto" value={state.newMSG} id='newMSG' onChange={onChange} placeholder='Tuliskan komentar...' rows="2"></textarea>
                        <div className='my-auto btn btn-outline-main ml-3' onClick={onSubmit}>
                            <i className='fa fa-paper-plane' />
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="paymentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Payments</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <label>Bank</label>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={{ value: null, label: 'Pilih bank' }}
                                    name="bank"
                                    onChange={(item) => setUserPayment({ ...userPaymentData, receiver_bank: item.value })}
                                    value={{ value: userPaymentData.receiver_bank, label: userPaymentData.receiver_bank }}
                                    options={['Mandiri Virtual Account', 'BCA Virtual Account', 'Jenius Virtual Account'].map(item => ({ value: item, label: item }))}
                                />
                                <div class="form-group mt-3">
                                    <label>Account No</label>
                                    <input type="text" class="form-control" id="receiver_account_no" onChange={onChangeUserPayment} value={userPaymentData.receiver_account_no} placeholder="Enter your account number" />
                                    <small class="form-text text-muted">We'll Never Share your private information.</small>
                                </div>
                                <div class="form-group mt-3">
                                    <label>Amount</label>
                                    <input type="number" class="form-control" id="amount" onChange={onChangeUserPayment} value={userPaymentData.amount} placeholder="Enter amount of payment" />
                                </div>
                                {userPaymentData.status && <button class='btn btn-primary mr-2'>Status: {userPaymentData.status}</button>}
                                {(userPaymentData.status != 'Belum Dibayar' && userPaymentData.status) && <small className='text-danger mt-1'>You cant update this payment again.</small>}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={onIssue} disabled={userPaymentData.status != 'Belum Dibayar' && userPaymentData.status}>Issue</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        project: state.project.project,
        loading: state.project.loading,
        error: state.project.error,
        socket: state.utils.socket,
        payments: state.projectPayment.payments,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pushComment: (text, projectID) => dispatch(projectAction.pushComment(text, projectID)),
        setupSocket: (socket) => dispatch(utilsAction.setupSocket(socket)),
        getPayments: (projectID) => dispatch(projectPayment.getPayments(projectID)),
        creatorUpdate: (projectID, payload, room) => dispatch(projectPayment.creatorUpdate(projectID, payload, room))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Chatroom))


const Message = ({ item, designer, user, history, projectID }) => (
    <div className='my-3 bg-white'>
        <div className='pl-3 py-3 shadow-sm rounded-right' style={{ borderLeft: '5px solid #2375C6' }}>
            <div className='d-flex align-items-center'>
                <div className=''>
                    <img src={item.client ? item.client.profile_pict : item.creator.profile_pict} width='50px' height='50px' className='rounded-circle border' />
                </div>
                <div className='ml-3'>
                    <div className='d-flex'>
                        <h6 className='my-auto font-weight-bold'>{item.client ? item.client.name : item.creator.name}</h6>
                        <small className='my-auto text-secondary ml-2'>@{item.client ? 'Owner' : 'Designer'} {item.time}</small>
                    </div>
                    <small className='w-100'>{item.text}</small>
                    {console.log(item.payment, projectID)}
                    {item.payment && <button className='btn btn-primary ml-2' onClick={() => {
                        history.push(`/project/dashboard/${projectID}/payment/${item.payment._id}`)
                    }} disabled={user._id == designer._id}>
                        Payment for {designer?.name}
                    </button>}
                </div>
            </div>
        </div>
    </div>
)