import React from 'react'
import { Link } from 'react-router-dom'

const ROUTES = require('../Constants/Routes')

const Landing = (props) => {
    return (
        <div className='pb-5'>
            <div className='bg-main'>
                <div className='p-4 d-flex'>
                    <img src={require('../Modules/images/logo-white.png')} className='m-auto' width='200px' />
                </div>
                <div className='container'>
                    <div className='py-5 row'>
                        <div className='col-md d-flex'>
                            <img src={require('../Modules/images/download.png')} width='100%' className='m-auto' />
                        </div>
                        <div className='col-md text-white d-flex'>
                            <div className='m-auto'>
                                <h1 className='font-weight-bold'>Lorem ipsum dolor sit amet.</h1>
                                <h6 className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.</h6>
                                <Link className='btn btn-success px-5 py-3' to={ROUTES.HOME}>Start Now!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shape-wave-top'></div>
            <div className='container'>
                <div className='d-flex flex-column'>
                    <div className='row mb-5'>
                        <div className='col-md'>
                            <div className='rounded-circle bg-main mb-3' style={{ width: '50px', height: '50px' }}></div>
                            <h4 className='font-weight-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                            <h6 className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.</h6>
                        </div>
                        <div className='col-md'>
                            <div className='rounded-circle bg-main mb-3' style={{ width: '50px', height: '50px' }}></div>
                            <h4 className='font-weight-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                            <h6 className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.</h6>
                        </div>
                        <div className='col-md'>
                            <div className='rounded-circle bg-main mb-3' style={{ width: '50px', height: '50px' }}></div>
                            <h4 className='font-weight-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                            <h6 className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.</h6>
                        </div>
                    </div>
                    <div className='text-center mx-auto d-flex flex-column'>
                        <h1 className='font-weight-bold mx-auto' style={{ maxWidth: '700px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h1>
                        <h6 className='text-secondary my-2' style={{ maxWidth: '700px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.
                        </h6>
                        <div className='d-flex my-5'>
                            <Link className='mx-auto btn btn-primary px-5 py-3' to={ROUTES.HOME}>Start Now</Link>
                        </div>
                    </div>
                </div>
                <hr style={{ borderWidth: '2px', borderColor: 'grey' }} />
                <div className='d-flex'>
                    <div className='ml-auto'>
                        <Link className='mx-2 text-decoration-none text-main' to='#'>Syarat & Ketentuan</Link>
                        <Link className='mx-2 text-decoration-none text-main' to='#'>Kebijakan Privasi</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing