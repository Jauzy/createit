import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import userAction from '../../../Modules/Redux/Actions/User'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate';

const CreatorPortofolio = props => {
    const [state, setState] = useState({
        activeSection: 'Portofolio',
        list: [],
        full_list: [],
    })

    const handlePageClick = data => {
        let selected = data.selected;

        setState({
            ...state,
            page_number: selected,
            list: state.full_list.slice((selected) * 20, (selected + 1) * 20)
        })
    };

    const sections = ['Portofolio', 'Tentang']
    return (
        <div>
            <div style={{ background: '#F6F6F6' }}>
                <div className='' style={{ width: '100%', height: '250px' }}>
                    <img src={require('../../../Modules/images/906560.png')} style={{ objectFit: 'cover', width: '100%', maxHeight: '250px' }} />
                </div>
                <div className='container'>
                    <div className='row pb-4'>
                        <div className='col-md-auto d-flex'>
                            <img src={props.user?.profile_pict} style={{ marginTop: '-5em' }} width="200" height="200" class="rounded-circle border mx-auto" />
                        </div>
                        <div className='col-md py-3'>
                            <h2 className='mb-0'>Weeb Developer</h2>
                            <h6 className='text-danger'>Level X</h6>
                        </div>
                    </div>
                </div>
                <div className='container navs-main d-flex'>
                    <ul class="nav mr-auto">
                        {sections.map(item => (
                            <li class="nav-item " onClick={() => setState({ ...state, activeSection: item })}>
                                <span class={"nav-link " + (state.activeSection == item ? 'active' : '')}>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className='nav pb-2'>
                        <li className='nav-item mx-2'>
                            <button className='btn btn-outline-main px-5'>Chat</button>
                        </li>
                        <li className='nav-item mx-2'>
                            <button className='btn btn-main'>Invite to work</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='container py-5'>
                <div class='d-flex flex-wrap justify-content-center'>
                    {[1, 2, 3, 4].map(item => (
                        <div className='m-2'>
                            <figure class="snip1205" data-toggle='modal' data-target='#design'>
                                <img src={require('../../../Modules/images/906560.png')} class='border' style={{ objectFit: 'cover', height: '250px', width: '250px' }} />
                                <i class="fa fa-star" style={{ letterSpacing: '10px' }}>5</i>
                                <a href="#"></a>
                            </figure>
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
                                                    <h2 className='mb-1'>Project X</h2>
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
                    ))}
                </div>
            </div>

            <div className='d-flex'>
                <div className='m-auto'>
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={Math.ceil(state.full_list?.length / 20)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        activeClassName={'active'}
                    />
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        user: state.user.user,
        error: state.user.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserData: () => dispatch(userAction.getUserData()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreatorPortofolio))