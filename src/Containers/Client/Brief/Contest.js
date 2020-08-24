import React, { useEffect, useState } from 'react'
import bsCustomFileInput from 'bs-custom-file-input'
import $ from 'jquery'
import Select from 'react-select';
import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import contestAction from '../../../Modules/Redux/Actions/Contest'
import { Navbar, Subfooter } from '../../../Components/Index'

const Contest = (props) => {
    const { contestID } = props.match.params
    const { contest } = props

    const [state, setState] = useState({
        name: null, desc: null, purpose: null, industryType: null,
        social: null, creatorPermission: false, notes: null, saved: null,
        reference: []
    })

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value.toString() })
    }

    const onSave = () => {
        setState({ ...state, saved: true })
        const { reference, category, subCategory, saved, ...approved } = state
        props.updateContest(contestID, approved)
    }

    const handleFileInput = (e) => {
        let file = document.getElementById(e.target.id).files[0]
        if (file?.type.substring(0, 5) == "image") {
            const payload = new FormData()
            payload.append('image', file)
            props.uploadReference(contestID, payload)
        }
    }

    const onContinue = () => {
        if (!state.saved) {
            const { reference, category, subCategory, saved, ...approved } = state
            props.updateContest(contestID, approved)
            props.history.replace(`/brief/contest/${contestID}/review`)
        } else {
            props.history.replace(`/brief/contest/${contestID}/review`)
        }
    }

    useEffect(() => {
        setState({ ...state, ...contest })
    }, [contest])

    useEffect(() => {
        $(document).ready(function () {
            bsCustomFileInput.init()
        })
        props.getContestById(contestID, props.history)
    }, [])

    const JENIS = require('../../../Constants/JenisIndustri').IndustryList

    return (
        <LoadingOverlay className='' active={props.loading} spinner text='Loading please wait...'>
            <Navbar />
            <div className='bg-'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md d-flex'>
                            <div className='m-auto'>
                                <img src={require('../../../Modules/images/logo.png')} width='200px' />
                                <h6 className='mt-4 text-secondary'>{state.name} / <strong>Brief</strong></h6>
                                <h3 className='font-weight-bold text-main mb-0'>Brief Kreatif</h3>
                                <h1 className='text-main font-weight-bold'>Create Contest</h1>
                                <div className='text-secondary'>
                                    Isi brief kreatif sebaik mungkin supaya Creator bisa memahami keinginanmu dengan mudah. Tenang aja, ini bukan ujian semester kok, take your time!
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

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Jenis Industri Perusahaanmu*</label>
                                {JENIS.map(item => (
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
                                        options={item}
                                    />
                                ))}
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
        contest: state.contest.contest,
        loading: state.contest.loading,
        error: state.contest.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getContestById: (contestID, history) => dispatch(contestAction.getContestById(contestID, history)),
        updateContest: (contestID, payload) => dispatch(contestAction.updateContest(contestID, payload)),
        uploadReference: (contestID, payload) => dispatch(contestAction.uploadReference(contestID, payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Contest))