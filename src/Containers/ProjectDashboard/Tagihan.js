import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import projectPayment from '../../Modules/Redux/Actions/ProjectPayment'

const Tagihan = props => {
    const { payments, user, project } = props
    const { projectID } = props.match.params
    const [state, setState] = useState({
        activeSection: 'Semua',
        full_list: [],
        list: []
    })

    const setActiveSection = (activeSection) => {
        setState({ ...state, activeSection })
    }

    const [sections, setSections] = useState([
        { icon: 'circle', name: 'Semua', quantity: 0 },
        { icon: 'circle', name: 'Menunggu Konfirmasi', quantity: 0 },
        { icon: 'circle', name: 'Selesai', quantity: 0 },
        { icon: 'circle', name: 'Belum Dibayar', quantity: 0 },
        { icon: 'circle', name: 'Dibatalkan', quantity: 0 },
    ])

    useEffect(() => {
        props.getPayments(projectID)
    }, [])

    useEffect(() => {
        if (payments) {
            setState({ ...state, list: payments, full_list: payments })
            setSections([
                { icon: 'circle', name: 'Semua', quantity: payments.length },
                { icon: 'circle', name: 'Menunggu Konfirmasi', quantity: payments.filter(item => item.status == 'Menunggu Konfirmasi').length },
                { icon: 'circle', name: 'Selesai', quantity: payments.filter(item => item.status == 'Selesai').length },
                { icon: 'circle', name: 'Belum Dibayar', quantity: payments.filter(item => item.status == 'Belum Dibayar').length },
                { icon: 'circle', name: 'Dibatalkan', quantity: payments.filter(item => item.status == 'Dibatalkan').length },
            ])
        }
    }, [payments])

    useEffect(() => {
        if (state.activeSection != 'Semua') {
            setState({
                ...state,
                list: state.full_list?.filter(item => item.status == state.activeSection)
            })
        } else {
            setState({
                ...state,
                list: state.full_list
            })
        }
    }, [state.activeSection])

    return (
        <div>

            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        {sections?.map(item => (
                            <div className={'p-4 d-flex align-items-center rounded-lg profile-btn' + (state.activeSection == item.name ? '-active' : '')}
                                onClick={() => setActiveSection(item.name)}>
                                <i className={'text-main fa my-auto fa-' + item.icon} style={{ fontSize: '30px' }} />
                                <h5 className='my-auto ml-3'>{item.name} ({item.quantity})</h5>
                            </div>
                        ))}
                    </div>
                    <div className='col-md'>
                        {state?.list?.map(item => (
                            <div>
                                <div className='row d-flex'>
                                    <div className='col-md my-auto'>
                                        <div className='d-flex flex-wrap'>
                                            <h3>Tagihan Designer <NumberFormat value={item.amount} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h3>
                                            <button className={`btn btn-outline-${item.status == 'Selesai' ? 'success' : 'danger'} mb-auto ml-3`} style={{ cursor: 'unset' }}>{item.status}</button>
                                        </div>
                                        <h6 className='text-secondary'>Created By {item.for.name} at {new Date(item.created_at).toLocaleDateString()}</h6>
                                    </div>
                                    <div className='col-md-auto my-auto'>
                                        {user?._id == project?.user._id && < Link className='btn btn-outline-main' to={`/project/dashboard/${projectID}/payment/${item._id}`}>Tinjau</Link>}
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                        {state?.list?.length < 1 && <div>
                            <h2>Belum ada Tagihan</h2>
                        </div>}
                    </div>
                </div>
            </div>

        </div >
    )
}

const mapStateToProps = state => {
    return {
        payments: state.projectPayment.payments,
        user: state.user.user,
        project: state.project.project,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPayments: (projectID) => dispatch(projectPayment.getPayments(projectID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Tagihan))