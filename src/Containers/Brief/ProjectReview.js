import React, { useEffect, useState } from 'react'
import bsCustomFileInput from 'bs-custom-file-input'
import $ from 'jquery'
import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import projectAction from '../../Modules/Redux/Actions/Project'
import { Subfooter } from '../../Components/Index'

const ProjectReview = (props) => {
    const { project } = props
    const { projectID } = props.match.params
    const [state, setState] = useState({
        category: null, subCategory: null, duration: null, budget: null,

        name: null, desc: null, purpose: null, industryType: null,
        social: null, creatorPermission: false, notes: null, saved: null,
        reference: null
    })

    const onContinue = () => {
        props.history.push(`/project/dashboard/${projectID}`)
    }

    useEffect(() => {
        setState({ ...state, ...project })
    }, [project])

    useEffect(() => {
        $(document).ready(function () {
            bsCustomFileInput.init()
        })
        props.getProjectById(projectID, props.history)
    }, [])

    return (
        <LoadingOverlay spinner active={props.loading} text='Loading please wait...' className=''>

            <div className='bg-'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md d-flex'>
                            <div className='m-auto'>
                                <img src={require('../../Modules/images/logo.png')} width='200px' />
                                <h6 className='mt-4 text-secondary'>{state.name} / Brief / <strong>Ulasan</strong></h6>
                                <h3 className='font-weight-bold text-main'>Ulasan Brief Kreatif</h3>
                                <h1 className='text-main font-weight-bold'>Create Project</h1>
                                <div className='text-secondary'>
                                    Isi brief kreatif sebaik mungkin supaya Creator bisa memahami keinginanmu dengan mudah. Tenang aja, ini bukan ujian semester kok, take your time!
                                </div>
                            </div>
                        </div>
                        <div className='col-md d-flex'>
                            <img src={require('../../Modules/images/brief-mascot.png')} width='60%' className='m-auto' />
                        </div>
                    </div>
                    <div>
                        {state.category} / <strong>{state.subCategory}</strong>
                    </div>
                </div>
            </div>

            <div className='bg-light'>
                <div className='container py-5'>

                    <div className='row'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Nama Project*</label>
                                <h5 className='text-secondary'>{state.name}</h5>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div>
                        <label className='font-weight-bold text-dark'>Kategori Desain*</label>
                        <h5 className='text-secondary'>{state.category} - {state.subcategory}</h5>
                    </div>
                    <hr />


                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Deskripsi Project*</label>
                                <h5 className='text-secondary'>{state.desc}</h5>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Tujuan Penggunaan Project*</label>
                                <h5 className='text-secondary'>{state.purpose}</h5>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    {(state.reference && state.reference?.length > 0) && <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Uploaded Desain Referensi*</label>
                                <div className='d-flex flex-wrap'>
                                    {state.reference?.map(item => (
                                        <div>
                                            <img src={item} style={{ maxWidth: '300px', height: 'auto' }} className='rounded-lg m-3' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    }
                    <hr />

                    <div>
                        <label className='font-weight-bold text-dark'>Durasi pengerjaan yang diinginkan*</label>
                        <h5 className='text-secondary'>{state.duration}</h5>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Jenis Industri Perusahaanmu*</label>
                                <h5 className='text-secondary'>{state.industryType}</h5>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Website / Media Sosial Perusahaanmu*</label>
                                <h5 className='text-secondary'>{state.social}</h5>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Apa Creator diperbolehkan menampilkan hasil Desainmu sebagai portofolio Createit?*</label>
                                <h5 className='text-secondary'>{state.creatorPermission == false ? 'Tidak' : 'Boleh'}</h5>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Catatan Tambahan untuk Creator*</label>
                                <h5 className='text-secondary'>{state.notes}</h5>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>

                </div>
            </div>

            <div className='container py-5'>
                <div className='d-flex flex-wrap pb-3'>
                    <button className='btn btn-main px-5 py-3 m-2' onClick={() => props.history.replace('/brief/project/' + projectID)}>Edit</button>
                    <button className='btn btn-main px-5 py-3 m-2' onClick={onContinue}>Lanjut</button>
                </div>
                <Subfooter />
            </div>

        </LoadingOverlay>
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
        getProjectById: (projectID, history) => dispatch(projectAction.getProjectById(projectID, history)),
        updateProject: (projectID, payload) => dispatch(projectAction.updateProject(projectID, payload)),
        uploadReference: (projectID, payload) => dispatch(projectAction.uploadReference(projectID, payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProjectReview))