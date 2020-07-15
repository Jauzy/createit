import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const File = props => {
    const [state, setState] = useState({
        filter: 'Active', valid: false, dropped: false
    })

    const filterBtn = [
        { title: 'Semua', quantity: 0 },
        { title: 'Referensi', quantity: 0 },
        { title: 'In Progress', quantity: 0 },
        { title: 'Revisi', quantity: 0 },
        { title: 'File Akhir', quantity: 0 },
    ]

    const onDrop = useCallback(async acceptedFiles => {
        try {
            if (acceptedFiles[0].type.search('image') !== -1) {
                const { project_id } = props.match.params
                const payload = new FormData()
                payload.append('banner', acceptedFiles[0])
                setState({ ...state, valid: true })
            } else
                setState({
                    ...state, valid: false, dropped: true
                })
        } catch (error) {
            console.log(error)
        }
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

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
                    {[1, 2, 3, 4, 5].map(item => (
                        <div className='m-2' style={{ maxWidth: '250px', cursor: 'pointer' }} data-toggle='modal' data-target='#design'>
                            <img width='100%' src={require('../../Modules/images/906560.png')} style={{ width: '250px', height: '250px', objectFit: 'cover' }} className='rounded-lg' />
                        </div>
                    ))}

                    <div {...getRootProps()} className="rounded-lg d-flex align-items-center justify-content-center m-2" style={{ border: '2px dashed #110B17', height: '250px', width: '250px' }}>
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
                    </div>

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
                                    <img className='rounded-lg m-auto' src={require('../../Modules/images/brief-mascot.png')} style={{ maxWidth: '100%', maxHeight: '600px', objectFit: 'cover' }} />
                                </div>
                                <div className='col-md-4 px-4 py-4 rounded-lg'>
                                    <h4>Referensi</h4>
                                    <h6 className='font-weight-bold text-secondary mb-0'>oleh <strong className='text-main'>Weeb Developer</strong></h6>
                                    <small className='text-secondary font-weight-bold'>kemarin</small>
                                    <hr style={{ borderWidth: '2px' }} />
                                    <div>
                                        <h6 className='text-wrap font-weight-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                    </div>
                                    <hr style={{ borderWidth: '2px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default File