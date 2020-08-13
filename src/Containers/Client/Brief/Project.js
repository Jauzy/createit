import React, { useEffect, useState } from 'react'
import bsCustomFileInput from 'bs-custom-file-input'
import $ from 'jquery'
import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import projectAction from '../../../Modules/Redux/Actions/Project'
import Select from 'react-select';
import { Navbar, Subfooter } from '../../../Components/Index';

const CATEGORIES = require('../../../Constants/Categories').CategoryList

const Project = (props) => {
    const { project } = props
    const { projectID } = props.match.params
    const [state, setState] = useState({
        category: null, subCategory: null, duration: null, budget: null,

        name: null, desc: null, purpose: null, industryType: null,
        social: null, creatorPermission: false, notes: null, saved: null,
        reference: null
    })

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value.toString() })
    }

    const setCategory = (category) => {
        setState({ ...state, category })
    }

    const setSubcategory = (subCategory) => {
        setState({ ...state, subCategory })
    }

    const setDuration = (duration) => {
        setState({ ...state, duration })
    }

    const onSave = () => {
        setState({ ...state, saved: true })
        const { reference, category, subCategory, saved, ...approved } = state
        props.updateProject(projectID, approved)
    }

    const onContinue = () => {
        if (!state.saved) {
            const { reference, category, subCategory, saved, ...approved } = state
            props.updateProject(projectID, approved)
            props.history.replace(`/brief/project/${projectID}/review`)
        } else {
            props.history.replace(`/brief/project/${projectID}/review`)
        }
    }

    const handleFileInput = (e) => {
        let file = document.getElementById(e.target.id).files[0]
        if (file?.type.substring(0, 5) == "image") {
            const payload = new FormData()
            payload.append('image', file)
            props.uploadReference(projectID, payload)
        }
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
            <Navbar />
            <div className='bg-'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md d-flex'>
                            <div className='m-auto'>
                                <img src={require('../../../Modules/images/logo.png')} width='200px' />
                                <h6 className='mt-4 text-secondary'>{state.name} / <strong>Brief</strong></h6>
                                <h3 className='font-weight-bold text-main'>Brief Kreatif</h3>
                                <h1 className='text-main font-weight-bold'>CreateProject</h1>
                                <div className='text-secondary'>
                                    Jelaskan project kamu dalam brief kreatif ini dengan baik, lalu diskusikan lebih lanjut dengan creator terpilih nanti.
                                </div>
                            </div>
                        </div>
                        <div className='col-md d-flex'>
                            <img src={require('../../../Modules/images/brief-mascot.png')} width='60%' className='m-auto' />
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
                                <input type="text" class={"form-control " + (!state.name ? 'is-invalid' : '')} id='name' value={state.name} onChange={onChange} />
                                <small class="form-text text-muted">Masukan Nama projekmu.</small>
                                <div class="invalid-feedback">
                                    *Harus diisi.
                                </div>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div>
                        <label className='font-weight-bold text-dark'>Kategori Desain*</label>
                        <div className='d-flex flex-wrap justify-content-center' style={{ color: '#2386C7' }}>
                            {CATEGORIES.map((item, idx) => (
                                <div style={{ borderRadius: '10px', width: '200px' }} className={'p-4 m-2 shadow-sm bg-white border-main' + (state.category == item.title && state.subCategory ? '-active' : '')}>
                                    <div className={'d-flex flex-column'}
                                        data-toggle="modal" data-target={"#modalChoose" + idx}
                                        onClick={() => setCategory(item.title)}>

                                        {/* <i className='text-center fa fa-wine-bottle mx-auto mt-auto mb-3' style={{ fontSize: '80px' }} /> */}
                                        <div className='mx-auto mt-auto mb-3' style={{ width: '50px', height: '50px'}}>
                                            <img src={require(`../../../Modules/Icon/${item.iconBlue}`)} width='100%'/>
                                        </div>
                                        {(state.subCategory && state.category == item.title) && <h5 className='mx-auto text-center'>{state.subCategory}</h5>}
                                        <h6 className='mx-auto text-center mb-auto font-weight-bold'>{item.title}</h6>
                                    </div>
                                    <div class="modal fade" id={"modalChoose" + idx} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered modal-xl">
                                            <div class="modal-content">
                                                <div class="modal-header" style={{ border: 'unset' }}>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <i className='far fa-times-circle text-main' style={{ fontSize: '40px', opacity: '1' }} />
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <div className='d-flex'>
                                                        <div className='d-flex m-auto flex-wrap align-items-center justify-content-center row' style={{ maxWidth: '600px' }}>\
                                                            {/* <i className='fa fa-wine-bottle mr-4' style={{ fontSize: '150px' }} /> */}
                                                            <div style={{ width: '100px', height: '100px'}}>
                                                                <img src={require(`../../../Modules/Icon/${item.iconBlue}`)} width='100%'/>
                                                            </div>
                                                            <div className='col-md d-flex flex-column mx-5'>
                                                                <h1 className='text-main mt-4'>{item.title}</h1>
                                                                <h6 className='mt-2 text-dark'>{item.subtitle}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h2 className='text-center text-dark mt-5'>Pilih Sub Kategori</h2>
                                                    <div className='d-flex flex-wrap justify-content-center'>
                                                        {/* {['Kemasan Botol', 'Tube', 'Botol', 'Box', 'Kaleng'].map(sub => ( */}
                                                        {item.products.map(sub => (
                                                            <div className={'px-4 py-3 bg-light shadow-sm mx-3 my-2 d-flex border-main' + (state.subCategory == sub ? '-active' : '')} style={{ borderRadius: '10px' }}
                                                                onClick={() => setSubcategory(sub)} data-dismiss='modal'>
                                                                {/* <i className='fa fa-wine-bottle mr-2 my-auto' style={{ fontSize: '30px' }} /> */}
                                                                <div style={{ width: '30px', height: '30px'}}>
                                                                    <img src={require(`../../../Modules/Icon/${sub.icon}`)} width='100%'/>
                                                                </div>
                                                                <h5 className='my-auto mx-3'>{sub.title}</h5>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {!state.subCategory && <small class="text-danger">
                            *Harus diisi.
                        </small>}
                    </div>
                    <hr />


                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Deskripsi Project*</label>
                                <textarea class={"form-control " + (!state.desc ? 'is-invalid' : '')} rows="3" value={state.desc} id='desc' onChange={onChange}></textarea>
                                <small class="form-text text-muted">Deskripsikan seperti apa projek yang ingin kamu buat.</small>
                                <div class="invalid-feedback">
                                    *Harus diisi.
                                </div>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Tujuan Penggunaan Project*</label>
                                <textarea class={"form-control " + (!state.purpose ? 'is-invalid' : '')} rows="3" value={state.purpose} id='purpose' onChange={onChange}></textarea>
                                <small class="form-text text-muted">Ceritakan tujuan dari projekmu.</small>
                                <div class="invalid-feedback">
                                    *Harus diisi.
                                </div>
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

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Upload Desain Referensi*</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFile" onChange={handleFileInput} />
                                    <label class="custom-file-label" for="customFile">Choose file</label>
                                </div>
                                <small id="emailHelp" class="form-text text-muted">Kirim referensi desain supaya Creator bisa tahu seleramu. Max 10Mb dengan Format Image.</small>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div>
                        <label className='font-weight-bold text-dark'>Durasi pengerjaan yang diinginkan*</label>
                        <div className='d-flex flex-wrap justify-content-center' style={{ color: '#2386C7' }}>
                            {['48 Jam', '1 Minggu', '1 Bulan', 'Tentukan tanggal pengerjaan', 'Mau ngobrol dulu sama desainernya kak'].map((item, idx) => (
                                <div className={'p-4 shadow-sm bg-white d-flex flex-column m-2 border-main' + (state.duration == item ? '-active' : '')} style={{ borderRadius: '10px', width: '200px' }}
                                    onClick={() => setDuration(item)}>
                                    <i className='text-center fa fa-clock mx-auto mt-auto' style={{ fontSize: '80px' }} />
                                    <h6 className='mt-3 mx-auto text-center mb-auto font-weight-bold'>{item}</h6>
                                </div>
                            ))}
                        </div>
                        {!state.duration && <small class="text-danger">
                            *Harus diisi.
                        </small>}
                        {state.duration == 'Tentukan tanggal pengerjaan' &&
                            <div className='row mt-3'>
                                <div className='col-md'>
                                    <div class="form-group">
                                        <label className='font-weight-bold text-dark'>Tentukan Tanggal Mulai*</label>
                                        <input type="date" class={"form-control " + (!state.start_date ? 'is-invalid' : '')} id='start_date' value={state.start_date} onChange={onChange} />
                                        <div class="invalid-feedback">
                                            *Harus diisi.
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md'>
                                    <div class="form-group">
                                        <label className='font-weight-bold text-dark'>Tentukan Tanggal Selesai*</label>
                                        <input type="date" class={"form-control " + (!state.end_date ? 'is-invalid' : '')} id='end_date' value={state.end_date} onChange={onChange} />
                                        <div class="invalid-feedback">
                                            *Harus diisi.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Jenis Industri Perusahaanmu*</label>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={{ value: null, label: 'Pilih industri' }}
                                    isLoading={false}
                                    isClearable={false}
                                    isRtl={false}
                                    isSearchable={false}
                                    name="industryType"
                                    onChange={(item) => setState({ ...state, industryType: item.value })}
                                    value={{ value: state.industryType, label: state.industryType }}
                                    options={[{ value: 'Industri Kreatif', label: 'Industri Kreatif' }]}
                                />
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Website / Media Sosial Perusahaanmu*</label>
                                <input type="text" class="form-control" value={state.social} id='social' onChange={onChange} />
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Apa Creator diperbolehkan menampilkan hasil Desainmu sebagai portofolio Createit?*</label>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={{ value: null, label: 'Pilih Izin' }}
                                    isLoading={false}
                                    isClearable={false}
                                    isRtl={false}
                                    isSearchable={false}
                                    name="creatorPermission"
                                    onChange={(item) => setState({ ...state, creatorPermission: item.value })}
                                    value={{ value: state.creatorPermission, label: state.creatorPermission == false ? 'Tidak' : 'Boleh' }}
                                    options={[{ value: false, label: 'Tidak' }, { value: true, label: 'Boleh' }]}
                                />
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Catatan Tambahan untuk Creator*</label>
                                <textarea class="form-control" rows="3" value={state.notes} id='notes' onChange={onChange}></textarea>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>

                </div>
            </div>

            <div className='container py-5'>
                <div className='d-flex flex-wrap pb-3'>
                    <button className='btn btn-main px-5 py-3 m-2' onClick={onSave}>Simpan</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Project))