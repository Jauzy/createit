import React, { useState } from 'react'
import Countdown from 'react-countdown';
import Brief from './Brief'
import Chatroom from './Chatroom'
import File from './File'
import Tagihan from './Tagihan'

const Completionist = () => <span><h1 className='text-white'>Contest Timeout!</h1></span>;

const ProjectDashboard = props => {
    const [state, setState] = useState({
        activeSection: 'Tagihan'
    })

    const sections = ['Brief', 'Chatroom', 'File', 'Tagihan']

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return (
                <span>
                    <h1 className='text-right text-white'>
                        {days} : {hours} : {minutes} : {seconds}
                    </h1>
                    <h6 className='text-right'>{days} Days Remaining</h6>
                </span>
            )
        }
    };

    return (
        <div>

            <div className='pt-5 bg-main text-white'>
                <div className='container py-5'>
                    <div className='d-flex flex-wrap'>
                        <div className='mr-auto my-auto'>
                            <h1>Project X</h1>
                            <h6 className='mb-0'>oleh Weeb Developer</h6>
                            <small>Designer : Weeb Developer</small>
                        </div>
                        <div className='ml-auto my-auto'>
                            <Countdown
                                date={Date.now() + 100000000}
                                renderer={renderer}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-main'>
                <div className='container navs'>
                    <ul class="nav">
                        {sections.map(item => (
                            <li class="nav-item" onClick={() => setState({ ...state, activeSection: item })}>
                                <span class={"nav-link " + (state.activeSection == item ? 'active' : '')}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {state.activeSection == 'Brief' && <Brief />}
            {state.activeSection == 'Chatroom' && <Chatroom />}
            {state.activeSection == 'File' && <File />}
            {state.activeSection == 'Tagihan' && <Tagihan />}

        </div>
    )
}

export default ProjectDashboard