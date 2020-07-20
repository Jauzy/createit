import React, { useEffect, useState } from 'react'
import BriefSec from './BriefReview'
import PricingSec from './PricingReview'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import contestAction from '../../../Modules/Redux/Actions/Contest'
import swal from 'sweetalert'

const Brief = props => {
    const { contest, contestID } = props
    const [state, setState] = useState({
        activeSection: 'Brief Review'
    })

    const setActiveSection = (activeSection) => {
        setState({ ...state, activeSection })
    }

    const sections1 = [
        { icon: 'info-circle', name: 'Brief Review' },
        { icon: 'money-check-alt', name: 'Pricing Review' },
    ]

    const sections2 = [
        { icon: 'cog', name: 'Edit Brief', link: `/brief/contest/${contestID}` },
        { icon: 'cog', name: 'Edit Pricing', link: `/pricing/${contestID}` },
        { icon: 'file-invoice-dollar', name: 'Payment', link: `/payment/${contestID}` },
    ]

    const sections3 = [
        {
            icon: 'power-off', name: 'Batalkan Kontes', onClick: () => {
                swal({
                    title: "Are you sure?",
                    text: "Once canceled, you will not be able to recover this contest!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            props.cancelContest(contestID)
                        }
                    });
            }
        },
    ]

    return (
        <div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        {sections1.map(item => (
                            <div className={'p-4 d-flex align-items-center rounded-lg profile-btn' + (state.activeSection == item.name ? '-active' : '')}
                                onClick={() => setActiveSection(item.name)}>
                                <i className={'text-main fa my-auto fa-' + item.icon} style={{ fontSize: '30px' }} />
                                <h5 className='my-auto ml-3'>{item.name}</h5>
                            </div>
                        ))}
                        {sections2.map(item => (
                            <Link className={'p-4 d-flex align-items-center rounded-lg profile-btn text-decoration-none ' + (state.activeSection == item.name ? '-active ' : '')}
                                to={contest?.status == 'Dibatalkan' ? '#' : item.link}
                                onClick={() => contest?.status == 'Dibatalkan' ? null : setActiveSection(item.name)}>
                                <i className={`text-${contest?.status == 'Dibatalkan' ? 'danger' : 'main'} fa my-auto fa-${item.icon}`} style={{ fontSize: '30px' }} />
                                <h5 className='my-auto ml-3'>{item.name}</h5>
                            </Link>
                        ))}
                        {sections3.map(item => (
                            <Link className={'p-4 d-flex align-items-center rounded-lg profile-btn text-decoration-none ' + (state.activeSection == item.name ? '-active ' : '')}
                                to={'#'}
                                onClick={item.onClick}>
                                <i className={`text-${contest?.status == 'Dibatalkan' ? 'danger' : 'main'} fa my-auto fa-${item.icon}`} style={{ fontSize: '30px' }} />
                                <h5 className='my-auto ml-3'>{item.name}</h5>
                            </Link>
                        ))}
                    </div>
                    <div className='col-md'>
                        {state.activeSection == 'Brief Review' && <BriefSec contest={contest} />}
                        {state.activeSection == 'Pricing Review' && <PricingSec contest={contest} />}
                    </div>
                </div>
            </div>
        </div>
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
        cancelContest: (contestID) => dispatch(contestAction.cancelContest(contestID)),
        getContestById: (contestID, history) => dispatch(contestAction.getContestById(contestID, history)),
        updateContest: (contestID, payload) => dispatch(contestAction.updateContest(contestID, payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Brief))