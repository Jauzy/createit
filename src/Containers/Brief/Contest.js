import React, { useEffect, useState } from 'react'
import bsCustomFileInput from 'bs-custom-file-input'
import $ from 'jquery'
import Select from 'react-select';
import swal from 'sweetalert'
import { Link, withRouter } from 'react-router-dom'
import { Subfooter } from '../../Components/Index'

const Contest = (props) => {
    const [state, setState] = useState({
        name: null, description: null, objective: null, industryType: null,
        websiteOrMedia: null, permission: 'Boleh', notes: null, saved: null,
        files: []
    })

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value.toString() })
    }

    const onSave = () => {
        setState({ ...state, saved: true })
    }

    const handleFileInput = (e) => {
        let file = document.getElementById(e.target.id).files[0]
        if (file?.type.substring(0, 5) == "image") {
            setState({ ...state, files: [...state.files, file] })
        }
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
                                <h1 className='text-main font-weight-bold'>Create Contest</h1>
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
                                    <input type="file" class="custom-file-input" id="customFile" onChange={handleFileInput} />
                                    <label class="custom-file-label" for="customFile">Choose file</label>
                                </div>
                                <small id="emailHelp" class="form-text text-muted">Kirim referensi desain supaya Creator bisa tahu seleramu. Max 1Mb dengan Format Image.</small>
                            </div>
                        </div>
                        <div className='col-md'></div>
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

export default withRouter(Contest)