import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Tiket = (props) => {
    
    const [state, setState] = useState({
        activeSection: 'Paket Tiket 1'
    })
    
    const setActiveSection = (activeSection) => {
        setState({ ...state, activeSection })
    }
    
    const sections = [
        { harga: 'Mulai dari Rp25.000', name: 'Paket Tiket 1', keterangan: 'Daily Ticket' },
        { harga: 'Mulai dari Rp50.000', name: 'Paket Tiket 2', keterangan: '3 Days Pass' },
        { harga: 'Mulai dari Rp100.000', name: 'Paket Tiket 3', keterangan: '1 Week Pass' },
        { harga: 'Mulai dari Rp150.000', name: 'Paket Tiket 4', keterangan: '2 Weeks Pass' },
        { harga: 'Mulai dari Rp300.000', name: 'Paket Tiket 5', keterangan: 'A Month Pass' },
    ]

    useEffect(() => {
    }, [])

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-8'>
                    <h3>Design Essentials for Branding</h3>
                    <h6 className='text-secondary'>Minggu, 23 Agustus 2020, 13.00 - 15.00 WIB</h6>
                    <div className='pt-3'>
                        {sections.map(item => (
                            <div className={'p-4 d-flex align-items-center justify-content-between rounded-lg tiket-btn' + (state.activeSection == item.name ? '-active' : '')}
                                onClick={() => setActiveSection(item.name)}>
                                <div>
                                    <h5 className='my-auto ml-1'>{item.name}</h5>
                                    {state.activeSection == `${item.name}` && <p className='my-auto ml-1'>{item.keterangan}</p>}
                                </div>
                                <p className='my-auto'>{item.harga}</p>
                            </div>
                        ))}
                    </div>
                    <div className='pt-5'>
                        <Link className='btn btn-danger px-5 py-3'>Beli Tiket</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tiket