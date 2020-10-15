import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Slider from 'react-slick'

const ROUTES = require('../../Constants/Routes')

var settings = {
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
};

const Card = (props) => {
    const { btn_label, subtitle, Title, img } = props
    return (
        <div className=''>
            <div className='row'>
                <div className='col-md-4 d-flex'>
                    <div className='m-auto pt-5'>
                        <img src={require('../../Modules/images/' + img)} width='100%' />
                    </div>
                </div>
                <div className='col-md d-flex text-white'>
                    <div className='m-auto pt-5'>
                        <h1 className='font-weight-'><Title /></h1>
                        <h6 className='my-3' dangerouslySetInnerHTML={{ __html: subtitle }}></h6>
                        <Link className='btn btn-success px-5 py-3' to={ROUTES.DESIGNCATEGORY} style={{ background: '#20C835' }}>{btn_label}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Card2 = (props) => {
    const { item } = props
    return (
        <div className=''>
            <div className='row'>
                <div className='col-lg d-flex my-2'>
                    <div className='m-auto'>
                        {item.img && <img src={require('../../Modules/images/' + item.img)} width='100%' style={{ maxWidth: '400px', maxWidth: '400px', objectFit: 'cover' }} />}
                    </div>
                </div>
                <div className='col-lg d-flex text-white my-2'>
                    <div className='m-auto'>
                        <h1 className='font-weight-bold'>{item.title}</h1>
                        <h6 className='my-3'>{item.desc}</h6>
                        <Link className='btn btn-success px-5 py-3' to={ROUTES.DESIGNCATEGORY} style={{ background: '#20C835' }}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MainEvent = (props) => {
    const porto = [
        {
            title: 'CreateInsight with Menjadi Manusia',
            desc: 'Create It berkesempatan berkolaborasi dengan Menjadi Manusia. Sebuah alternatif media dan social-platform untuk mereka yang ingin berbagi & mendengar cerita-cerita tentang kehidupan dari berbagai sudut pandang. Bersama Co-Founder Menjadi Manusia, Kami membahas tentang bagaimana memanfaatkan situasi krisis di kala pandemi. Untuk kreator, yang #DiRumahAja',
            img: 'Programs 3 Createinsight.svg'
        },
        {
            title: 'Startupweekend Global COVID-19 Online',
            desc: 'Global Online Startup Weekend covid-19 yang diselenggarakan oleh Techstars, sebuah platform investasi dan inovasi global. Saat ini sudah ada lebih dari 60 negara termasuk Indonesia yang bergabung menjalankan program berskala dunia ini.',
            img: 'Programs 2 Startupweekend COVID-19.jpg'
        },
        {
            title: 'CreateInsight with GRAB',
            desc: 'Development and Community Hub dari Create It berkesempatan berkolaborasi dengan GRAB. Bersama Business Development GRAB, William Panjaitan, Beliau telah membagikan pengalaman, sudut pandang, dan insight terkait Startup & It\'s Social Impact dengan indikator yang merujuk kepada idea validation dan social impact yang sudah dilakukan oleh Grab dari waktu ke waktu',
            img: 'program4.svg'
        },
        {
            title: 'DiLo Design Class',
            desc: 'DILo Design Class kali ini mengangkat tema The Strenght of Design needed for Hipster, Hacker, and Hustler. Karena saat ini desain yang menarik, efektif dalam menunjang kesuksesan dan berkembangnya startup.',
            img: 'Programs 1  Dilo Design class.jpg'
        }
    ]

    const carousel = [
        {
            btn_label: 'Sign Up',
            title: () => (
                <h2 className=''>Berkarya Bermakna dikala Pandemi</h2>
            ),
            subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus lacinia purus non accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos`,
            img: '4842.jpg'
        },
        {
            btn_label: 'Yuk langsung mulai!',
            title: () => (
                <h2 className=''>Kamu butuh desain?<br /> CreateIt punya promo loh cuma untuk kamu!<br />Diskon 30% <h className='font-weight-normal'>untuk setiap kontes!</h></h2>
            ),
            subtitle: `*Berlaku s.d 31 Agustus 2020`,
            img: 'rebahan-1.png'
        },
        {
            btn_label: 'Let\'s CreateIt!',
            title: () => (
                <h1 style={{ maxWidth: '600px' }}>Cari solusi desain kamu hanya dengan satu klik!</h1>
            ),
            subtitle: `Segala kebutuhan digital-kreatifmu bisa diselesaikan oleh para creator terbaik sesuai <strong><em>budget</em></strong> dan <strong><em>keinginanmu, kapanpun</em></strong> dan <strong><em>di manapun!</em></strong>`,
            img: 'rebahan.png'
        }
    ]

    const [state, setState] = useState({
        activeSection: ''
    })
    
    const setActiveSection = (activeSection) => {
        setState({ ...state, activeSection })
    }

    useEffect(() => {
    }, [])

    return (
        <div>
            <div className='bg-main'>
                <div className='container py-5 m-auto'>
                    <Slider {...settings}>
                        {carousel.map(item => (
                            <Card btn_label={item.btn_label} subtitle={item.subtitle} Title={item.title} img={item.img} />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='text-main font-weight-bold'>Lorem Ipsum Dolor Sit Amet Consectetur!</h1>
                            <h6 className='mt-3 mb-5 text-secondary'>praesent luctus ante id orci venenatis efficitur at in dui</h6>
                            <h5 className='text-main font-weight-bold'>Lorem Ipsum</h5>
                        </div>
                    </div>
                    <div className='col-md d-flex'>
                        <img src={require('../../Modules/images/5267.jpg')} width='100%' className='m-auto d-none d-md-block' />
                    </div>
                </div>
            </div>
            <div className='bg-light'>
                <div className='mb-5'>
                    <div className='d-flex flex-column'>
                        <div className='text-center mx-auto mt-5 d-flex flex-column'>
                            <h1 className='font-weight-bold mx-auto' style={{ maxWidth: '700px' }}>Lorem Ipsum Dolor Sit Amet</h1>
                            <h6 className='text-secondary mt-2' style={{ maxWidth: '550px' }}>
                                Nam eu ipsum sed libero pulvinar eleifend eu sed diam. Praesent sollicitudin bidendum feugiat.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='mb-5'>
                        <div className='row justify-content-md-center'>
                            <div className='col-md-3 col-12 my-4 mr-5' style={{ borderRight: '1px solid #BDC3C7'}}>
                                <div className='rounded-circle bg-main text-white d-flex' style={{ width: '50px', height: '50px' }}></div>
                                <h4 className='font-weight-bold mt-4'>Preasent lobortis</h4>
                                <h6 className='text-secondary mt-3'>Nam eu ipsum sed libero pulvinar eleifend eu sed diam. Praesent sollicitudin bidendum feugiat.</h6>
                            </div>
                            <div className='col-md-3 col-12 my-4 mr-5' style={{ borderRight: '1px solid #BDC3C7'}}>
                                <div className='rounded-circle bg-main text-white d-flex' style={{ width: '50px', height: '50px' }}></div>
                                <h4 className='font-weight-bold mt-4'>Preasent lobortis</h4>
                                <h6 className='text-secondary mt-3'>Nam eu ipsum sed libero pulvinar eleifend eu sed diam.</h6>
                            </div>
                            <div className='col-md-3 col-12 my-4'>
                                <div className='rounded-circle bg-main text-white d-flex' style={{ width: '50px', height: '50px' }}></div>
                                <h4 className='font-weight-bold mt-4'>Preasent lobortis</h4>
                                <h6 className='text-secondary mt-3'>Nam eu ipsum sed libero pulvinar eleifend eu sed diam.</h6>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <div className='container pb-5'>
                <div className='row'>
                    <div className='col-md d-flex'>
                        <img src={require('../../Modules/images/3507498.jpg')} width='80%' className='m-auto d-none d-md-block' />
                    </div>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='text-main font-weight-bold'>Lorem Ipsum Dolor Sit Amet Consectetur!</h1>
                            <h6 className='mt-3 mb-5 text-secondary'>praesent luctus ante id orci venenatis efficitur at in dui</h6>
                            <h5 className='text-main font-weight-bold'>Lorem Ipsum</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-main-gradient'>
                <div className='container py-5 m-auto'>
                    <Slider {...settings}>
                        {porto.map(item => (
                            <Card2 item={item} />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='text-main font-weight-bold'>Lorem Ipsum Dolor Sit Amet Consectetur!</h1>
                            <h6 className='mt-3 mb-5 text-secondary'>praesent luctus ante id orci venenatis efficitur at in dui</h6>
                            <h5 className='text-main font-weight-bold'>Free Consult Now</h5>
                        </div>
                    </div>
                    <div className='col-md d-flex'>
                        <img src={require('../../Modules/images/5283.jpg')} width='100%' className='m-auto d-none d-md-block' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainEvent