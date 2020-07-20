import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';
import { Link, withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const Design = props => {
    const [state, setState] = useState({
        mode: 'Grid', filter: 'Active'
    })

    const filterBtn = [
        { title: 'Active', quantity: 0 },
        { title: 'Unrated', quantity: 0 },
        { title: '1-2 Stars', quantity: 0 },
        { title: '3-4 Stars', quantity: 0 },
        { title: 'Trash', quantity: 0 },
    ]

    return (
        <div>

            <div className='container pt-5 pb-4'>
                <h4>Entries</h4>
                <div className='d-flex flex-wrap'>
                    <div className='d-flex flex-wrap mr-auto justify-content-center'>
                        {filterBtn.map(item => (
                            <div className={'rounded-lg d-flex align-items-center justify-content-center btn m-1 btn-category' + (state.filter == item.title ? '-active' : '')}
                                style={{ width: '120px', height: '50px' }} onClick={() => setState({ ...state, filter: item.title })}>
                                {item.title} ({item.quantity})
                            </div>
                        ))}
                    </div>
                    <div className='d-flex ml-auto flex-wrap justify-content-center'>
                        <div className='rounded-lg btn btn-category m-1 d-flex align-items-center justify-content-center'
                            style={{ height: '50px', width: '50px' }} onClick={() => setState({ ...state, mode: 'Grid' })}>
                            <i className='fa fa-th-large' style={{ fontSize: '30px' }} />
                        </div>
                        <div className='rounded-lg btn btn-category m-1 d-flex align-items-center justify-content-center'
                            style={{ height: '50px', width: '50px' }} onClick={() => setState({ ...state, mode: 'List' })}>
                            <i className='fa fa-th-list' style={{ fontSize: '30px' }} />
                        </div>
                    </div>
                </div>
            </div>

            {state.mode == 'Grid' && <div className='container pb-5'>
                <div className='d-flex flex-wrap justify-content-center'>
                    {[1, 2, 3, 4, 5].map(item => (
                        <div className='m-2' style={{ maxWidth: '250px', cursor: 'pointer' }} data-toggle='modal' data-target='#design'>
                            <h6 className='text-secondary'>#1 oleh Weeb Developer</h6>
                            <img width='100%' src={require('../../../Modules/images/906560.png')} style={{ width: '250px', height: '250px', objectFit: 'cover' }} className='rounded-lg'/>
                            <div className='mt-2 d-flex justify-content-center'>
                                <StarRatings
                                    rating={2.403}
                                    starDimension="30px"
                                    starSpacing="5px"
                                    starRatedColor='#F8B00E'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>}

            {state.mode == 'List' && <div className='container pb-5'>
                <div className='' data-toggle='modal' data-target='#design'>
                    <div className='row'>
                        <div className='col-md-auto'>
                            <img width='100%' src={require('../../../Modules/images/906560.png')} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
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
            </div>}

            <div class="modal fade" id="design" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style={{ border: 'unset' }}>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i className='far fa-times-circle text-main' style={{ fontSize: '40px', opacity: '1' }} />
                            </button>
                        </div>
                        <div class="modal-body p-0 pr-3 rounded-lg bg-white border shadow">
                            <div className='row'>
                                <div className='col-md bg-light rounded-lg p-4 d-flex border'>
                                    <img className='rounded-lg m-auto' src={require('../../../Modules/images/brief-mascot.png')} style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'cover' }} />
                                </div>
                                <div className='col-md-4 px-4 py-4 rounded-lg'>
                                    <h2 className='mb-1'>#1</h2>
                                    <h6 className='font-weight-bold text-secondary mb-0'>bersama <strong className='text-main'>Weeb Developer</strong></h6>
                                    <small className='text-secondary font-weight-bold'>kemarin</small>
                                    <hr style={{ borderWidth: '2px' }} />
                                    <div style={{ maxHeight: '100px' }}>
                                        <h6 className='text-wrap font-weight-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                    </div>
                                    <hr style={{ borderWidth: '2px' }} />
                                    <div className='d-flex flex-wrap justify-content-center align-items-center'>
                                        <Link className='d-flex m-1 text-secondary text-decoration-none' to='#'>
                                            <i className='fa fa-star mr-1' />
                                            <small className='font-weight-bold'>Rate</small>
                                        </Link>
                                        <Link className='d-flex m-1 text-secondary text-decoration-none' to='#'>
                                            <i className='fa fa-comment mr-1' />
                                            <small className='font-weight-bold'>Comment</small>
                                        </Link>
                                        <Link className='d-flex m-1 text-secondary text-decoration-none' to='#'>
                                            <i className='fa fa-share mr-1' />
                                            <small className='font-weight-bold'>Share</small>
                                        </Link>
                                    </div>
                                    <hr />
                                    <div style={{ height: '100px', overflowY: 'scroll' }}>
                                        <div className='d-flex flex-wrap'>
                                            <img width='30' height='30' className='rounded-circle bg-main mr-2' />
                                            <div className='' style={{ maxWidth: '150px' }}>
                                                <div className='d-flex'>
                                                    <h6 className='my-auto font-weight-bold'>Weeb Developer</h6>
                                                    <small className='my-auto text-secondary ml-2'>15m</small>
                                                </div>
                                                <small className='w-100'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                            </div>
                                        </div>
                                        <div className='d-flex flex-wrap mt-3'>
                                            <img width='30' height='30' className='rounded-circle bg-main mr-2' />
                                            <div className='' style={{ maxWidth: '150px' }}>
                                                <div className='d-flex'>
                                                    <h6 className='my-auto font-weight-bold'>Weeb Developer</h6>
                                                    <small className='my-auto text-secondary ml-2'>15m</small>
                                                </div>
                                                <small className='w-100'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <textarea class="form-control mt-2" placeholder='Tuliskan komentar...' rows="1"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Design