import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import contestAction from '../Modules/Redux/Actions/Contest'

const ContestList = (props) => {
    const { contests } = props
    const [state, setState] = useState({
        activeSection: 'Semua', onWork: null, done: null, paidnt: null, canceled: null
    })

    const setActiveSection = (activeSection) => {
        setState({ ...state, activeSection })
    }

    const [sections, setSections] = useState([
        { icon: 'circle', name: 'Semua', quantity: 4 },
        { icon: 'circle', name: 'Dalam Pengerjaan', quantity: 4 },
        { icon: 'circle', name: 'Selesai', quantity: 4 },
        { icon: 'circle', name: 'Belum Dibayar', quantity: 4 },
        { icon: 'circle', name: 'Dibatalkan', quantity: 4 },
    ])

    useEffect(() => {
        if (contests) {
            setState({
                ...state,
                onWork: contests.filter(item => item.status == 'Dalam Pengerjaan'),
                done: contests.filter(item => item.status == 'Selesai'),
                paidnt: contests.filter(item => item.status == 'Belum Dibayar'),
                canceled: contests.filter(item => item.status == 'Dibatalkan'),
            })
        }
    }, [contests])

    useEffect(() => {
        setSections([
            { icon: 'circle', name: 'Semua', quantity: contests?.length },
            { icon: 'circle', name: 'Dalam Pengerjaan', quantity: state.onWork?.length },
            { icon: 'circle', name: 'Selesai', quantity: state.done?.length },
            { icon: 'circle', name: 'Belum Dibayar', quantity: state.paidnt?.length },
            { icon: 'circle', name: 'Dibatalkan', quantity: state.canceled?.length },
        ])
    }, [state])

    useEffect(() => {
        props.getContestByClient()
    }, [])

    return (
        <LoadingOverlay active={props.loading} spinner text="Loading please wait...">

            <div className='bg-main text-white'>
                <div className='container py-5'>
                    <h2 className='mt-5 mb-0'>List</h2>
                    <h1>Contest</h1>
                </div>
            </div>

            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        {sections.map(item => (
                            <div className={'p-4 d-flex align-items-center rounded-lg profile-btn' + (state.activeSection == item.name ? '-active' : '')}
                                onClick={() => setActiveSection(item.name)}>
                                <i className={'text-main fa my-auto fa-' + item.icon} style={{ fontSize: '30px' }} />
                                <h5 className='my-auto ml-3'>{item.name} ({item.quantity})</h5>
                            </div>
                        ))}
                    </div>
                    {state.activeSection == 'Semua' && <div className='col-md'>
                        {
                            contests?.map(item => (
                                <Link className='py-4 px-4 bg-light rounded-lg m-2 border-main text-decoration-none row' to={`/contest/dashboard/${item._id}`}>
                                    <div className='col-md-auto my-auto'>
                                        <div className='rounded-circle bg-main mr-4 my-auto' style={{ width: 60, height: 60 }} />
                                    </div>
                                    <div className='col-md d-flex flex-column'>
                                        <h4 className='text-secondary my-auto'>{item.name}</h4>
                                        <h6 className='text-wrap text-secondary'>by {item.user.name}</h6>
                                    </div>
                                    <div className='col-md-auto my-auto'>
                                        <button className='btn btn-category rounded-lg px-5'>
                                            Selengkapnya
                                        </button>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>}
                    {state.activeSection != 'Semua' && <div className='col-md'>
                        {
                            contests?.filter(item => item.status == state.activeSection).map(item => (
                                <Link className='py-4 px-4 bg-light rounded-lg m-2 border-main text-decoration-none row' to={`/contest/dashboard/${item._id}`}>
                                    <div className='col-md-auto my-auto'>
                                        <div className='rounded-circle bg-main mr-4 my-auto' style={{ width: 60, height: 60 }} />
                                    </div>
                                    <div className='col-md d-flex flex-column'>
                                        <h4 className='text-secondary my-auto'>{item.name}</h4>
                                        <h6 className='text-wrap text-secondary'>by {item.user.name}</h6>
                                    </div>
                                    <div className='col-md-auto my-auto'>
                                        <button className='btn btn-category rounded-lg px-5'>
                                            Selengkapnya
                                        </button>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>}
                </div>
            </div>

        </LoadingOverlay>
    )
}

const mapStateToProps = state => {
    return {
        contests: state.contest.contests,
        loading: state.contest.loading,
        error: state.contest.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getContestByClient: () => dispatch(contestAction.getContestByClient()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContestList))