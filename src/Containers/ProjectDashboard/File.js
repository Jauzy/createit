import React, { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import ReactTimeAgo from 'react-time-ago'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import participationAction from '../../Modules/Redux/Actions/Participation'
import swal from 'sweetalert'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StarRatings from 'react-star-ratings';

const File = props => {
    const { project, user, participations } = props
    const { projectID } = props.match.params
    const [state, setState] = useState({
        filter: 'Semua', valid: false, dropped: false,
        modalData: null, activeParticipation: null,
        full_list: null, list: null
    })

    const [filterBtn, setFilterBtn] = useState([
        { title: 'Semua', quantity: 0 },
        { title: 'Referensi', quantity: 0 },
        { title: 'In Progress', quantity: 0 },
        { title: 'Revisi', quantity: 0 },
        { title: 'File Akhir', quantity: 0 },
    ])

    const setModalData = ({ img, date, user, type, desc }) => {
        let modalData = {
            img, desc,
            date, user, type,
        }
        setState({ ...state, modalData })
    }

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
                    props.uploadDesign('project', projectID, payload)
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

    const checkPermission = () => {
        let found = project?.approvedDesigner.filter(item => item._id == user._id)[0]
        return found != null
    }

    useEffect(() => {
        if (state.activeParticipation) {
            let index = props.participations.findIndex(item => item._id == state.activeParticipation._id)
            let found = participations[index]
            if (props.participations) {
                setState({ ...state, full_list: props.participations, list: props.participations, activeParticipation: found })
                setFilterBtn([
                    { title: 'Semua', quantity: props.participations.length + project?.reference.length },
                    { title: 'Referensi', quantity: project?.reference.length },
                ])
            }
        }
        else if (props.participations) {
            setState({ ...state, full_list: props.participations, list: props.participations })
            setFilterBtn([
                { title: 'Semua', quantity: props.participations.length + project?.reference.length },
                { title: 'Referensi', quantity: project?.reference.length },
            ])
        }
    }, [participations])

    useEffect(() => {
        if (state.filter == 'Semua') {
            setState({ ...state, list: state.full_list })
        }
    }, [state.filter])

    return (
        <div>

            <div className='container pt-5 pb-4'>
                <h4>Files</h4>
                <div className='d-flex flex-wrap'>
                    <div className='d-flex flex-wrap mr-auto justify-content-center'>
                        {filterBtn.map(item => (
                            <div className={'rounded-lg d-flex align-items-center justify-content-center btn m-1 btn-category' + (state.filter == item.title ? '-active' : '')}
                                style={{ width: '140px', height: '50px' }} onClick={() => setState({ ...state, filter: item.title })}>
                                {item.title} ({item.quantity})
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='container pb-5'>
                <div className='d-flex flex-wrap justify-content-center mt-4'>
                    {(state.filter == 'Semua' || state.filter == 'Referensi') && project?.reference.map((item, index) => (
                        <div className='mb-auto'>
                            <div className='m-2'>
                                <h6 className='text-secondary'>#{index + 1} Reference oleh Owner</h6>
                                <div className='m-2 border shadow-sm rounded-lg' style={{ maxWidth: '250px', cursor: 'pointer' }} onClick={() => setModalData({ img: item, user: project?.user.name, type: "Referensi" })} data-toggle='modal' data-target='#design'>
                                    <img width='100%' src={item} style={{ width: '250px', height: '250px', objectFit: 'cover' }} className='rounded-lg' />
                                </div>
                            </div>
                        </div>
                    ))}

                    {state.filter != 'Referensi' && participations?.map((item, index) => (
                        item.image_url && <div className='m-2' style={{ maxWidth: '250px', cursor: 'pointer' }}>
                            <div onClick={() => setState({ ...state, activeParticipation: item, isModalOpen: true, index, desc: item.desc })}>
                                <h6 className='text-secondary'>#{index + 1} oleh {item.user.name}</h6>
                                <img width='100%' src={item.image_url} style={{ width: '250px', height: '250px', objectFit: 'cover' }} className='rounded-lg border shadow-sm' />
                            </div>
                            <div className='mt-2 d-flex justify-content-center'>
                                <StarRatings
                                    rating={calcRate(item.rate)}
                                    starDimension="30px"
                                    starSpacing="5px"
                                    starRatedColor='#F8B00E'
                                    changeRating={(newRating, name) => {
                                        if (user)
                                            props.giveRating(item._id, projectID, newRating)
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

                    {checkPermission() && <div {...getRootProps()} className="rounded-lg d-flex align-items-center justify-content-center m-2 my-auto" style={{ border: '2px dashed #110B17', height: '250px', width: '250px' }}>
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
                                            {(state.dropped && !state.valid) && <h6 className="text-danger">*File type must be an image</h6>}
                                        </div>
                                }
                            </div>
                        }
                    </div>}

                </div>

            </div>

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
                                    <img className='rounded-lg m-auto' src={state.modalData?.img} style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'cover' }} />
                                </div>
                                <div className='col-md-4 px-4 py-4 rounded-lg'>
                                    <h4>{state.modalData?.type}</h4>
                                    <h6 className='font-weight-bold text-secondary mb-0'>oleh <strong className='text-main'>{state.modalData?.user}</strong></h6>
                                    {state.modalData?.date && <small className='text-secondary font-weight-bold'><ReactTimeAgo date={new Date(state.modalData.date)} /></small>}
                                    <hr style={{ borderWidth: '2px' }} />
                                    {state.modalData?.type != 'Referensi' && <div>
                                        <h6 className='text-wrap font-weight-bold'>{state.modalData?.desc || 'Edit to set!'}</h6>
                                    </div>}
                                    <hr style={{ borderWidth: '2px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={state.isModalOpen} toggle={toggleModal} size='xl' centered={true} scrollable={true}>
                <ModalHeader toggle={toggleModal}></ModalHeader>
                <ModalBody>
                    <div className='py-0 px-3 rounded-lg bg-white border shadow'>
                        <div className='row'>
                            <div className='col-md bg-light rounded-lg p-4 d-flex border'>
                                <img className='rounded-lg m-auto' src={state.activeParticipation?.image_url}
                                    style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'cover' }} />
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
                                                props.updateParticipation(state.activeParticipation?._id, projectID, state.desc)
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
                                
                                <div className='d-flex flex-column'>
                                    <div className='mb-3' id='comment-sec'>
                                        <div className='' style={{ height: '400px', overflowY: 'scroll' }} >
                                            {state.activeParticipation?.comment.length > 0 ?
                                                state.activeParticipation?.comment.map(comment => (
                                                    <div style={{ borderLeft: '3px solid #0069D9' }} className='pl-2 my-2'>
                                                        <h6 className='font-weight-bold mb-0'>{comment.user_client ? comment.user_client.name : comment.user_creator.name}
                                                            <small className='text-secondary mb-0 ml-1'><ReactTimeAgo date={comment.date} /></small></h6>
                                                        <small className='w-100'>{comment.text}</small>
                                                    </div>
                                                ))
                                                : <h5 className='text-center text-secondary mt-2'>No comment yet</h5>}
                                        </div>
                                    </div>
                                    {user && <div className='d-flex align-items-center mt-auto'>
                                        <textarea class="form-control" placeholder='Tuliskan komentar...' rows="1"
                                            value={state.comment} id='comment' onChange={onChange}></textarea>
                                        <button className='btn btn-primary' onClick={() => {
                                            props.comment(state.activeParticipation?._id, projectID, state.comment)
                                            setState({ ...state, comment: '' })
                                        }}><i className='fa fa-paper-plane' /></button>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>


        </div>
    )
}

const mapStateToProps = state => {
    return {
        project: state.project.project,
        participations: state.participation.participations,
        user: state.user.user,
        loading: state.project.loading,
        error: state.project.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uploadDesign: (type, id, payload) => dispatch(participationAction.uploadDesign(type, id, payload)),
        comment: (participationID, projectID, text) => dispatch(participationAction.comment(participationID, 'project', projectID, text)),
        giveRating: (participationID, projectID, rate) => dispatch(participationAction.giveRating(participationID, 'project', projectID, rate)),
        updateParticipation: (participationID, contestID, text) => dispatch(participationAction.updateParticipation(participationID, 'project', contestID, text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(File))