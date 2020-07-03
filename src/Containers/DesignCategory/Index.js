import React from 'react'
import Slider from 'react-slick'

import ProductCard from './ProductCard'
import CategoryCard from './CategoryCard'
import ImageCard from './ImageCard'

const METHODS = require('../../Constants/Methods')

var imageSettings = {
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    appendDots: dots => (
        <div
            style={{
            }}
        >
            <ul className='custom-slick-paginate'> {dots} </ul>
        </div>
    ),
};

var categorySettings = {
    focusOnSelect: true,
    slidesToShow: 5,
    arrows: false,
    dots: false,
    autoplay: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

var productSettings = {
    focusOnSelect: true,
    slidesToShow: 2,
    style: { marginLeft: '-10%', marginRight: '-10%' },
    arrows: false,
    dots: true,
    autoplay: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 1,
                style: null
            }
        },
    ]
};

var productImageSettings = {
    slidesToShow: 1,
    sildeToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
};

const DesignCategory = (props) => {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div>

            <div className='bg-light'>
                <div className='container py-3 m-auto'>
                    <Slider {...imageSettings}>
                        {arr.map(item => (
                            <ImageCard />
                        ))}
                    </Slider>
                </div>
            </div>

            <div className='bg-light'>
                <div className='container-fluid m-auto pb-5' style={{ paddingLeft: '20%' }}>
                    <Slider {...categorySettings}>
                        {arr.map(item => (
                            <CategoryCard />
                        ))}
                    </Slider>
                </div>
            </div>

            <div className='container m-auto py-5'>
                {METHODS.useWindowSize().width > 1200 && <table className='toggle-table' style={{ width: '100%' }}>
                    <tr>
                        <ProductCard />
                        <ProductCard />
                    </tr>
                    <tr>
                        <ProductCard />
                        <td rowSpan='2' className='text-secondary' height={{ width: '500px' }}>
                            <div>
                                <div className='d-flex'>
                                    <img src={require('../../Modules/images/Bitmap.png')} height='600px' className='m-auto' />
                                </div>
                                <h5 className=''>Designed by</h5>
                                <h5 className='font-weight-bold'>Weeb Developer</h5>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <ProductCard />
                    </tr>
                    <tr>
                        <ProductCard img={require('../../Modules/images/download.png')} />
                        <ProductCard />
                    </tr>
                </table>}
                {METHODS.useWindowSize().width <= 1200 && <div>
                    <Slider {...productSettings}>
                        {arr.map(item => (
                            <ProductCard />
                        ))}
                    </Slider>
                </div>}
            </div>

        </div>
    )
}

export default DesignCategory