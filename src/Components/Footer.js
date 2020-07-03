import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    return (
        <div className='bg-main text-white pt-5'>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6 mb-5'>
                        <div className='d-flex flex-row flex-wrap align-items-center mb-3'>
                            <img src={require('../Modules/images/logo-white.png')} width='200px' />
                            <i className='fa fa-instagram font-size-36 mx-3' />
                            <i className='fa fa-twitter font-size-36 mx-3' />
                            <i className='fa fa-youtube font-size-36 mx-3' />
                            <i className='fa fa-facebook font-size-36 mx-3' />
                        </div>
                        <small>
                            <p>
                                Create It adalah Platform Crowdsourcing Jasa Kreatif Desain Grafis dengan Layanan yang Menghubungkan #Creator untuk kebutuhan bisnis dan kreatif sehari-hari.
                            </p>
                            <p>
                                Misi kami adalah menjadi Creative Ecosystem Builder yang mengintegrasikan pelaku industri kreatif di Indonesia. Dengan membuat komunitas dan jejaring bagi Pekerja Kreatif dan Brand Lokal.
                            </p>
                            <p>
                                Selain itu, kami aktif membuat program-program kreatif baik bagi pemilik brand lokal maupun pekerja kreatif dalam meningkatkan skill dalam bersaing di Industri Digital Kreatif.
                            </p>
                        </small>
                    </div>
                    <div className='col-md mb-5'>
                        <h5 className='font-weight-bold mb-4'>LAYANAN DESAIN</h5>
                        <small>Logo & Branding Identity</small><br />
                        <small>Marketing & Social Media</small><br />
                        <small>Packaging & Label</small><br />
                        <small>Motion Graphic</small> <br />
                        <small>Baju & Merchandise</small><br />
                        <small>Kebutuhan Personal</small><br />
                    </div>
                    <div className='col-md'>
                        <h5 className='text-white font-weight-bold'>HUBUNGI KAMI</h5>
                        <small>Email: info.createitapp@gmail.com</small><br />
                        <small>Whatsapp Bussiness: +62 858-5871-4831</small><br />
                    </div>
                    <div className='col-md-12 pt-3'>
                        <h6 className='m-auto text-center font-montserrat font-weight-bold'>&copy; 2020 Create It Digital Creative Commerce</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer