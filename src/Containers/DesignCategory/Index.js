import React, { useState } from 'react'
import Slider from 'react-slick'
import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import contestAction from '../../Modules/Redux/Actions/Contest'

import ProductCard from './ProductCard'
import CategoryCard from './CategoryCard'
import ImageCard from './ImageCard'

const METHODS = require('../../Constants/Methods')
const CATEGORIES = require('../../Constants/Categories').CategoryList

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
                dots: true
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
    // const arr = [1, 2, 3, 4, 5, 6]

    const [state, setState] = useState({
        selectedCategory: CATEGORIES[0].title, selectedIdx: 0
    })

    const imgcard = [
        {
            btn_label: 'Yuk tingkatkan',
            title: 'Tingkatkan awareness bisnimu dengan make over feeds instagram!',
            img: '471.jpg'
        },
        {
            btn_label: 'Let\'s CreateIt!',
            title: 'New normal wedding dengan digital invitation yang tak terlupakan.',
            img: '3603672.jpg',
            color: 'text-dark'
        },
        {
            btn_label: 'Let\'s CreateIt!',
            title: 'Era ekonomi digital? Siapa takut!',
            subtitle: 'Sudah saatnya bisnismu punya website dengan desain kece!',
            img: '48141.jpg',
            color: 'text-dark'
        },
        {
            btn_label: 'Mulai bikin logomu!',
            title: '\"Duh, bisnis makin banyak saingan!\"',
            subtitle: 'Tenang, dengan brand identity yang kuat dimulai dengan logo yang solid',
            img: '2524.jpg',
            color: 'text-dark'
        }
    ]

    return (
        <LoadingOverlay active={props.loading} spinner text='Loading please wait...'>

            <div className='bg-light'>
                <div className='container py-3 m-auto'>
                    <Slider {...imageSettings}>
                        {/* {arr.map(item => ( */}
                        {imgcard.map(item => (
                            <ImageCard img={require(`../../Modules/images/carousel_Categories/${item.img}`)} title={item.title} subtitle={item.subtitle} btn_label={item.btn_label} color={item.color}/>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className='bg-light'>
                <div className='container-fluid m-auto pb-5' style={{ paddingLeft: '20%' }}>
                    <Slider {...categorySettings}>
                        {CATEGORIES.map((item, idx) => (
                            <CategoryCard title={item.title} onClick={() => setState({ ...state, selectedCategory: item.title, selectedIdx: idx })}
                                selectedCategory={state.selectedCategory} />
                        ))}
                    </Slider>
                </div>
            </div>

            <div className='container m-auto py-5'>
                <div className='row m-auto' style={{ width: '100%' }}>
                    {CATEGORIES[state.selectedIdx].products.map((item, idx) => (
                        <ProductCard contest={item.contest} project={item.project} title={item.title} idx={idx} selectedCategory={state.selectedCategory} icon={item.icon} />
                    ))}
                </div>
            </div>
            {/* <div className='pb-5'>
                {METHODS.useWindowSize().width <= 1200 && <div>
                    <Slider {...productSettings}>
                        {CATEGORIES[state.selectedIdx].products.map((item, idx) => (
                            <ProductCard desc={item.contest}
                                title={item.title} icon='circle' />
                        ))}
                    </Slider>
                </div>}
            </div> */}

        </LoadingOverlay>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.contest.loading,
        error: state.contest.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DesignCategory))