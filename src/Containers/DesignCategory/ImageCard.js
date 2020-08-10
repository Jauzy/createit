import React from 'react'

const ImageCard = (props) => {
    const { img, btn_label, title, subtitle } = props
    
    return (
        <div className='custom-slick-paginate-parent'>
            <div className='custom-slick-paginate-image' style={{ width: '100%' }}>
                <img src={img} width='100%' style={{ objectFit: 'cover' }} />
            </div>
            {/* <h2 className='custom-slick-paginate-text' style={{ maxWidth: '300px' }}>Lorem Ipsum Dolor Sit Amet!</h2> */}
            <div className='custom-slick-paginate-text'>
                <h2 style={{ maxWidth: '500px' }}>{title}</h2>
                <h5>{title}</h5>
            </div>
            {/* <h2 className='custom-slick-paginate-text' style={{ maxWidth: '750px' }}>{title}</h2>
            <h4 className='custom-slick-paginate-text' style={{ maxWidth: '750px' }}>{subtitle}</h4> */}
        </div>
    )
}

export default ImageCard