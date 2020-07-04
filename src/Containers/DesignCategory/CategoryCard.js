import React from 'react'

const CategoryCard = (props) => {
    const { title, onClick } = props
    return (
        <div className='btn-category m-3 p-3 text-center font-weight-bold' onClick={onClick}>
            {title}
        </div>
    )
}

export default CategoryCard