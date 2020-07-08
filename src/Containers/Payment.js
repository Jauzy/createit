import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import NumberFormat from 'react-number-format'
import {Link} from 'react-router-dom'
import { Subfooter } from '../Components/Index'

const Payment = props => {

    const [state, setState] = useState({
        paymentMethod: null, idx: null
    })


    const paymentMethods = [
        {
            name: 'Mandiri Virtual Account',
            img: 'https://logos-download.com/wp-content/uploads/2016/06/Mandiri_logo.png',
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
            step: [
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
                { title: 'Lorem Ipsum det Sir!', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" },
            ]
        },
    ]

    const setPaymentMethod = (paymentMethod, idx) => {
        setState({ ...state, paymentMethod, idx })
    }

    useEffect(() => {
        setState({ ...state, overflowHeight: $(".tl li").length, paymentMethod: paymentMethods[0].name, idx: 0 })
        document.getElementById('overflow-div').style.height = `${($(".tl li").length - 1) * 100}px`;
    }, [])

    return (
        <div>

            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md d-flex'>
                            <div className='m-auto' style={{ width: '100%' }}>
                                <img src={require('../Modules/images/logo.png')} width='200px' />
                                <h6 className='mt-4 text-secondary'>Brief / Pricing / Ulasan / <strong>Pembayaran</strong></h6>
                                <h3 className='font-weight-bold text-main'>Pembayaran</h3>
                                <h1 className='text-main font-weight-bold'>Kontes Desain</h1>
                                <div className='d-flex align-items-center mt-3 flex-wrap'>
                                    <h4 className='my-auto'>Project X</h4>
                                    <h6 className='ml-2 my-auto font-weight-bold'>oleh Weeb Developer</h6>
                                    <div className=' btn btn-outline-danger my-auto ml-auto'>
                                        Menunggu Pembayaran
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md d-flex'>
                            <img src={require('../Modules/images/brief-mascot.png')} width='60%' className='m-auto' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <h5>Detil Pembayaran</h5>
                <h6 className='text-secondary'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </h6>

                <div className='bg-light rounded-lg border my-4 px-3 pt-5'>
                    <div className='row'>
                        <div className='col-md px-4 d-flex mb-4'>
                            <div className='mx-auto' style={{ width: '100%' }}>
                                <h4>Panduan Pembayaran</h4>
                                <h6 className='text-secondary'>Pilih Metode Pembayaran</h6>
                                <div className='bg-white rounded-lg border mt-3' id='overflow-div' style={{ overflow: 'auto' }}>
                                    {paymentMethods.map((item, idx) => (
                                        <div className={'d-flex border px-4 py-3 payment-method ' + (state.paymentMethod == item.name ? 'bg-light' : '')}
                                            style={{ width: '100%' }} onClick={() => setPaymentMethod(item.name, idx)}>
                                            <img src={item.img} width='100px' />
                                            <h6 className='ml-4 my-auto font-weight-bold'>{item.name}</h6>
                                        </div>
                                    ))}
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
                                    <h6 className='font-weight-bold'><NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h6>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border: 'unset', paddingTop: 0 }}>
                                    <h6>Platform Fee</h6>
                                </td>
                                <td className='text-right' style={{ border: 'unset', paddingTop: 0 }}>
                                    <h6 className='font-weight-bold'><NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h6>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h2>Total</h2>
                                </td>
                                <td className='text-right'>
                                    <h2 className='font-weight-bold'><NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h2>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='d-flex flex-wrap align-items-center'>
                    <button className='btn btn-main m-2 px-4 py-3'>Upload Bukti Pembayaran</button>
                    <button className='btn btn-secondary m-2 px-4 py-3'>Ajukan Revisi</button>
                    <button className='btn btn-danger m-2 px-4 py-3'>Batalkan pemesanan</button>
                </div>
                <h6 className='text-secondary mt-3' style={{ maxWidth: '800px' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </h6>
            </div>

            <div className='container pb-5'>
                <Subfooter />
            </div>

        </div >
    )
}

export default Payment