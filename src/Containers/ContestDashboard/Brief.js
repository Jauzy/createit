import React, { useEffect, useState } from 'react'
import BriefSec from './BriefSec'

const Brief = props => {
    const [state, setState] = useState({
        activeSection: 'Lorem Ipsum'
    })

    const setActiveSection = (activeSection) => {
        setState({ ...state, activeSection })
    }

    const sections = [
        { icon: 'user', name: 'Lorem Ipsum' },
        { icon: 'cog', name: 'Lorem Ipsum 2' },
        { icon: 'cog', name: 'Lorem Ipsum 3' },
        { icon: 'cog', name: 'Lorem Ipsum 4' },
        { icon: 'cog', name: 'Lorem Ipsum 5' },
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
                                <h5 className='my-auto ml-3'>{item.name}</h5>
                            </div>
                        ))}
                    </div>
                    <div className='col-md'>
                        {state.activeSection == 'Lorem Ipsum' && <BriefSec />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brief