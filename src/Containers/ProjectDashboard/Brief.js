import React, { useState } from 'react'
import NumberFormat from 'react-number-format'

const Brief = props => {
    const [state, setState] = useState({
        activeSection: 'Brief'
    })

    const setActiveSection = (activeSection) => {
        setState({ ...state, activeSection })
    }

    const sections = [
        { icon: 'info', name: 'Brief' },
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
                </div>
                <div className='col-md'>
                    <div className='p-4'>
                        <div className='mt-2'>
                            <h2 className='font-weight-bold text-dark'>Nama Project</h2>
                            <h6 className='text-secondary font-weight-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                        </div>
                        <div className='mt-5'>
                            <h2 className='font-weight-bold text-dark'>Deskripsi Project</h2>
                            <h6 className='text-secondary font-weight-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                        </div>
                        <div className='mt-5'>
                            <h3 className='font-weight-bold text-dark'>Tujuan Penggunaan Project</h3>
                            <h6 className='text-secondary font-weight-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                        </div>
                        <div className='mt-5'>
                            <h3 className='font-weight-bold text-dark'>Jenis Industri Perusahaanmu</h3>
                            <h6 className='text-secondary font-weight-bold'>Lorem Ipsum</h6>
                        </div>
                        <div className='mt-5'>
                            <h3 className='font-weight-bold text-dark'>Website / Media Sosial Perusahaanmu</h3>
                            <h6 className='text-secondary font-weight-bold'>Lorem Ipsum Sir de amet!</h6>
                        </div>
                        <div className='mt-5'>
                            <h5 className='font-weight-bold text-dark'>Apa Creator diperbolehkan menampilkan hasil Desainmu sebagai portofolio Createit?</h5>
                            <h6 className='text-secondary font-weight-bold'>Boleh</h6>
                        </div>
                        <div className='mt-5'>
                            <h3 className='font-weight-bold text-dark'>Catatan Tambahan untuk Creator</h3>
                            <h6 className='text-secondary font-weight-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                        </div>
                        <div className='mt-5'>
                            <h3 className='font-weight-bold text-dark'>Waktu pengerjaan yang diinginkan</h3>
                            <h6 className='text-secondary font-weight-bold'>07/07/2007 - 17/07/2007</h6>
                        </div>
                        <div className='mt-5'>
                            <h3 className='font-weight-bold text-dark'>Budget yang tersedia</h3>
                            <h6 className='text-secondary font-weight-bold'><NumberFormat value={500000} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h6>
                        </div>
                        <div className='mt-5'>
                            <button className='btn btn-danger'>Batalkan pemesanan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brief