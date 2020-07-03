import React from 'react'

const ImageCard = (props) => {
    return (
        <div className='custom-slick-paginate-parent'>
            <div className='custom-slick-paginate-image' style={{ width: '100%' }}>
                <img src={require('../../Modules/images/906560.png')} width='100%' style={{ objectFit: 'cover' }} />
            </div>
            <h2 className='custom-slick-paginate-text' style={{ maxWidth: '300px' }}>Lorem Ipsum Dolor Sit Amet!</h2>
        </div>
    )
}

export default ImageCard