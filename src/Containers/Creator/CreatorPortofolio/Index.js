import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import userAction from '../../../Modules/Redux/Actions/User'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate';
import LoadingOverlay from 'react-loading-overlay'
import ReactTimeAgo from 'react-time-ago'

const CreatorPortofolio = props => {
    const { user } = props
    const { creatorID } = props.match.params
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

    const calcRate = (rate) => {
        let score = 0
        if (rate.length < 1) return 0
        rate.map(rate => score += rate.rate)
        return score / rate.length
    }

    useEffect(() => {
        props.getPublicProfile(creatorID)
    }, [])

    return (
        <LoadingOverlay spinner active={props.loading} text='Loading please wait...' >
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
                            <h2 className='mb-0'>{props.user?.name}</h2>
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

            {state.activeSection == 'Portofolio' && <div className='container py-5'>
                <div class='d-flex flex-wrap justify-content-center'>
                    {props.participations?.filter(item => item.image_url != null).map((item, index) => (
                        <div className='m-2' key={index}>
                            <figure class="snip1205 font-roboto" data-toggle='modal' data-target={'#design' + index}>
                                <img src={item.image_url} class='border' style={{ objectFit: 'cover', height: '250px', width: '250px' }} />
                                <i class="fa fa-star ml-2">{calcRate(item.rate)}</i>
                                <a href="#"></a>
                            </figure>
                            <div class="modal fade" id={"design" + index} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                    <img className='rounded-lg m-auto' src={item.image_url} style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'cover' }} />
                                                </div>
                                                <div className='col-md-4 px-4 py-4 rounded-lg'>
                                                    <h2 className='mb-1'><small>on </small>{item.project ? item.project.name : item.contest.name}</h2>
                                                    <h6 className='font-weight-bold text-secondary mb-0'>bersama <strong className='text-main'>{item.user.name}</strong></h6>
                                                    <small className='text-secondary font-weight-bold'>{item.date_uploaded && <ReactTimeAgo date={new Date(item.date_uploaded)} />}</small>
                                                    <hr style={{ borderWidth: '2px' }} />
                                                    <div style={{ maxHeight: '100px' }}>
                                                        <h6 className='text-wrap font-weight-bold'>{item.desc}</h6>
                                                    </div>
                                                    <hr style={{ borderWidth: '2px' }} />
                                                    <div className='d-flex flex-wrap justify-content-center align-items-center'>
                                                        <Link className='d-flex m-1 text-secondary text-decoration-none' to='#'>
                                                            <i className='fa fa-star mr-1' />
                                                            <small className='font-weight-bold'>{calcRate(item.rate)}</small>
                                                        </Link>
                                                        <Link className='d-flex m-1 text-secondary text-decoration-none' to='#'>
                                                            <i className='fa fa-comment mr-1' />
                                                            <small className='font-weight-bold'>{item.comment?.length}</small>
                                                        </Link>
                                                        <Link className='d-flex m-1 text-secondary text-decoration-none' to='#'>
                                                            <i className='fa fa-share mr-1' />
                                                            <small className='font-weight-bold'>Share</small>
                                                        </Link>
                                                    </div>
                                                    <hr />

                                                    <div className='d-flex flex-column'>
                                                        <div className='mb-3' id='comment-sec'>
                                                            <div className='' style={{ height: '400px', overflowY: 'scroll' }} >
                                                                {item?.comment.length > 0 ?
                                                                    item?.comment.map(comment => (
                                                                        <div style={{ borderLeft: '3px solid #0069D9' }} className='pl-2 my-2'>
                                                                            <h6 className='font-weight-bold mb-0'>{comment.user_client ? comment.user_client.name : comment.user_creator.name}
                                                                                <small className='text-secondary mb-0 ml-1'><ReactTimeAgo date={comment.date} /></small></h6>
                                                                            <small className='w-100'>{comment.text}</small>
                                                                        </div>
                                                                    ))
                                                                    : <h5 className='text-center text-secondary mt-2'>No comment yet</h5>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>}

            {state.activeSection == 'Tentang' && <div className='container py-5'>
                <div className='d-flex px-4'>
                    <h2 className='my-auto'>Tentang {user?.name || user?.email}</h2>
                </div>
                <hr />
                <table className='text-dark mt-4' style={{ width: '100%' }}>
                    <tr>
                        <td className='py-2 px-4'><h6 className='font-weight-bold'>Nama Lengkap</h6></td>
                        <td className='py-2 px-4'><h6 className='text-secondary'>{user?.name || 'Belum Diatur'}</h6>
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2 px-4'><h6 className='font-weight-bold'>Nomor Telepon</h6></td>
                        <td className='py-2 px-4'><h6 className='text-secondary'>{user?.phone_no || 'Belum Diatur'}</h6>
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2 px-4'><h6 className='font-weight-bold'>Alamat</h6></td>
                        <td className='py-2 px-4' style={{ maxWidth: '200px' }}><h6 className='text-secondary'>{user?.address || 'Belum Diatur'}</h6>
                        </td>
                    </tr>
                    <tr>
                        <td className='py-2 px-4'><h6 className='font-weight-bold'>Alamat Email</h6></td>
                        <td className='py-2 px-4'><h6 className='text-secondary'>{user?.email}</h6>
                        </td>
                    </tr>
                </table>
            </div>}

            {state.activeSection == 'Portofolio' && < div className='d-flex'>
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
            </div>}

        </LoadingOverlay >
    )
}

const mapStateToProps = state => {
    return {
        loading: state.user.loading,
        user: state.user.public_user.data,
        participations: state.user.public_user.participations,
        error: state.user.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPublicProfile: (creatorID) => dispatch(userAction.getPublicProfile(creatorID)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreatorPortofolio))