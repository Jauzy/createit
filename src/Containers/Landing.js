import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Footer } from '../Components/Index'

const ROUTES = require('../Constants/Routes')

const Landing = (props) => {
    
    var settings = {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
    };

    return (
        <div>
            <div className='bg-main'>
                <div className='p-4 d-flex'>
                    <img src={require('../Modules/images/logo-white.png')} className='m-auto' width='200px' />
                </div>
                <div className='container py-5'>
                    <Slider {...settings}>
                        <div>
                            <div className='row'>
                                <div className='col-md text-white d-flex'>
                                    <div className='m-auto'>
                                        <h1 className='font-weight-bold'>Bisnis Aman, Modal Rebahan</h1>
                                        <h6 className='my-3'>Desain Keren Kini Bisa Kamu Dapat Sesuai Dengan budget, Langsung dari jejaring kreatif kami. Ohiya, Jangan Khawatir... Karena kita tau #ClientButuhKepastian , Di Create It aman, bergaransi, dan bisa bikin kontes juga lho.</h6>
                                        <h6 className='my-5'><strong>#DiCreateitAja</strong></h6>
                                        <Link className='btn btn-success px-5 py-3' to={ROUTES.DESIGNCATEGORY}>Pelajari Selengkapnya!</Link>
                                    </div>
                                </div>
                                <div className='col-md d-flex'>
                                    <img src={require('../Modules/images/rebahan-1.png')} width='75%' className='m-auto d-none d-md-block' />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='row'>                                
                                <div className='col-md text-white d-flex'>
                                    <div className='m-auto'>
                                        <h1 className='font-weight-bold'>Sekarang Jamane Remote Working!</h1>
                                        <h6 className='my-3'>#DiRumahAja, Invoice Ngalir Bareng Create It.</h6>
                                        <h6 className='my-5'><strong>#DiCreateitAja</strong></h6>
                                        <Link className='btn btn-success px-5 py-3' to={ROUTES.HOME}>Let's Create with Create It!</Link>
                                    </div>
                                </div>
                                <div className='col-md d-flex'>
                                    <img src={require('../Modules/images/rebahan.png')} width='75%' className='m-auto  d-none d-md-block' />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className='container mt-5'>
                <div className='d-flex flex-column'>
                    <div className='text-center mx-auto mt-5 d-flex flex-column'>
                        <h1 className='font-weight-bold mx-auto' style={{ maxWidth: '700px' }}>Ada Apa dengan Create it ?</h1>
                        <h6 className='text-secondary mt-2' style={{ maxWidth: '550px' }}>
                            Dengan Create it segala kebutuhan digital kreatifmu bisa diselesaikan oleh creator terbaik sesuai keinginan <strong><em>kapanpun</em></strong> dan <strong><em>di manapun</em></strong> !
                        </h6>
                    </div>
                    <div className='col-md d-flex mb-5'>
                        <img src={require('../Modules/images/3369515.jpg')} width='100%' style={{ maxWidth: '600px' }} className='m-auto' />
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-light'>
                <div className='bg-light'>
                    <div className='text-center mx-auto d-flex flex-column'>
                         <div className='text-center mx-auto my-5 d-flex flex-column'>
                            <h4 className='font-weight-bold mx-auto' style={{ maxWidth: '700px' }}>Butuh desain logo ? Atau butuh desain aplikasi ?<br />Atau mungkin desain aplikasi lainnya ? Di CreateIt kamu bisa :</h4>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className='col-md-4 col-12 my-4'>
                                <div className='col-md d-flex'>
                                    <img src={require('../Modules/images/createproject.png')} width='60%' className='m-auto' />
                                </div>
                                <h4 className='font-weight-bold mt-4'>Create Project !</h4>
                                <h6 className='text-secondary'>Diskusikan project impianmu bersama creator terpilih untuk mendapatkan hasil terkece !</h6>
                            </div>
                            <div className='col-md-4 col-12 my-4'>
                                <div className='col-md d-flex'>
                                    <img src={require('../Modules/images/jampasir.png')} width='100%' className='m-auto' />
                                </div>
                                <h4 className='font-weight-bold mt-5'>Create Contest !</h4>
                                <h6 className='text-secondary'>Battle royale untuk para creator berkelas adu pamer kemampuannya dan pilih hasil karya yang kamu paling suka sebagai pemenang !</h6>
                            </div>
                        </div>
                        <div className='d-flex my-5'>
                            <Link className='mx-auto btn btn-primary px-5 py-3' to={ROUTES.HOME}>Let's Create it !</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Landing