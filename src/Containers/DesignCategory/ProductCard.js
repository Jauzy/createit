import React from 'react'

const ProductCard = (props) => {
    const { title, icon, desc } = props
    const { img } = props
    return (
        <td>
            {img && <div className='px-5 text-center d-flex flex-column border-main'>
                <img src={img} width='300px' className='mx-auto' />
                <h4 className='font-weight-bold'>Belum nemu yang kamu cari?</h4>
                <h6 className='text-main font-weight-bold'>Cari di search aja !</h6>
            </div>}
            {!img && <div className='bg-light p-5 border-main' style={{ borderRadius: '20px' }} data-toggle="modal" data-target={`#modal${title}`}>
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
                    {desc}
                </div>
            </div>}

            <div class="modal fade" id={`modal${title}`} key={`modal${title}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content d-flex flex-column">
                        <div class="modal-header d-flex mx-auto"
                        style={{ maxWidth: '700px', border: 'unset' }}
                        >
                            <i className={'fa my-auto mr-4 text-main fa-' + icon} style={{ fontSize: '80px' }} />
                            <div>
                                <h1 className='text-main font-weight-bold'>{title}</h1>
                                <h5 style={{ maxWidth: '500px' }}>{desc}</h5>
                            </div>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <i className='far fa-times-circle text-main' style={{ fontSize: '40px', opacity: '1' }} />
                            </button>
                        </div>
                        <div class="modal-body">

                            <div className='row'>
                                <div className='col-md'>
                                    <div className='bg-light p-5 border-main' style={{ borderRadius: '20px' }} >
                                        <div className='d-flex'>
                                            <i className='fa fa-user-tie text-main my-auto' style={{ fontSize: '40px' }} />
                                            <h2 className='text-main font-weight-bold my-auto ml-3'>Mulai Project dengan Creator</h2>
                                        </div>
                                        <div className='text-secondary my-3'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                        </div>
                                        <div className='row'>
                                            <div className='col-md'>
                                                <button className='btn-primary btn btn-block'>Mulai project</button>
                                            </div>
                                            <div className='col-md'>
                                                <button className='btn-light btn btn-block text-main font-weight-bold'>Lainnnya <i className='fa fa-long-arrow-alt-right ml-2' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md'>
                                    <div className='bg-light p-5 border-main' style={{ borderRadius: '20px' }} >
                                        <div className='d-flex'>
                                            <i className='fa fa-medal text-main my-auto' style={{ fontSize: '40px' }} />
                                            <h2 className='text-main font-weight-bold my-auto ml-3'>Mulai Kontes Desain</h2>
                                        </div>
                                        <div className='text-secondary my-3'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                        </div>
                                        <div className='row'>
                                            <div className='col-md'>
                                                <button className='btn-primary btn btn-block'>Mulai kontes</button>
                                            </div>
                                            <div className='col-md'>
                                                <button className='btn-light btn btn-block text-main font-weight-bold'>Lainnnya <i className='fa fa-long-arrow-alt-right ml-2' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </td >
    )
}

export default ProductCard