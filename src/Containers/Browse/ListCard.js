import React from 'react'

const ListCard = props => {
    return (
        <div className='' data-toggle='modal' data-target='#design'>
            <div className='row'>
                <div className='col-md-auto'>
                    <img width='100%' className='rounded-lg bg-light' src={require('../../Modules/images/brief-mascot.png')} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h6 className='text-white bg-main py-2 px-3 position-absolute' style={{top:'0'}}>IDR. 200k</h6>
                </div>
                <div className='col-md d-flex'>
                    <div className='my-auto'>
                        <div className='d-flex flex-wrap'>
                            <h4 className='my-auto'>Project X</h4>
                            <small className='my-auto ml-3'>oleh Web Developer</small>
                        </div>
                        <p className='text-secondary'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className='col-md d-flex text-secondary'>
                    <div className='m-auto'>
                        <div className='d-flex my-2'>
                            <i className='fa fa-circle mr-3' style={{ fontSize: '30px' }} />
                            <h5 className='my-auto'>Lorem Ipsum</h5>
                        </div>
                        <div className='d-flex my-2'>
                            <i className='fa fa-circle mr-3' style={{ fontSize: '30px' }} />
                            <h5 className='my-auto'>Lorem Ipsum</h5>
                        </div>
                        <div className='d-flex my-2'>
                            <i className='fa fa-circle mr-3' style={{ fontSize: '30px' }} />
                            <h5 className='my-auto'>Lorem Ipsum</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ListCard