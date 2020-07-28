import React from 'react'
import projectAction from '../../Modules/Redux/Actions/Project'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

const DesignerApproval = props => {
    const { project, approveDesigner, projectID } = props
    return (
        <div className='container my-5 py-3'>
            <h2>Designer Approval</h2>
            <small className='text-secondary'>*Note: You Can Only Have Max 5 Designer Working On Your Project!</small>
            <div className='my-4'>
                {project?.designer.map(item => (
                    <Link className='text-decoration-none text-dark' to={`/creator/${item._id}`}>
                        <div className='row contest-card rounded-lg shadow'>
                            <div className='col-md-auto py-3'>
                                <img width='100%' className='rounded-lg bg-light' src={item.profile_pict} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                            </div>
                            <div className='col-md d-flex'>
                                <div className='my-auto'>
                                    <h3 className='text-secondary mb-3'>{item?.name}</h3>
                                    <div style={{ maxWidth: '300px' }}>
                                        <Link to='#'>
                                            {project?.approvedDesigner?.findIndex(user => user._id == item._id) == -1 ?
                                                <button className='btn btn-primary btn-block py-2 px-5' onClick={() =>
                                                    approveDesigner(projectID, item._id)
                                                }>Approve</button>
                                                :
                                                <button className={`btn btn-success btn-block py-2 px-5`} disabled>Approved</button>
                                            }
                                        </Link>
                                        <small>*Note: Once <strong>Approved</strong>, you can't cancel this action!</small>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md d-flex text-secondary'>
                                <div className='m-auto'>
                                    <div className=''>
                                        E-mail
                                <h5 className='my-auto'>{item?.email || 'Belum ditentukan'}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </Link>
                ))}
            </div>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        project: state.project.project,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        approveDesigner: (projectID, userID) => dispatch(projectAction.approveDesigner(projectID, userID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DesignerApproval))