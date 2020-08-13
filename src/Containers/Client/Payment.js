import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import NumberFormat from 'react-number-format'
import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import contestAction from '../../Modules/Redux/Actions/Contest'
import paymentAction from '../../Modules/Redux/Actions/Payment'
import { Navbar, Subfooter } from '../../Components/Index'
import swal from 'sweetalert'

const Payment = props => {
    const { contestID } = props.match.params
    const { contest, user, payment } = props
    const [state, setState] = useState({
        bank: null, idx: null, account_no: null, amount: 0
    })

    const paymentMethods = [
        {
            name: 'Mandiri Virtual Account',
            img: 'https://logos-download.com/wp-content/uploads/2016/06/Mandiri_logo.png',
            fee: 5000,
            step: [
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
            ]
        },
        {
            name: 'BCA Virtual Account',
            img: 'https://1.bp.blogspot.com/-cnqbyNUAhE8/Xcodaak_3PI/AAAAAAAABJ4/pWOFZNTwReEyBUt6XIjy5Sk_yWrh76ytACLcBGAsYHQ/s1600/Logo%2BBank%2BBCA.png',
            fee: 6500,
            step: [
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
            ]
        },
        {
            name: 'Jenius Virtual Account',
            img: 'https://1.bp.blogspot.com/-3S4np2NQzMs/XempMacPrqI/AAAAAAAABRY/_twVjrZqHCkXDcc8JbH8j7unBKICoxhbwCLcBGAsYHQ/w1200-h630-p-k-no-nu/Logo%2BJenius%2Bpng.png',
            fee: 7200,
            step: [
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
            ]
        },
    ]

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const onUpdate = () => {
        props.updatePaymentContest(contestID, state)
    }

    const setPaymentMethod = (bank, idx) => {
        setState({ ...state, bank, idx })
    }

    function importData() {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
            // you can use this method to get file and perform respective operations
            let files = Array.from(input.files);
            let file = files[0]
            if (file?.type.substring(0, 5) == "image") {
                const payload = new FormData()
                payload.append('image', file)
                props.uploadContestPaymentProof(contestID, payload)
            } else {

            }
        };
        input.click();
    }

    useEffect(() => {
        if (contest) {
            let price = contest.contestType == 'Free' ? 0 : contest.contestType == 'Stealth' ? 100000 : 200000
            setState({
                ...state,
                amount: price
            })
        }
    }, [contest])

    useEffect(() => {
        if (payment) setState({ ...payment, idx: paymentMethods.findIndex(item => item.name == payment.bank) })
        else setState(payment)
    }, [payment])

    useEffect(() => {
        setState({ ...state, overflowHeight: $(".tl li").length, bank: paymentMethods[0].name, idx: 0 })
        document.getElementById('overflow-div').style.height = `${($(".tl li").length - 1) * 100}px`;
        props.getContestById(contestID, props.history)
        props.getContestPayment(contestID)
    }, [])

    return (
        <LoadingOverlay active={props.loading} spinner text='Loading please wait...'>
            <Navbar />
            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md d-flex'>
                            <div className='m-auto' style={{ width: '100%' }}>
                                <img src={require('../../Modules/images/logo.png')} width='200px' />
                                <h6 className='mt-4 text-secondary'>{contest?.name} / Brief / Pricing / Review / <strong>Pembayaran</strong></h6>
                                <h3 className='font-weight-bold text-main mb-0'>Pembayaran</h3>
                                <h1 className='text-main font-weight-bold'>CreateContest</h1>
                                <div className='d-flex align-items-center mt-3 flex-wrap'>
                                    <h4 className='my-auto'>{contest?.name}</h4>
                                    <h6 className='ml-2 my-auto font-weight-bold' style={{ maxWidth: '200px' }}>oleh {user?.name}</h6>
                                    <div className={` btn btn-outline-${contest?.status == 'Belum Dibayar' ? 'danger' : 'success'} my-auto ml-auto`}>
                                        {contest?.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md d-flex'>
                            <img src={require('../../Modules/images/brief-mascot.png')} width='60%' className='m-auto' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <h5>Detil Pembayaran</h5>
                <h6 className='text-secondary'>
                    Ikuti panduan pembayaran dengan baik dan perhatikan nominal pembayaran yang tertera.
                </h6>

                <div className='bg-light rounded-lg border my-4 px-3 pt-5'>
                    <div className='row'>
                        <div className='col-md px-4 d-flex mb-4'>
                            <div className='mx-auto' style={{ width: '100%' }}>
                                <h4>Panduan Pembayaran</h4>
                                <h6 className='text-secondary'>Pilih Metode Pembayaran</h6>
                                <div className='bg-white rounded-lg border mt-3' id='overflow-div' style={{ overflow: 'auto' }}>
                                    {paymentMethods.map((item, idx) => (
                                        <div className={'d-flex border px-4 py-3 payment-method ' + (state?.bank == item.name ? 'bg-light' : '')}
                                            style={{ width: '100%' }} onClick={() => setPaymentMethod(item.name, idx)}>
                                            <img src={item.img} width='100px' />
                                            <h6 className='ml-4 my-auto font-weight-bold'>{item.name}</h6>
                                        </div>
                                    ))}
                                </div>
                                <div class="form-group mt-3">
                                    <label className='font-weight-bold text-dark'>Nomor Rekening*</label>
                                    <input type="number" class={"form-control " + (!state.account_no ? 'is-invalid' : '')} id='account_no' value={state.account_no} onChange={onChange} />
                                    <small class="form-text text-muted">Masukan nomor rekeningmu untuk verifikasi.</small>
                                    <div class="invalid-feedback">
                                        *Harus diisi.
                                </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md d-flex pl-5'>
                            <div class="history-tl-container">
                                <ul class="tl">
                                    {paymentMethods[state.idx]?.step.map(item => (
                                        <li class="tl-item" ng-repeat="item in retailer_history">
                                            <div class="item-title">{item.title}</div>
                                            <div class="item-detail">{item.desc}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container pb-5'>
                <div className='row'>
                    <div className='col-md-8'>
                        <table className='table' style={{ width: '100%' }}>
                            <tr>
                                <td style={{ border: 'unset' }}>
                                    <h5>Deskripsi</h5>
                                </td>
                                <td className='text-right' style={{ border: 'unset' }}>
                                    <h5>Harga</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h6>Design Project X</h6>
                                </td>
                                <td className='text-right'>
                                    <h6 className='font-weight-bold'><NumberFormat value={state.amount} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h6>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: 'unset', paddingTop: 0 }}>
                                    <h6>Platform Fee</h6>
                                </td>
                                <td className='text-right' style={{ border: 'unset', paddingTop: 0 }}>
                                    <h6 className='font-weight-bold'><NumberFormat value={paymentMethods[state.idx]?.fee || 0} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2>Total</h2>
                                </td>
                                <td className='text-right'>
                                    <h2 className='font-weight-bold'><NumberFormat value={state.amount + paymentMethods[state.idx]?.fee || 0} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h2>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='d-flex flex-wrap align-items-center'>
                    <button className='btn btn-main m-2 px-4 py-3' disabled={payment?.approved} onClick={importData}>Upload Bukti Pembayaran</button>
                    {payment?.proofOfPayment && <button className='btn btn-main m-2 px-4 py-3' data-toggle='modal' data-target='#proofOfPaymentModal'>Lihat Bukti Pembayaran</button>}
                    <button className='btn btn-secondary m-2 px-4 py-3' disabled={payment?.approved} onClick={onUpdate}>Update Payment Info</button>
                </div>
                <h6 className='text-secondary mt-3' style={{ maxWidth: '800px' }}>
                    Payment akan divalidasi setelah bukti pembayaran diupload.
                    {payment?.proofOfPayment && <div className='font-weight-bold text-dark mt-3'>* Kamu sudah mengupload bukti pembayaran, mohon tunggu konfirmasi pembayaran. Kontes akan segera dimulai sesaat setelah payment dikonfirmasi.</div>}
                </h6>
            </div>

            <div class="modal fade" id="proofOfPaymentModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img src={payment?.proofOfPayment} width='100%' />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container pb-5'>
                <Subfooter />
            </div>

        </LoadingOverlay >
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        contest: state.contest.contest,
        payment: state.payment.payment,
        loading: state.payment.loading,
        error: state.contest.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getContestById: (contestID, history) => dispatch(contestAction.getContestById(contestID, history)),
        updateContest: (contestID, payload) => dispatch(contestAction.updateContest(contestID, payload)),
        getContestPayment: (contestID) => dispatch(paymentAction.getContestPayment(contestID)),
        updatePaymentContest: (contestID, payload) => dispatch(paymentAction.updatePaymentContest(contestID, payload)),
        uploadContestPaymentProof: (contestID, payload) => dispatch(paymentAction.uploadContestPaymentProof(contestID, payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment))