import React, { useState, useCallback, useEffect } from 'react'
import StarRatings from 'react-star-ratings';
import Cookies from 'universal-cookie'
import { useDropzone } from 'react-dropzone'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import participationAction from '../../Modules/Redux/Actions/Participation'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactTimeAgo from 'react-time-ago'
import swal from 'sweetalert'
import LoadingOverlay from 'react-loading-overlay'

const cookies = new Cookies()

const Design = props => {
    const { user, contest } = props
    const { contestID } = props.match.params
    const [state, setState] = useState({
        mode: 'Grid', filter: 'Semua', desc: null,
        full_list: [], list: [],
        isEditDesc: false,
        activeParticipation: null, isModalOpen: false, index: null,
        comment: null
    })
    const [parindex, setParindex] = useState(null)

    const [filterBtn, setFilterBtn] = useState([
        { title: 'Semua', quantity: 0 },
        { title: 'Unrated', quantity: 0 },
        { title: '1-2 Stars', quantity: 0 },
        { title: '3-4 Stars', quantity: 0 },
    ])

    const calcRate = (rate) => {
        let score = 0
        if (rate.length < 1) return 0
        rate.map(rate => score += rate.rate)
        return score / rate.length
    }

    const editDescToggle = () => {
        setState({ ...state, isEditDesc: !state.isEditDesc })
    }

    const onChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    const toggleModal = () => {
        setState({ ...state, activeParticipation: null, isModalOpen: !state.isModalOpen, index: null })
    }

    const onDrop = useCallback(async acceptedFiles => {
        try {
            const file = acceptedFiles[0]
            if (file.type.search('image') !== -1) {
                if (file.size / 1024 / 1024 <= 5) {
                    const payload = new FormData()
                    payload.append('image', file)
                    swal({
                        title: "Are you sure?",
                        text: "Once uploaded, you cant change image but you can add desc to image!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willUpload) => {
                            if (contest?.contestType == 'Ninja') {
                                swal({
                                    title: "Peringatan?",
                                    text: "Kontes bertipe Ninja, kerahasiaan desain perlu dijaga oleh masing-masing designer sesuai dengan Terms and Agreement!",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                })
                                    .then((agree) => {
                                        if (agree) {
                                            props.uploadDesign('contest', contestID, payload)
                                        }
                                    });
                            }
                        });
                } else {
                    swal({
                        title: "Error!",
                        text: 'Image size max 5mb',
                        icon: "error",
                        button: "Okay!",
                    })
                }
            } else {
                swal({
                    title: "Error!",
                    text: 'File must be image',
                    icon: "error",
                    button: "Okay!",
                })
                setState({
                    ...state, dropped: true
                })
            }
        } catch (error) {
            console.log(error)
        }
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    useEffect(() => {
        if (state.filter == 'Semua') {
            setState({ ...state, list: state.full_list })
        } else if (state.filter == 'Unrated') {
            setState({ ...state, list: state.full_list.filter(item => calcRate(item.rate) == 0) })
        } else if (state.filter == '1-2 Stars') {
            setState({ ...state, list: state.full_list.filter(item => calcRate(item.rate) > 0 && calcRate(item.rate) < 3) })
        } else if (state.filter == '3-5 Stars') {
            setState({ ...state, list: state.full_list.filter(item => calcRate(item.rate) >= 3 && calcRate(item.rate) <= 5) })
        }
    }, [state.filter])

    useEffect(() => {
        if (state.activeParticipation) {
            let index = props.participations?.findIndex(item => item._id == state.activeParticipation._id)
            setState({ ...state, activeParticipation: props.participations[index] })
        }
        if (props.participations) {
            setState({ ...state, full_list: props.participations, list: props.participations })
            setFilterBtn([
                { title: 'Semua', quantity: props.participations.length },
                { title: 'Unrated', quantity: props.participations.filter(item => calcRate(item.rate) == 0).length },
                { title: '1-2 Stars', quantity: props.participations.filter(item => calcRate(item.rate) > 0 && calcRate(item.rate) < 3).length },
                { title: '3-5 Stars', quantity: props.participations.filter(item => calcRate(item.rate) >= 3 && calcRate(item.rate) < 5).length },
            ])
            setParindex(props.participations?.findIndex(item => item.user._id == user?._id))
        }
    }, [props.participations])

    return (
        <LoadingOverlay spinner text='Loading please wait...' active={props.loading} className='container'>
            <div className='pt-5 pb-4'>
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
                    {/* <div className='d-flex ml-auto flex-wrap justify-content-center'>
                        <div className='rounded-lg btn btn-category m-1 d-flex align-items-center justify-content-center'
                            style={{ height: '50px', width: '50px' }} onClick={() => setState({ ...state, mode: 'Grid' })}>
                            <i className='fa fa-th-large' style={{ fontSize: '30px' }} />
                        </div>
                        <div className='rounded-lg btn btn-category m-1 d-flex align-items-center justify-content-center'
                            style={{ height: '50px', width: '50px' }} onClick={() => setState({ ...state, mode: 'List' })}>
                            <i className='fa fa-th-list' style={{ fontSize: '30px' }} />
                        </div>
                    </div> */}
                </div>
            </div>

            {state.mode == 'Grid' && <div className='pb-5'>
                <div className='d-flex flex-wrap justify-content-center'>
                    {state.list?.filter(item => item.image_url != null).map((item, index) => (
                        item.image_url && <div className='m-2' style={{ maxWidth: '250px', cursor: 'pointer' }}>
                            <div onClick={() => setState({ ...state, activeParticipation: item, isModalOpen: true, index, desc: item.desc })}>
                                <h6 className='text-secondary'>#{index + 1} oleh {item.user.name}</h6>
                                {user?._id != item?.user._id && <img width='100%' src={contest?.contestType != 'Public' && user?._id != contest?.user._id ? 'https://hpypp.com/wp-content/uploads/default_product.png' :
                                    item.image_url} style={{ width: '250px', height: '250px', objectFit: 'cover' }} className='rounded-lg border shadow-sm' />}
                                {user?._id == item?.user._id && <img width='100%' src={item.image_url} style={{ width: '250px', height: '250px', objectFit: 'cover' }} className='rounded-lg border shadow-sm' />}
                            </div>
                            <div className='mt-2 d-flex justify-content-center'>
                                <StarRatings
                                    rating={calcRate(item.rate)}
                                    starDimension="30px"
                                    starSpacing="5px"
                                    starRatedColor='#F8B00E'
                                    changeRating={(newRating, name) => {
                                        if (user)
                                            props.giveRating(item._id, contestID, newRating)
                                        else
                                            swal({
                                                title: "Error!",
                                                text: 'Login untuk melakukan rating pada item',
                                                icon: "error",
                                                button: "Okay!",
                                            })
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                    {state.list?.length < 1 && <h3 className='mt-2 text-center'>No submited design available yet!</h3>}
                    {(parindex != -1 && !props.participations?.[parindex]?.image_url) && <div className='m-2'>
                        <h6 className='text-white'>Upload</h6>
                        <div {...getRootProps()} className="rounded-lg d-flex align-items-center justify-content-center" style={{ border: '2px dashed #110B17', height: '250px', width: '250px' }}>
                            <input {...getInputProps()} />
                            {props.banner ?
                                <div style={{ width: '100%', height: '50%' }}>
                                    <div
                                        className="position-absolute p-2 m-2 rounded"
                                        style={{ zIndex: 1, cursor: 'pointer', backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
                                        Click or drop here to change banner. (Max height: 600px)
                                </div>
                                    <img src={props.banner} className="w-100 rounded-lg" style={{ objectFit: 'cover', maxHeight: '250px' }} />
                                </div> :
                                <div>
                                    {
                                        isDragActive ?
                                            <div className="text-center">
                                                <i className="fas fa-cloud-upload-alt fa-5x" />
                                                <h6 className="font-roboto ">Drop the file</h6>
                                            </div> :
                                            <div className="text-center py-4">
                                                <h5 className="text-secondary">Drag and Drop file</h5>
                                                <h5 className='text-secondary'>Atau</h5>
                                                <button className='btn btn-main btn-block'>Pilih File</button>
                                                <small>Max Image Size 5mb</small>
                                                {(state.dropped && !state.valid) && <h6 className="text-danger">*File type must be an image</h6>}
                                            </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>}
                </div>
            </div>}

            <Modal isOpen={state.isModalOpen} toggle={toggleModal} size='xl' centered={true} scrollable={true}>
                <ModalHeader toggle={toggleModal}></ModalHeader>
                <ModalBody>
                    <div className='py-0 px-3 rounded-lg bg-white border shadow'>
                        <div className='row'>
                            <div className='col-md bg-light rounded-lg p-4 d-flex border'>
                                {user?._id != state.activeParticipation?.user._id && <img className='rounded-lg m-auto' src={contest?.contestType != 'Public' && user?._id != contest?.user._id ? 'https://hpypp.com/wp-content/uploads/default_product.png' : state.activeParticipation?.image_url}
                                    style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'cover' }} />}
                                {user?._id == state.activeParticipation?.user._id && <img className='rounded-lg m-auto' src={state.activeParticipation?.image_url}
                                    style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'cover' }} />}
                            </div>
                            <div className='col-md-4 px-4 py-4 rounded-lg'>
                                <h2 className='mb-1'>#{state.index + 1}</h2>
                                <div className='d-flex flex-wrap'>
                                    <h6 className='font-weight-bold text-secondary mx-1'>bersama</h6>
                                    <h6 className='text-main mx-1'>{state.activeParticipation?.user.name}</h6>
                                    <small className='text-secondary font-weight-bold mx-1'>{state.activeParticipation?.date_uploaded ? <ReactTimeAgo date={state.activeParticipation?.date_uploaded} /> : '--:--:--'}</small>
                                </div>
                                <hr style={{ borderWidth: '2px' }} />
                                <div>
                                    {!state.isEditDesc ? <h6 className='text-wrap'>{state.desc}
                                        {state.activeParticipation?.user?._id == user?._id && <i className='fa fa-pen text-main ml-2' onClick={editDescToggle} />}
                                    </h6> : <div className='d-flex flex-column'>
                                            <textarea rows='2' onChange={onChange} id='desc' value={state.desc}></textarea>
                                            <button className='btn btn-primary' onClick={() => {
                                                props.updateParticipation(state.activeParticipation?._id, contestID, state.desc)
                                                editDescToggle()
                                            }}>Save</button>
                                        </div>}
                                </div>
                                <hr style={{ borderWidth: '2px' }} />
                                <div className='d-flex flex-wrap justify-content-center align-items-center'>
                                    <Link className='d-flex m-1 text-secondary text-decoration-none' to='#'>
                                        <i className='fa fa-star mr-1' />
                                        <small className='font-weight-bold'>{state.activeParticipation ? calcRate(state.activeParticipation?.rate) : '0'} Star</small>
                                    </Link>
                                    <Link className='d-flex m-1 text-secondary text-decoration-none' to='#'>
                                        <i className='fa fa-comment mr-1' />
                                        <small className='font-weight-bold'>{state.activeParticipation?.comment.length} Komentar</small>
                                    </Link>
                                </div>
                                <hr />
                                <div style={{ height: '100px', overflowY: 'scroll' }} id='comment-sec'>
                                    {state.activeParticipation?.comment.length > 0 ?
                                        state.activeParticipation?.comment.sort((a, b) => a.date < b.date).map(comment => (
                                            <div style={{ borderLeft: '3px solid #0069D9' }} className='pl-2 my-2'>
                                                <h6 className='font-weight-bold mb-0'>{comment.name} <small className='text-secondary mb-0'><ReactTimeAgo date={comment.date} /></small></h6>
                                                <small className='w-100'>{comment.text}</small>
                                            </div>
                                        ))
                                        : <h5 className='text-center text-secondary mt-2'>No comment yet</h5>}
                                </div>
                                {user && <div className='d-flex align-items-center mt-2'>
                                    <textarea class="form-control" placeholder='Tuliskan komentar...' rows="1"
                                        value={state.comment} id='comment' onChange={onChange}></textarea>
                                    <button className='btn btn-primary' onClick={() => {
                                        props.comment(state.activeParticipation?._id, contestID, state.comment)
                                        setState({ ...state, comment: '' })
                                    }}><i className='fa fa-paper-plane' /></button>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>

            <div class="modal fade" id="design" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header" style={{ border: 'unset' }}>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i className='far fa-times-circle text-main' style={{ fontSize: '40px', opacity: '1' }} />
                            </button>
                        </div>
                        <div class="modal-body ">

                        </div>
                    </div>
                </div>
            </div>

            {(user && user?._id != contest?.user._id && parindex == -1) && <div className='mb-5'>
                <button className='btn btn-main px-5 py-3' onClick={() => props.joinContest(contestID)}>Ikuti Contest</button>
            </div>}

        </LoadingOverlay>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        participations: state.participation.participations,
        loading: state.participation.loading,
        contest: state.contest.contest,
        error: state.contest.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        joinContest: (contestID) => dispatch(participationAction.joinContest(contestID)),
        comment: (participationID, contestID, text) => dispatch(participationAction.comment(participationID, 'contest', contestID, text)),
        giveRating: (participationID, contestID, rate) => dispatch(participationAction.giveRating(participationID, 'contest', contestID, rate)),
        updateParticipation: (participationID, contestID, text) => dispatch(participationAction.updateParticipation(participationID, contestID, text)),
        uploadDesign: (type, contestID, payload) => dispatch(participationAction.uploadDesign(type, contestID, payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Design))