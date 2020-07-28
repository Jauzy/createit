import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import projectAction from '../../Modules/Redux/Actions/Project'
import ReactTimeAgo from 'react-time-ago'

const Chatroom = props => {
    const { project } = props
    const { projectID } = props.match.params
    const [state, setState] = useState({
        newMSG: ''
    })
    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const onSubmit = () => {
        props.pushComment(state.newMSG, projectID)
        setState({ ...state, newMSG: '' })
    }

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
                    {project?.approvedDesigner.map(item => (
                        <div className='d-flex m-2'>
                            <img width='50' height='50' className='rounded-circle mr-2' src={item.profile_pict} />
                            <div className='my-auto'>
                                <h6 className='font-weight-bold mb-0'>{item.name}</h6>
                                <small className=''>Designer</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-light'>
                <div className='container py-5'>
                    <div style={{ height: '500px', overflowY: 'scroll' }}>
                        {project?.comment?.map(item => (
                            <div className='my-4 bg-white'>
                                <div className='pl-3 py-3 shadow rounded-right' style={{ borderLeft: '5px solid #2375C6' }}>
                                    <div className='d-flex'>
                                        <h6 className='my-auto font-weight-bold'>{item.user_name}</h6>
                                        <small className='my-auto text-secondary ml-2'>@{item.owner ? 'Owner' : 'Designer'} <ReactTimeAgo date={item.date} /></small>
                                    </div>
                                    <small className='w-100'>{item.text}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='d-flex mt-3'>
                        <textarea class="form-control mt-2 my-auto" value={state.newMSG} id='newMSG' onChange={onChange} placeholder='Tuliskan komentar...' rows="2"></textarea>
                        <div className='my-auto btn btn-outline-main ml-3' onClick={onSubmit}>
                            <i className='fa fa-paper-plane' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        project: state.project.project,
        loading: state.project.loading,
        error: state.project.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pushComment: (text, projectID) => dispatch(projectAction.pushComment(text, projectID)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Chatroom))