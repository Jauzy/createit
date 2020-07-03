import React from 'react'
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

const Card = (props) => {
    return (
        <div className='row'>
            <div className='col-md d-flex'>
                <div className='m-auto'>
                    <img src={require('../Modules/images/download.png')} width='100%'/>
                </div>
            </div>
            <div className='col-md d-flex text-white'>
                <div className='m-auto'>
                    <h1 className='font-weight-bold'>Lorem ipsum dolor amet!</h1>
                    <h6 className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.</h6>
                    <Link className='btn btn-success px-5 py-3' to={ROUTES.HOME}>Start Now!</Link>
                </div>
            </div>
        </div>
    )
}

const Card2 = (props) => {
    return (
        <div className='row'>
            <div className='col-md d-flex'>
                <div className='m-auto'>
                    <img src={require('../Modules/images/Programs 3 Createinsight.svg')} width='100%'/>
                </div>
            </div>
            <div className='col-md d-flex text-white'>
                <div className='m-auto'>
                    <h1 className='font-weight-bold'>Lorem ipsum dolor amet!</h1>
                    <h6 className='my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.</h6>
                </div>
            </div>
        </div>
    )
}

const Homepage = (props) => {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div>

            <div className='bg-main'>
                <div className='container py-5 m-auto'>
                    <Slider {...settings}>
                        {arr.map(item => (
                            <Card />
                        ))}
                    </Slider>
                </div>
            </div>

            <div className='container text-center d-flex flex-column p-5 m-auto'>
                <h1 className='font-weight-bold mx-auto' style={{ maxWidth: '700px' }}>Lorem ipsum dolor amet</h1>
                <h6 className='text-secondary my-2 mx-auto' style={{ maxWidth: '700px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.
                </h6>
            </div>

            <div className='bg-light'>
                <div className='container p-5 m-auto'>
                    <div className='row'>
                        <div className='col-md d-flex'>
                            <div className='m-auto'>
                                <h1 className='font-weight-bold'>Lorem ipsum dolor amet</h1>
                                <h6 className='text-secondary my-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.
                                </h6>
                            </div>
                        </div>
                        <div className='col-md'>

                        </div>
                    </div>
                </div>
            </div>

            <div className='container p-5 m-auto'>
                <div className='row'>
                    <div className='col-md'>

                    </div>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='font-weight-bold'>Lorem ipsum dolor amet</h1>
                            <h6 className='text-secondary my-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container p-5 m-auto'>
                <div className='row'>
                    {arr.map(item => (
                        <div className='col-md-4 my-4'>
                            <div className='rounded-circle bg-main mb-3' style={{ width: '50px', height: '50px' }}></div>
                            <h4 className='font-weight-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                            <h6 className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.</h6>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-main text-white'>
                <div className='container p-5 m-auto'>
                    <div className='row'>
                        <div className='col-md'>
                            <h4 className='font-weight-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                            <h6 className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.</h6>
                        </div>
                        <div className='col-md'>

                        </div>
                    </div>
                </div>
            </div>

            <div className='container p-5 m-auto'>
                <div className='row'>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='font-weight-bold'>Lorem ipsum dolor amet</h1>
                            <h6 className='text-secondary my-2'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at pellentesque ante. Etiam convallis, sapien imperdiet dictum vestibulum, nibh ipsum.
                                </h6>
                            <Link className='btn btn-primary px-5 py-3' to={ROUTES.HOME}>Join Now!</Link>
                        </div>
                    </div>
                    <div className='col-md'>

                    </div>
                </div>
            </div>

            <div className='container p-5 m-auto'>
                <h1 className='text-center font-weight-bold mb-3'>Lorem Ipsum Dolor Sit Amet</h1>
                <div className='d-flex flex-wrap justify-content-center'>
                    {[1, 2, 3, 4].map(item => (
                        <div className='bg-secondary m-2' style={{ borderRadius: '40px', width: '200px', height: '200px' }}>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-main-gradient'>
                <div className='container py-5 m-auto'>
                    <Slider {...settings}>
                        {arr.map(item => (
                            <Card2 />
                        ))}
                    </Slider>
                </div>
            </div>

            <div className='container p-5 d-flex flex-column m-auto'>
                <h1 className='text-center font-weight-bold mb-3'>Lorem Ipsum Dolor Sit Amet</h1>
                <div className='d-flex flex-wrap justify-content-center'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                        <div className='bg-secondary m-2' style={{ borderRadius: '20px', width: '100px', height: '100px' }}>
                        </div>
                    ))}
                </div>
                <div className='mx-auto'>
                    <Link className='btn btn-primary px-5 py-3 m-3' to={ROUTES.HOME}>Join Now!</Link>
                </div>
            </div>

        </div>
    )
}

export default Homepage