import React from 'react'

const ImageCard = (props) => {
    const { img, btn_label, title, subtitle, color } = props
    
    return (
        <div className='custom-slick-paginate-parent'>
            <div className='custom-slick-paginate-image' style={{ width: '100%' }}>
                <img src={img} width='100%' style={{ objectFit: 'cover' }} />
            </div>
            <div>
                <h2 className={`custom-slick-paginate-text back ${color}`} style={{ maxWidth: '400px' }}>{title}</h2>
                <h5 className={`custom-slick-paginate-text back ${color}`}>{subtitle}</h5>
            </div>
        </div>
    )
}

export default ImageCard