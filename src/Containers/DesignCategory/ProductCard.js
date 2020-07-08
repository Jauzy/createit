import React from 'react'
import { withRouter } from 'react-router-dom'

const ProductCard = (props) => {
    const { title, icon, contest, idx, project, selectedCategory} = props
    return (
        <div className='col-md-6 my-3'>
            <div className='bg-light p-5 border-main' style={{ borderRadius: '20px' }} data-toggle="modal" data-target={`#modal${idx}`}>
                <div className='d-flex'>
                    <i className={'fa mr-2 text-main my-auto fa-' + icon} style={{ fontSize: '30px' }} />
                    <h2 className='text-main font-weight-bold my-auto ml-3'>{title}</h2>
                </div>
                <div className='row my-3'>
                    {['Contest', 'Project'].map(item => (
                        <div className='col-md'>
                            <div className='btn-category my-2 mx-auto py-3 text-center font-weight-bold btn-block'>
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-secondary'>
                    {contest}
                </div>
            </div>

            <div class="modal fade" id={`modal${idx}`} key={`modal${idx}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-header" style={{ border: 'unset' }}>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i className='far fa-times-circle text-main' style={{ fontSize: '40px', opacity: '1' }} />
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className='d-flex justify-content-center align-items-center mb-4'>
                                <i className={'fa my-auto mr-4 text-main fa-' + icon} style={{ fontSize: '80px' }} />
                                <div>
                                    <h1 className='text-main font-weight-bold'>{title}</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md my-2'>
                                    {project && <div className='bg-light p-5 border-main' style={{ borderRadius: '20px' }} >
                                        <div className='d-flex'>
                                            <i className='fa fa-user-tie text-main my-auto' style={{ fontSize: '40px' }} />
                                            <h2 className='text-main font-weight-bold my-auto ml-3'>Mulai Project dengan Creator</h2>
                                        </div>
                                        <div className='text-secondary my-3'>
                                            {project}
                                        </div>
                                        <div className='row'>
                                            <div className='col-md'>
                                                <button className='btn-primary btn btn-block' data-dismiss='modal' onClick={() => props.history.replace(`/brief/project/${selectedCategory}/${title}`)}>Mulai project</button>
                                            </div>
                                            <div className='col-md'>
                                                <button className='btn-light btn btn-block text-main font-weight-bold' data-dismiss='modal'>Lainnnya <i className='fa fa-long-arrow-alt-right ml-2' /></button>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                                <div className='col-md my-2'>
                                    {contest && <div className='bg-light p-5 border-main' style={{ borderRadius: '20px' }} >
                                        <div className='d-flex'>
                                            <i className='fa fa-medal text-main my-auto' style={{ fontSize: '40px' }} />
                                            <h2 className='text-main font-weight-bold my-auto ml-3'>Mulai Kontes Desain</h2>
                                        </div>
                                        <div className='text-secondary my-3'>
                                            {contest}
                                        </div>
                                        <div className='row'>
                                            <div className='col-md'>
                                                <button className='btn-primary btn btn-block' data-dismiss='modal' onClick={() => props.history.replace(`/brief/contest/${selectedCategory}/${title}`)}>Mulai kontes</button>
                                            </div>
                                            <div className='col-md'>
                                                <button className='btn-light btn btn-block text-main font-weight-bold' data-dismiss='modal'>Lainnnya <i className='fa fa-long-arrow-alt-right ml-2' /></button>
                                            </div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default withRouter(ProductCard)