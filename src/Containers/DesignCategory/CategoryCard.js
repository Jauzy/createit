import React from 'react'

const CategoryCard = (props) => {
    const { title, onClick, selectedCategory } = props
    return (
        <div className={'m-3 p-3 text-center font-weight-bold btn-category' + (selectedCategory == title ? '-active' : '')} onClick={onClick}>
            {title}
        </div>
    )
}

export default CategoryCard