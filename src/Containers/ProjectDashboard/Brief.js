import React, { useState } from 'react'
import NumberFormat from 'react-number-format'
import swal from 'sweetalert'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import projectAction from '../../Modules/Redux/Actions/Project'

const Brief = props => {
    const { project } = props
    const {projectID} = props.match.params
    const [state, setState] = useState({
        activeSection: 'Brief'
    })

    const setActiveSection = (activeSection) => {
        setState({ ...state, activeSection })
    }

    const sections = [
        { icon: 'info', name: 'Brief' },
    ]

    const sections2 = [
        { icon: 'cog', name: 'Edit Brief', link: `/brief/project/${projectID}` },
    ]

    const sections3 = [
        {
            icon: 'power-off', name: 'Batalkan Project', onClick: () => {
                swal({
                    title: "Are you sure?",
                    text: "Once canceled, you will not be able to recover this project!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            props.cancelProject(projectID)
                        }
                    });
            }
        },
    ]

    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-md-4'>
                    {sections.map(item => (
                        <div className={'p-4 d-flex align-items-center rounded-lg profile-btn' + (state.activeSection == item.name ? '-active' : '')}
                            onClick={() => setActiveSection(item.name)}>
                            <i className={'text-main fa my-auto fa-' + item.icon} style={{ fontSize: '30px' }} />
                            <h5 className='my-auto ml-3'>{item.name}</h5>
                        </div>
                    ))}
                    {sections2.map(item => (
                        <Link className={'p-4 d-flex align-items-center rounded-lg profile-btn text-decoration-none ' + (state.activeSection == item.name ? '-active ' : '')}
                            to={project?.status == 'Dibatalkan' ? '#' : item.link}
                            onClick={() => project?.status == 'Dibatalkan' ? null : setActiveSection(item.name)}>
                            <i className={`text-${project?.status == 'Dibatalkan' ? 'danger' : 'main'} fa my-auto fa-${item.icon}`} style={{ fontSize: '30px' }} />
                            <h5 className='my-auto ml-3'>{item.name}</h5>
                        </Link>
                    ))}
                    {sections3.map(item => (
                        <Link className={'p-4 d-flex align-items-center rounded-lg profile-btn text-decoration-none ' + (state.activeSection == item.name ? '-active ' : '')}
                            to={'#'}
                            onClick={item.onClick}>
                            <i className={`text-${project?.status == 'Dibatalkan' ? 'danger' : 'main'} fa my-auto fa-${item.icon}`} style={{ fontSize: '30px' }} />
                            <h5 className='my-auto ml-3'>{item.name}</h5>
                        </Link>
                    ))}
                </div>
                <div className='col-md'>
                    <div>
                        <div className='p-4'>
                            <div className='mt-2'>
                                <h2 className='font-weight-bold text-dark'>Nama Projek</h2>
                                <h6 className='text-secondary font-weight-bold'>{project?.name}</h6>
                            </div>
                            <div className='mt-5'>
                                <h2 className='font-weight-bold text-dark'>Deskripsi Projek</h2>
                                <h6 className='text-secondary font-weight-bold'>{project?.desc ? project?.desc : 'Belum diatur'}</h6>
                            </div>
                            <div className='mt-5'>
                                <h3 className='font-weight-bold text-dark'>Tujuan Penggunaan Projek</h3>
                                <h6 className='text-secondary font-weight-bold'>{project?.purpose ? project?.purpose : 'Belum diatur'}</h6>
                            </div>
                            <div className='mt-5'>
                                <h3 className='font-weight-bold text-dark'>Jenis Industri Perusahaanmu</h3>
                                <h6 className='text-secondary font-weight-bold'>{project?.industryType ? project?.industryType : 'Belum diatur'}</h6>
                            </div>
                            <div className='mt-5'>
                                <h3 className='font-weight-bold text-dark'>Website / Media Sosial Perusahaanmu</h3>
                                <h6 className='text-secondary font-weight-bold'>{project?.social ? project?.social : 'Belum diatur'}</h6>
                            </div>
                            <div className='mt-5'>
                                <h5 className='font-weight-bold text-dark'>Apa Creator diperbolehkan menampilkan hasil Desainmu sebagai portofolio Createit?</h5>
                                <h6 className='text-secondary font-weight-bold'>{project?.creatorPermission == false ? 'Tidak' : 'Boleh'}</h6>
                            </div>
                            <div className='mt-5'>
                                <h3 className='font-weight-bold text-dark'>Catatan Tambahan untuk Creator</h3>
                                <h6 className='text-secondary font-weight-bold'>{project?.notes ? project?.notes : 'Belum diatur'}</h6>
                            </div>
                            <div className='mt-5'>
                                <h3 className='font-weight-bold text-dark'>Budget Tersedia</h3>
                                <h6 className='text-secondary font-weight-bold'>{project?.budget ? <NumberFormat value={project?.budget} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /> : 'Belum diatur'}</h6>
                            </div>
                            <div className='mt-5'>
                                <h3 className='font-weight-bold text-dark'>Durasi Hari</h3>
                                <h6 className='text-secondary font-weight-bold'>{project?.durationDays ? project?.durationDays : 'Belum diatur'}</h6>
                            </div>
                            <div className='mt-5'>
                                <h3 className='font-weight-bold text-dark'>Tanggal Mulai</h3>
                                <h6 className='text-secondary font-weight-bold'>{project?.start_date ? project?.start_date : 'Belum diatur'}</h6>
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
        loading: state.contest.loading,
        error: state.contest.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cancelProject: (projectID) => dispatch(projectAction.cancelProject(projectID)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Brief))