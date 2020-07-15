import React, { useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'

const Tagihan = props => {
    const [state, setState] = useState({
        activeSection: 'Semua'
    })

    const setActiveSection = (activeSection) => {
        setState({ ...state, activeSection })
    }

    const sections = [
        { icon: 'circle', name: 'Semua', quantity: 0 },
        { icon: 'circle', name: 'Menunggu Konfirmasi', quantity: 0 },
        { icon: 'circle', name: 'Selesai', quantity: 0 },
        { icon: 'circle', name: 'Belum dibayar', quantity: 0 },
        { icon: 'circle', name: 'Dibatalkan', quantity: 0 },
    ]

    return (
        <div>

            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        {sections.map(item => (
                            <div className={'p-4 d-flex align-items-center rounded-lg profile-btn' + (state.activeSection == item.name ? '-active' : '')}
                                onClick={() => setActiveSection(item.name)}>
                                <i className={'text-main fa my-auto fa-' + item.icon} style={{ fontSize: '30px' }} />
                                <h5 className='my-auto ml-3'>{item.name} ({item.quantity})</h5>
                            </div>
                        ))}
                    </div>
                    <div className='col-md'>
                        <div>
                            <div className='row d-flex'>
                                <div className='col-md my-auto'>
                                    <div className='d-flex flex-wrap'>
                                        <h3>Quote Baru <NumberFormat value={500000} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h3>
                                        <button className='btn btn-outline-danger mb-auto ml-3' style={{ cursor: 'unset' }}>Menunggu Konfirmasi</button>
                                    </div>
                                    <h6 className='text-secondary'>Valid Sampai 2 Mei 2020</h6>
                                </div>
                                <div className='col-md-auto my-auto'>
                                    <button className='btn btn-outline-main'>Tinjau</button>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Tagihan