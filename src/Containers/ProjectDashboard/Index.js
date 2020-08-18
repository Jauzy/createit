import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown';
import Brief from './Brief'
import Chatroom from './Chatroom'
import File from './File'
import Tagihan from './Tagihan'
import Cookies from 'universal-cookie'
import DesignerApproval from './DesignerApproval'

import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import projectAction from '../../Modules/Redux/Actions/Project'

const cookies = new Cookies()
const Completionist = () => <span><h1 className='text-white'>Project Timeout!</h1></span>;

const ProjectDashboard = props => {
    const { project, user } = props
    const { projectID } = props.match.params
    const [state, setState] = useState({
        activeSection: 'Brief', dateDiffInMillis: 0
    })

    const sections = ['Chatroom', 'File', 'Tagihan']

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (project?.start_date) {
            if (completed) {
                // Render a completed state
                return <Completionist />;
            } else {
                // Render a countdown
                return (
                    <span>
                        <h1 className='text-right text-white'>
                            {days} : {hours} : {minutes} : {seconds}
                        </h1>
                        <h6 className='text-right'>{days} Days Remaining</h6>
                    </span>
                )
            }
        } else {
            return (
                <span><h1 className='text-white'>Project Not Yet Started!</h1></span>
            )
        }
    };

    const checkPermission = () => {
        if (!cookies.get('user')) return false
        else {
            let index = project?.approvedDesigner?.findIndex(item => item._id == cookies.get('user')._id)
            return index != -1 || cookies.get('user')?._id == project?.user._id
        }
    }

    useEffect(() => {
        if (project && project.start_date) {
            const start_date = new Date(project.start_date)
            setState({ ...state, dateDiffInMillis: start_date.setDate(start_date.getDate() + project.duration).getTime() - new Date().getTime() })
        }
    }, [project])

    useEffect(() => {
        props.getProjectById(projectID, props.history)
    }, [])

    return (
        <LoadingOverlay spinner text='Loading please wait...' active={props.loading}>

            <div className='pt-5 bg-main text-white'>
                <div className='container py-5'>
                    <div className='d-flex flex-wrap'>
                        <div className='mr-auto my-auto'>
                            <h1 className='mb-0'>{project?.name}</h1>
                            <h4 className=''>oleh {project?.user.name}</h4>
                            <h6>Designer : {project?.approvedDesigner.map(item => (item.name + ' | '))}</h6>
                        </div>
                        <div className='ml-auto my-auto'>
                            {project?.status == 'Dibatalkan' ?
                                <h1 className='text-white'>Project Dibatalkan</h1>
                                :
                                <Countdown
                                    date={Date.now() + state.dateDiffInMillis}
                                    renderer={renderer}
                                />}
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-main'>
                <div className='container navs'>
                    <ul class="nav">
                        <li class="nav-item" onClick={() => setState({ ...state, activeSection: 'Brief' })}>
                            <span class={"nav-link " + (state.activeSection == 'Brief' ? 'active' : '')}>Brief</span>
                        </li>
                        {sections.map(item => (
                            checkPermission() && <li class="nav-item" onClick={() => setState({ ...state, activeSection: item })}>
                                <span class={"nav-link " + (state.activeSection == item ? 'active' : '')}>{item}</span>
                            </li>
                        ))}
                        {cookies.get('user')?._id == project?.user._id && <li class="nav-item" onClick={() => setState({ ...state, activeSection: 'Designer Approval' })}>
                            <span class={"nav-link " + (state.activeSection == 'Designer Approval' ? 'active' : '')}>Designer Approval</span>
                        </li>}
                    </ul>
                </div>
            </div>

            {state.activeSection == 'Brief' && <Brief project={project} />}
            {state.activeSection == 'Chatroom' && <Chatroom />}
            {state.activeSection == 'File' && <File project={project} />}
            {state.activeSection == 'Tagihan' && <Tagihan />}
            {state.activeSection == 'Designer Approval' && <DesignerApproval projectID={projectID} />}

        </LoadingOverlay>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        project: state.project.project,
        loading: state.project.loading,
        error: state.project.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProjectById: (projectID, history) => dispatch(projectAction.getProjectById(projectID, history)),
        updateProject: (projectID, payload) => dispatch(projectAction.updateProject(projectID, payload)),
        uploadReference: (projectID, payload) => dispatch(projectAction.uploadReference(projectID, payload)),
        approveDesigner: (projectID, userID) => dispatch(projectAction.approveDesigner(projectID, userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProjectDashboard))