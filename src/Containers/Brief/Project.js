import React, { useEffect, useState } from 'react'
import bsCustomFileInput from 'bs-custom-file-input'
import $ from 'jquery'
import { Link, withRouter } from 'react-router-dom'
import Select from 'react-select';
import swal from 'sweetalert'
import { Subfooter } from '../../Components/Index';

const CATEGORIES = require('../../Constants/Categories').CategoryList

const Project = (props) => {

    const [state, setState] = useState({
        category: null, subcategory: null, duration: null, budget: null,

        name: null, description: null, objective: null, industryType: null,
        websiteOrMedia: null, permission: 'Boleh', notes: null, saved: null
    })

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value.toString() })
    }

    const setCategory = (category) => {
        setState({ ...state, category })
    }

    const setSubcategory = (subcategory) => {
        setState({ ...state, subcategory })
    }

    const setDuration = (duration) => {
        setState({ ...state, duration })
    }

    const onSave = () => {
        setState({ ...state, saved: true })
    }

    const onContinue = () => {
        if (!state.saved) {
            swal({
                title: "Error!",
                text: 'You need to save it first!',
                icon: "error",
                button: "Okay!",
            })
        } else {
            props.history.replace('/pricing')
        }
    }

    useEffect(() => {
        $(document).ready(function () {
            bsCustomFileInput.init()
        })
    }, [])

    return (
        <div className=''>

            <div className='bg-'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md d-flex'>
                            <div className='m-auto'>
                                <img src={require('../../Modules/images/logo.png')} width='200px' />
                                <h6 className='mt-4 text-secondary'><strong>Brief</strong></h6>
                                <h3 className='font-weight-bold text-main'>Brief Kreatif</h3>
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
                                <div style={{ borderRadius: '10px', width: '200px' }} className={'p-4 m-2 shadow-sm bg-white border-main' + (state.category == item.title && state.subcategory ? '-active' : '')}>
                                    <div className={'d-flex flex-column'}
                                        data-toggle="modal" data-target={"#modalChoose" + idx}
                                        onClick={() => setCategory(item.title)}>

                                        <i className='text-center fa fa-wine-bottle mx-auto mt-auto mb-3' style={{ fontSize: '80px' }} />
                                        {(state.subcategory && state.category == item.title) && <h5 className='mx-auto text-center'>{state.subcategory}</h5>}
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
                                                    <i className='fa fa-wine-bottle mr-4' style={{ fontSize: '150px' }} />
                                                            <div className='col-md d-flex flex-column'>
                                                                <h1 className='text-main mt-4'>Kemasan dan Label</h1>
                                                                <h6 className='mt-2 text-dark'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h2 className='text-center text-dark mt-5'>Pilih Sub Kategori</h2>
                                                    <div className='d-flex flex-wrap justify-content-center'>
                                                        {['Kemasan Botol', 'Tube', 'Botol', 'Box', 'Kaleng'].map(sub => (
                                                            <div className={'px-4 py-3 bg-light shadow-sm mx-3 my-2 d-flex border-main' + (state.subcategory == sub ? '-active' : '')} style={{ borderRadius: '10px' }}
                                                                onClick={() => setSubcategory(sub)} data-dismiss='modal'>
                                                                <i className='fa fa-wine-bottle mr-2 my-auto' style={{ fontSize: '30px' }} />
                                                                <h5 className='my-auto'>{sub}</h5>
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
                        {!state.subcategory && <small class="text-danger">
                            *Harus diisi.
                        </small>}
                    </div>
                    <hr />


                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Deskripsi Project*</label>
                                <textarea class={"form-control " + (!state.description ? 'is-invalid' : '')} rows="3" value={state.description} id='description' onChange={onChange}></textarea>
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
                                <textarea class={"form-control " + (!state.objective ? 'is-invalid' : '')} rows="3" value={state.objective} id='objective' onChange={onChange}></textarea>
                                <small class="form-text text-muted">Ceritakan tujuan dari projekmu.</small>
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
                                <label className='font-weight-bold text-dark'>Upload Desain Referensi*</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFile" />
                                    <label class="custom-file-label" for="customFile">Choose file</label>
                                </div>
                                <small id="emailHelp" class="form-text text-muted">Kirim referensi desain supaya Creator bisa tahu seleramu. Max 1Mb dengan Format Image.</small>
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
                                <input type="text" class="form-control" value={state.websiteOrMedia} id='websiteOrMedia' onChange={onChange} />
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
                                    name="permission"
                                    onChange={(item) => setState({ ...state, permission: item.value })}
                                    value={{ value: state.permission, label: state.permission }}
                                    options={[{ value: 'Tidak', label: 'Tidak' }, { value: 'Boleh', label: 'Boleh' }]}
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

        </div>
    )
}

export default withRouter(Project)