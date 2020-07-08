import React from 'react'
import {Link} from 'react-router-dom'

const Subfooter = (props) => {
    return (
        <div>
            <hr />
            <div className='d-flex flex-wrap'>
                <div className='text-secondary d-flex flex-wrap my-3'>
                    <h5 className='my-auto mr-3'>@{new Date().getFullYear()} CreateIt!</h5>
                    <div className='d-flex my-auto'>
                        <i className='fa fa-phone mr-2 my-auto' />
                        <h6 className='my-auto'>(+62) 123 1234 1234</h6>
                    </div>
                </div>
                <div className='ml-auto my-3'>
                    <Link className='mx-2 text-decoration-none text-main' to='#'>Syarat & Ketentuan</Link>
                    <Link className='mx-2 text-decoration-none text-main' to='#'>Kebijakan Privasi</Link>
                </div>
            </div>
        </div>
    )
}

export default Subfooter