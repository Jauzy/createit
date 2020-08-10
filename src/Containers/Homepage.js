import React, { useRef } from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

const ROUTES = require('../Constants/Routes')

var settings = {
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
};

var settings2 = {
    slidesToShow: 4,
    focusOnSelect: true,
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Card = (props) => {
    const { btn_label, subtitle, Title, img } = props
    return (
        <div className='row'>
            <div className='col-md-4 d-flex'>
                <div className='m-auto'>
                    <img src={require('../Modules/images/' + img)} width='100%' />
                </div>
            </div>
            <div className='col-md d-flex text-white'>
                <div className='m-auto'>
                    <h1 className='font-weight-'><Title /></h1>
                    <h6 className='my-3' dangerouslySetInnerHTML={{ __html: subtitle }}></h6>
                    <Link className='btn btn-success px-5 py-3' to={ROUTES.DESIGNCATEGORY} style={{ background: '#20C835' }}>{btn_label}</Link>
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
                        {item.img && <img src={require('../Modules/images/' + item.img)} width='100%' style={{ maxWidth: '400px', maxWidth: '400px', objectFit: 'cover' }} />}
                    </div>
                </div>
                <div className='col-lg d-flex text-white my-2'>
                    <div className='m-auto'>
                        <h1 className='font-weight-bold'>{item.title}</h1>
                        <h6 className='my-3'>{item.desc}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CATEGORIES = require('../Constants/Categories').CategoryList

const Homepage = (props) => {
    const partner = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    const ref = useRef(null)
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

    const howItWorks = [
        {
            title: 'Cari Kategori',
            subtitle: () => (<h6>Cari kebutuhan kamu di daftar kategori Create It!</h6>),
            img: 'Cari Kategori.svg'
        },
        {
            title: 'Pilih Layanan',
            subtitle: () => (
                <div>
                    Butuh pilihan bervariasi? Mulai sayembara dengan <strong>Create Contest!</strong><br /><br /> Atau diskusikan projectmu dengan creator terpilih melalui <strong>Create Project!</strong>
                </div>
            ),
            img: 'Pilih Layanan.svg'
        },
        {
            title: 'Isi Brief Kreatif',
            subtitle: () => (<h6>Tuang semua ide kreatifmu dalam brief supaya creator paham keinginanmu!</h6>),
            img: 'Isi Brief Kreatif.svg'
        },
        {
            title: 'Bayar dan Tunggu',
            subtitle: () => (<h6>Ikuti panduan pembayaran dan amati proses pengerjaan pesanan kamu sesuai waktu yang kamu inginkan!</h6>),
            img: 'Bayar dan Tunggu.svg'
        },
        {
            title: 'Desainmu Selesai!',
            subtitle: () => (<h6>Kamu bisa langsung unduh dan pakai hasil karya dari creator untuk kebutuhanmu!</h6>),
            img: 'Desainmu Selesai.svg'
        },
    ]

    const carousel = [
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

            <div className='bg-light'>
                <div className='bg-light'>
                    <div className='container-fluid m-auto py-5' style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                        <h2>Cari Kontes & Projek</h2>
                        <Slider {...settings2}>
                            {[1, 2, 3, 4, 5].map((item, idx) => (
                                <div className='p-3'>
                                    <div class="card shadow">
                                        {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                                        <img style={{ width: '100%' }} src={"https://www.24local.com.my/wp-content/uploads/2019/03/1-780x405.jpg"} />
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">Company Logo</h5>
                                            <h6 className='text-secondary'>Logo & Branding / <strong>Logo</strong></h6>
                                            <p class="card-text">Desain logo perusahaan.</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className='container px-5 pt-5 m-auto'>
                <div className='row'>
                    <div className='col-md-auto'>
                        <div className='m-auto'>
                            <h1 className='font-weight-bold'>Belum pernah bikin desain di CreateIt?<br />Caranya mudah loh!</h1>
                            <h6 className='text-secondary my-2'>
                                Gaperlu lama-lama, cuma dalam <strong>5 Tahap</strong> kamu bisa dapat desain kamu
                            </h6>
                        </div>
                    </div>
                    <div className='col-md d-flex'>
                    </div>
                </div>
            </div>

            <div className='container p-5 m-auto' id='cara-kerja'>
                <div className='row'>
                    <div className='col-md'>
                        <div className='row'>
                            {howItWorks.map((item, index) => (
                                <div className='col-md-6 my-4'>
                                    <div className='col-md mb-5 d-flex'>
                                        <img src={require('../Modules/images/Step/' + item.img)} width='35%' className='m-auto' />
                                    </div>
                                    <div className='d-flex mb-3'>
                                        <div className='rounded-circle bg-main text-white d-flex' style={{ width: '50px', height: '50px' }}><h3 className='m-auto'>{index + 1}</h3></div>
                                        <h4 className='font-weight-bold my-auto ml-3'>{item.title}</h4>
                                    </div>
                                    <h6 className='text-secondary'><item.subtitle /></h6>
                                </div>
                            ))}
                            <div className='col-md-6 d-flex'>
                                <div className='m-auto'>
                                    <Link className='btn btn-outline-main px-4 py-2 my-5' to={ROUTES.DESIGNCATEGORY}>Coba Yuk!</Link>
                                    <img src={require('../Modules/images/laptop.png')} width='100%' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-main text-white'>
                <div className='container p-5 m-auto'>
                    <div className='row d-flex mt-5'>
                        <div className='col-lg mt-3'>
                            <h4 className='font-weight-bold'>Buat project mu lebih impactful dengan layanan crowdsourcing digital-kreatif</h4>
                            <h6 className=''>Segala kebutuhan projectmu solusinya ada di Create It!</h6>
                            <div className='d-flex flex-wrap'>
                                {CATEGORIES.map((item, index) => (
                                    <div className='m-3 d-flex flex-column justify-content-center' style={{ maxWidth: '60px', cursor: 'pointer' }} onClick={() => ref.current.slickGoTo(index)}>
                                        <div style={{ width: '50px', height: '50px' }}>
                                            <img src={require(`../Modules/Icon/${item.icon}`)} width='100%'/>
                                        </div>
                                        <h6 className='text-center mt-2 font-weight-bold text-light mb-auto'>{item.title}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-lg'>
                            <Slider {...settings} ref={ref}>
                                {CATEGORIES.map((item, index) => (
                                    <div className='p-3 d-flex' style={{ height: '100%' }}>
                                        <div className='px-5 py-3 bg-light m-auto' style={{ borderRadius: '20px' }}>
                                            <div className='row d-flex align-items-center'>
                                                <div className='col-md-5'>
                                                    {/* <img src={require('../Modules/images/brief-mascot.png')} width='100%' /> */}
                                                    {/* <svg src={require(`../Modules/Icon/${item.icon}`)} className='icon' width='100%' /> */}
                                                    <object type="image/svg+xml" data={require(`../Modules/Icon/${item.icon}`)} className="icon"></object>
                                                </div>
                                                <div className='col-md text-main'>
                                                    <h2>{item.title}</h2>
                                                </div>
                                            </div>
                                            <div className='text-secondary mt-3'>
                                                {item.subtitle}
                                            </div>
                                            <div className='d-flex flex-wrap'>
                                                {item.products.slice(0, 7).map(item => (
                                                    <Link className='m-3 d-flex flex-column justify-content-center' style={{ maxWidth: '60px', cursor: 'pointer' }} to={ROUTES.DESIGNCATEGORY}>
                                                        <div style={{ width: '40px', height: '40px'}}>
                                                            <img src={require(`../Modules/Icon/${item.icon}`)} width='100%' style={{ color:"#2386C7"}}/>
                                                        </div>
                                                        <h6 className='text-center mt-2 font-weight-bold text-main mb-auto'>{item.title}</h6>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container p-5 m-auto'>
                <div className='row'>
                    <div className='col-md-4 my-5'>
                        {/* <img src={require('../Modules/images/brief-mascot.png')} width='100%' /> */}
                        <img src={require('../Modules/images/207.jpg')} width='100%' />
                    </div>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='font-weight-bold'>Kamu Creator dan pingin pamer skill kamu? Tunggu apa lagi?</h1>
                            <h6 className='text-secondary my-2'>
                                Perluas portfolio kamu dan kembangkan industri ekonomi kreatif bersama-sama di Create it!
                            </h6>
                            <Link className='btn btn-primary px-5 py-3' to={ROUTES.REGISTER}>Yuk jadi Creator di CreateIt!</Link>
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

            <div className='container p-5 d-flex flex-column m-auto'>
                <h1 className='text-center font-weight-bold mb-3'>Creative Ecosystem Partner</h1>
                <div className='d-flex flex-wrap justify-content-center'>
                    {partner.map((item, index) => (
                        <img src={require(`../Modules/images/partner/partner${item}.svg`)} className='m-2' style={{ borderRadius: '20px', maxWidth: '100px' }} />
                    ))}
                </div>
                <div className='mx-auto'>
                    <Link className='btn btn-primary px-5 py-2 m-3' to={ROUTES.DESIGNCATEGORY}>Join Now!</Link>
                </div>
            </div>

        </div>
    )
}

export default Homepage