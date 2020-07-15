import React, { useEffect, useState } from 'react'
import bsCustomFileInput from 'bs-custom-file-input'
import $ from 'jquery'
import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import contestAction from '../../Modules/Redux/Actions/Contest'
import { Subfooter } from '../../Components/Index'

const ContestReview = (props) => {
    const { contestID } = props.match.params
    const { contest } = props

    const [state, setState] = useState({
        name: null, desc: null, purpose: null, industryType: null,
        social: null, creatorPermission: false, notes: null, saved: null,
        reference: []
    })

    const onSubmit = () => {
        props.history.replace(`/pricing/${contestID}`)
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

    return (
        <div className=''>

            <div className='bg-'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md d-flex'>
                            <div className='m-auto'>
                                <img src={require('../../Modules/images/logo.png')} width='200px' />
                                <h6 className='mt-4 text-secondary'>Brief / <strong>Ulasan</strong></h6>
                                <h3 className='font-weight-bold text-main'>Ulasan Brief Kreatif</h3>
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
                                <h5 className='text-secondary'>{state.name}</h5>
                            </div>
                        </div>
                        <div className='col-md'></div>
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
                    <button className='btn btn-main px-5 py-3 m-2' onClick={() => props.history.replace(`/brief/contest/${contestID}`)}>Edit</button>
                    <button className='btn btn-main px-5 py-3 m-2' onClick={onSubmit}>Done</button>
                </div>
                <Subfooter />
            </div>

        </div>
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
        updateContest: (contestID, payload) => dispatch(contestAction.updateContest(contestID, payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContestReview))