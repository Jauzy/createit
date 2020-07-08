import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import CreatorProfile from './CreatorProfile'
import Page404 from '../Page404'

const cookies = new Cookies()

const Creator = props => {
    const [state, setState] = useState({
        activeSection: 'Profil'
    })

    const setActiveSection = (activeSection) => {
        setState({ ...state, activeSection })
    }

    const sections = [
        { icon: 'user', name: 'Profil' },
        { icon: 'cog', name: 'Portofolio' },
        { icon: 'cog', name: 'Level' },
        { icon: 'cog', name: 'Pendapatan' },
        { icon: 'cog', name: 'Penjanjian dengan Client' },
    ]

    useEffect(() => {
    }, [])

    return (
        <div>

            <div className='bg-main text-white'>
                <div className='container py-5'>
                    <h2 className='mt-5 mb-0'>Welcome,</h2>
                    <h1>{cookies.get('user').name}</h1>
                </div>
            </div>


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
                        {state.activeSection == 'Profil' && <CreatorProfile />}
                    </div>
                </div>
            </div>

        </div>
    )
}

const Switch = props => {
    return(
        <div>
            {cookies.get('user').type == 'creator'? <Creator /> : <Page404/>}
        </div>
    )
}

export default Switch