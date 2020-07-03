import React from 'react'

const Button = (props) => {
    const { type, className, style, onClick, label, is_loading, disabled} = props
    return (
        <button disabled={disabled} type={type} className={'btn d-flex flex-row justify-content-center ' + className} style={{ ...style }} onClick={onClick}>
            {is_loading &&
                <div class="spinner-border mr-4" role="status">
                    <span class="sr-only">Loading...</span>
                </div>}
            {label}
        </button>
    )
}

export default Button