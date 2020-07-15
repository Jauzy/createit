import React from 'react'

const Chatroom = props => {
    return (
        <div>
            <div className='container py-4'>
                <div className='d-flex flex-wrap'>
                    <img width='50' height='50' className='rounded-circle bg-main mr-2' />
                    <div className='ml-2'>
                        <div className='d-flex'>
                            <h6 className='my-auto font-weight-bold'>Weeb Developer</h6>
                        </div>
                        <small className='w-100'>Sedang online <i className='fa fa-circle text-success ml-2'/></small>
                    </div>
                </div>
            </div>
            <div className='bg-light'>
                <div className='container py-5'>
                    <div style={{ height: '700px', overflowY: 'scroll' }}>
                        {[1, 2, 3, 4, 5].map(item => (
                            <div className='d-flex flex-wrap my-5'>
                                <img width='50' height='50' className='rounded-circle bg-main mr-2' />
                                <div className='ml-2'>
                                    <div className='d-flex'>
                                        <h6 className='my-auto font-weight-bold'>Weeb Developer</h6>
                                        <small className='my-auto text-secondary ml-2'>15m</small>
                                    </div>
                                    <small className='w-100'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='d-flex mt-3'>
                        <textarea class="form-control mt-2 my-auto" placeholder='Tuliskan komentar...' rows="2"></textarea>
                        <div className='my-auto btn btn-outline-main ml-3'>
                            <i className='fa fa-paper-plane' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatroom