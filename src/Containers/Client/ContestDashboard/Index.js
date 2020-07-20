import React, { useState, useEffect } from 'react'
import Brief from './Brief'
import Design from './Design'
import NumberFormat from 'react-number-format'
import Countdown from 'react-countdown';
import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import contestAction from '../../../Modules/Redux/Actions/Contest'

const Completionist = () => <span><h1 className='text-white'>Contest Timeout!</h1></span>;

const ContestDashboard = props => {
    const { user, contest } = props
    const { contestID } = props.match.params
    const [state, setState] = useState({
        activeSection: 'Brief', dateDiffInMillis: 0
    })

    const sections = ['Brief', 'Design']

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (contest?.start_date) {
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
                <span><h1 className='text-white'>Contest Not Yet Started!</h1></span>
            )
        }
    };

    useEffect(() => {
        if(contest && contest.start_date){
            const start_date = new Date(contest.start_date)
            setState({...state, dateDiffInMillis: start_date.setDate(start_date.getDate() + contest.duration).getTime() - new Date().getTime()})
        }
    },[contest])

    useEffect(() => {
        props.getContestById(contestID, props.history)
    }, [])

    return (
        <LoadingOverlay active={props.loading} spinner text='Loading please wait...'>

            <div className='pt-5 bg-main text-white'>
                <div className='container py-5'>
                    <div className='d-flex flex-wrap'>
                        <div className='mr-auto my-auto'>
                            <h1>{contest?.name}</h1>
                            <h6>oleh {user?.name} | <NumberFormat value={contest?.price} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h6>
                        </div>
                        <div className='ml-auto my-auto'>
                            {contest?.status == 'Dibatalkan' ? 
                            <h1 className='text-white'>Contest Dibatalkan</h1>
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
                        {sections.map(item => (
                            <li class="nav-item" onClick={() => setState({ ...state, activeSection: item })}>
                                <span class={"nav-link " + (state.activeSection == item ? 'active' : '')}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {state.activeSection == 'Brief' ? <Brief contest={contest} contestID={contestID} /> : <Design />}

        </LoadingOverlay>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        contest: state.contest.contest,
        loading: state.contest.loading,
        error: state.contest.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getContestById: (contestID, history) => dispatch(contestAction.getContestById(contestID, history)),
        updateContest: (contestID, payload) => dispatch(contestAction.updateContest(contestID, payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContestDashboard))