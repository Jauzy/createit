import React from 'react'

const ImageCard = (props) => {
    const { img, btn_label, title, subtitle } = props
    
    return (
        <div className='custom-slick-paginate-parent'>
            <div className='custom-slick-paginate-image' style={{ width: '100%' }}>
                <img src={img} width='100%' style={{ objectFit: 'cover' }} />
            </div>
            <div className='custom-slick-paginate-text'>
                <h2 style={{ maxWidth: '400px' }}>{title}</h2>
                <h5>{subtitle}</h5>
            </div>
        </div>
    )
}

export default ImageCard