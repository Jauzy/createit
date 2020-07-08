import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

const ProjectList = (props) => {
    const [state, setState] = useState({
        activeSection: 'Semua'
    })

    const setActiveSection = (activeSection) => {
        setState({ ...state, activeSection })
    }

    const sections = [
        { icon: 'circle', name: 'Semua', quantity: 4 },
        { icon: 'circle', name: 'Dalam Pengerjaan', quantity: 4 },
        { icon: 'circle', name: 'Selesai', quantity: 4 },
        { icon: 'circle', name: 'Belum Dibayar', quantity: 4 },
        { icon: 'circle', name: 'Dibatalkan', quantity: 4 },
    ]

    return (
        <div>

            <div className='bg-main text-white'>
                <div className='container py-5'>
                    <h2 className='mt-5 mb-0'>List</h2>
                    <h1>Project</h1>
                </div>
            </div>

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
                        {
                            [1, 2, 3, 4, 5].map(item => (
                                <Link className='py-4 px-4 d-flex flex-wrap bg-light rounded-lg m-1 border-main text-decoration-none' to='#'>
                                    <div className='rounded-circle bg-main mr-4 my-auto' style={{ width: 60, height: 60 }} />
                                    <div className='my-auto'>
                                        <h4 className='text-secondary mb-0'>Project X</h4>
                                        <small className='text-secondary'>bersama <strong className='text-main'>Weeb Developer</strong></small>
                                    </div>
                                    <button className='btn btn-category rounded-lg px-5 ml-auto my-auto'>
                                        Selengkapnya
                                    </button>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectList