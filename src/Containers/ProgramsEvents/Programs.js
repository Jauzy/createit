import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import utilsAction from '../../Modules/Redux/Actions/Utils'
import Tiket from './Tiket'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux'

const Program = (props) => {

    const { isTiketModalOpen, toggleTiketModal } = props

    return (
        <div className='container'>
            <div className='col'>
                <div className='row justify-content-between pt-5 pb-2'>
                    <h1 className='col-lg-2 text-main'>Program</h1>
                    <div className='col-lg-10 pt-lg-2'>
                        <hr color="#2386C7" width='100%' align="right" style={{ height: '2px'}}></hr>
                    </div>
                </div>
                <div className='pb-3'>
                    <img src={require('../../Modules/images/906560.png')} width='100%'/>
                </div>
                <div className='pb-5 text-secondary'>
                    <h3>Design Essentials for Branding</h3>
                    <div className='pt-1'>
                        <div className='py-2 d-flex align-items-center rounded-lg'>
                            <i className={'fa my-auto fa-user'} style={{ fontSize: '20px' }} />
                            <h6 className='my-auto ml-3'>Bayu Rengga</h6>
                        </div>
                        <div className='py-2 d-flex align-items-center rounded-lg'>
                            <i className={'fa my-auto fa-calendar-check '} style={{ fontSize: '20px' }} />
                            <h6 className='my-auto ml-3'>Minggu, 23 Agustus 2020</h6>
                        </div>
                        <div className='py-2 d-flex align-items-center rounded-lg'>
                            <i className={'fa my-auto fa-map-marker'} style={{ fontSize: '20px' }} />
                            <h6 className='my-auto ml-3'>Live Webinar</h6>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <h5 className='pb-1'>Deskripsi</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut felis tortor. Donec lobortis non lorem at molestie. Proin purus risus, fermentum sed tortor rutrum, imperdiet semper ex. Pellentesque lectus sapien, molestie malesuada malesuada at, porttitor et metus. Aliquam non auctor eros. Fusce egestas nisi non aliquam sollicitudin. Sed convallis lorem erat, quis pulvinar nisi tempor eget.</p>
                    </div>
                    <div className='py-4'>
                        <h5 className='pb-1'>Syarat dan Ketentuan</h5>
                        <ol>
                            <li className='pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className='pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className='pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className='pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ol>
                    </div>
                    <div>
                        <Link className='btn btn-success px-5 py-3' onClick={toggleTiketModal}>Beli Tiket</Link>
                    </div>
                </div>
            </div>

            <Modal isOpen={isTiketModalOpen} toggle={toggleTiketModal} size='xl' centered={true}>
                <ModalHeader toggle={toggleTiketModal}></ModalHeader>
                <ModalBody className='d-flex justify-content-center'>
                    <Tiket />
                </ModalBody>
            </Modal>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        isTiketModalOpen: state.utils.isTiketModalOpen,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTiketModal: () => dispatch(utilsAction.toggleTiketModal()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Program))