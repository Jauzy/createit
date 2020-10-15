import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <div className='text-white' style={{ background: 'linear-gradient(117deg, rgba(35,99,197,1) 0%, rgba(35,134,199,1) 100%)' }}>
            <div className='container py-5'>

                <div className='row'>
                    <div className='col-md-2'>
                        <img src={require('../Modules/images/logo-white.png')} width='200px' className='m-auto' />
                        <h6 className='font-weight-bold mt-3'>Bantuan & Dukungan</h6>
                        <div className='d-flex flex-wrap'>
                            {['facebook', 'instagram', 'whatsapp', 'youtube', 'linkedin', 'line'].map(item => (
                                <Link className=' text-white' to='#'><i className={'fab m-1 fa-' + item} style={{ fontSize: '30px' }} /></Link>
                            ))}
                        </div>
                    </div>
                    <div className='col-md d-flex'>
                        <div className='mx-auto'>
                            <h5>Seputar CreateIt</h5>
                            <Link className=' text-white' to='/seputar-createit/tentang-kami'><h6 className='my-3'>Tentang Kami</h6></Link>
                            <Link className=' text-white' to='#'><h6 className='my-3'>Tim Create It</h6></Link>
                            <Link className=' text-white' to='#'><h6 className='my-3'>Bergabung Menjadi Creator</h6></Link>
                            <h5 className='mt-3'>Seputar CreateIt</h5>
                            <Link className=' text-white' to='/event'><h6 className='my-3'>Events</h6></Link>
                            <Link className=' text-white' to='#'><h6 className='my-3'>Program</h6></Link>
                            <Link className=' text-white' to='#'><h6 className='my-3'>Artikel/Blog</h6></Link>
                        </div>
                    </div>
                    <div className='col-md d-flex'>
                        <div className='mx-auto'>
                            <h5>Layanan Kami</h5>
                            <Link className=' text-white' to='/layanan-kami/project'><h6 className='my-3'>Mulai Projek dengan Creator</h6></Link>
                            <Link className=' text-white' to='/layanan-kami/contest'><h6 className='my-3'>Kontes Desain</h6></Link>
                            <Link className=' text-white' to='#'><h6 className='my-3'>Logo & Branding Identify</h6></Link>
                            <Link className=' text-white' to='#'><h6 className='my-3'>Marketing & Social Media</h6></Link>
                            <Link className=' text-white' to='#'><h6 className='my-3'>Packaging & Label</h6></Link>
                            <Link className=' text-white' to='#'><h6 className='my-3'>Motion Graphic</h6></Link>
                            <Link className=' text-white' to='#'><h6 className='my-3'>Baju & Merchandise</h6></Link>
                            <Link className=' text-white' to='#'><h6 className='my-3'>Desain Pakaian & Merchandise</h6></Link>
                            <Link className=' text-white' to='#'><h6 className='my-3'>Art & Illustration</h6></Link>
                        </div>
                    </div>
                </div>

                <div>
                    <hr style={{ borderWidth: '2px', borderColor: 'white' }} />
                    <div className='d-flex flex-wrap'>
                        <div className='text-white d-flex flex-wrap my-3'>
                            <h5 className='my-auto mr-3'>@{new Date().getFullYear()} CreateIt!</h5>
                            <div className='d-flex my-auto'>
                                <i className='fa fa-phone mr-2 my-auto' />
                                <h6 className='my-auto'>(+62) 123 1234 1234</h6>
                            </div>
                        </div>
                        <div className='ml-auto my-3'>
                            <Link className='mx-2  text-white' to='#'>Syarat & Ketentuan</Link>
                            <Link className='mx-2  text-white' to='#'>Kebijakan Privasi</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer