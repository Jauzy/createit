import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import projectAction from '../../Modules/Redux/Actions/Project'
import Iframe from 'react-iframe'

const BuatProject = (props) => {

    const onCreateProject = () => {
        props.createProject('Logo & Branding Kit', 'Logo', props.history)
    }

    return (
        <div className='container'>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='text-main font-weight-bold'>Lorem Ipsum Dolor Sit Amet Consectetur!</h1>
                            <h6 className='mt-3 mb-5 text-secondary'>praesent luctus ante id orci venenatis efficitur at in dui</h6>
                            <Link className='btn btn-success px-5 py-3' onClick={onCreateProject}>Mulai Project</Link>
                        </div>
                    </div>
                    <div className='col-md d-flex'>
                        <img src={require('../../Modules/images/3531361.jpg')} width='100%' className='m-auto d-none d-md-block' />
                    </div>
                </div>
            </div>
            <hr></hr>
            <Iframe url="/project"
                width="100%"
                height="750px"
                display="initial"
                position="relative"/>
            <hr></hr>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md d-flex'>
                        <img src={require('../../Modules/images/2672291.png')} width='75%' className='m-auto d-none d-md-block' />
                    </div>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='text-main font-weight-bold'>Lorem Ipsum Dolor Sit Amet Consectetur!</h1>
                            <h6 className='mt-3 mb-5 text-secondary'>praesent luctus ante id orci venenatis efficitur at in dui</h6>
                            <Link className='btn btn-success px-5 py-3' onClick={onCreateProject}>Mulai Project</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (category, subCategory, history) => dispatch(projectAction.createProject(category, subCategory, history)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuatProject))