import React from 'react'
import NumberFormat from 'react-number-format';

const TableSection = (props) => {
    const { onChoose, choosenPackIdx } = props
    return (
        <table style={{ width: '100%' }} className='table table-responsive'>
            <tr className='bg-light'>
                <td></td>
                <td className='text-center'>
                    <div className=' d-flex'>
                        <div className='m-auto d-flex flex-column'>
                            <div className='py-4 px-3 d-flex flex-column text-white mx-auto' style={{ background: '#2386C7', borderRadius: '20px', width: '150px', height: '150px' }}>
                                <h5 className='font-weight-bold mt-auto'>Paket A</h5>
                                <p style={{ lineHeight: '15px' }} className='mb-auto'><small>Kontes kelas kakap untuk creator kelas kakap</small></p>
                            </div>
                            <h6 className='font-weight-bold mt-3'><NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h6>
                        </div>
                    </div>
                </td>
                <td className='text-center'>
                    <div className=' d-flex'>
                        <div className='m-auto d-flex flex-column'>
                            <div className='py-4 px-3 d-flex flex-column text-white mx-auto' style={{ background: '#FFC702', borderRadius: '20px', width: '150px', height: '150px' }}>
                                <h5 className='font-weight-bold mt-auto'>Paket B</h5>
                                <p style={{ lineHeight: '15px' }} className='mb-auto'><small>Hasil karya terbaik oleh creator kelas menengah dan atas</small></p>
                            </div>
                            <h6 className='font-weight-bold mt-3'><NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h6>
                        </div>
                    </div>
                </td>
                <td className='text-center'>
                    <div className=' d-flex'>
                        <div className='m-auto d-flex flex-column'>
                            <div className='py-4 px-3 d-flex flex-column text-white mx-auto' style={{ background: '#6C757D', borderRadius: '20px', width: '150px', height: '150px' }}>
                                <h5 className='font-weight-bold mt-auto'>Paket C</h5>
                                <p style={{ lineHeight: '15px' }} className='mb-auto'><small>Pilihan standar dengan keuntungan yang standar</small></p>
                            </div>
                            <h6 className='font-weight-bold mt-3'><NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h6>
                        </div>
                    </div>
                </td>
                <td className='text-center'>
                    <div className=' d-flex'>
                        <div className='m-auto d-flex flex-column'>
                            <div className='py-4 px-3 d-flex flex-column text-white mx-auto' style={{ background: '#F14E23', borderRadius: '20px', width: '150px', height: '150px' }}>
                                <h5 className='font-weight-bold mt-auto'>Paket D</h5>
                                <p style={{ lineHeight: '15px' }} className='mb-auto'><small>Low budget tidak sama dengan low quality yow</small></p>
                            </div>
                            <h6 className='font-weight-bold mt-3'><NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /></h6>
                        </div>
                    </div>
                </td>
            </tr>

            <tr className=''>
                <td style={{ minWidth: '200px' }}>Lorem Ipsum is simply dummy text of the </td>
                <td className='font-weight-bold'>Lorem Ipsum is simply dummy </td>
                <td className='font-weight-bold'>Lorem Ipsum is simply  </td>
                <td className='font-weight-bold'>Lorem Ipsum is simply dummy </td>
                <td className='font-weight-bold'>Lorem Ipsum is simply dummy </td>
            </tr>

            <tr className='bg-light'>
                <td>Lorem Ipsum is simply dummy text of the </td>
                <td className='font-weight-bold'>Lorem Ipsum is simply dummy </td>
                <td className='font-weight-bold'>Lorem Ipsum is simply dummy </td>
                <td className='font-weight-bold'>Lorem Ipsum is simply dummy </td>
                <td className='font-weight-bold'>Lorem Ipsum is simply dummy </td>
            </tr>

            <tr className=''>
                <td>Lorem Ipsum is simply dummy text of the </td>
                <td className=''>
                    <div className='d-flex'>
                        <i className='fa fa-check text-success m-auto' style={{ fontSize: '30px' }} />
                    </div>
                </td>
                <td className=''>
                    <div className='d-flex'>
                        <i className='fa fa-check text-success m-auto' style={{ fontSize: '30px' }} />
                    </div>
                </td>
                <td className=''>
                    <div className='d-flex'>
                        <i className='fa fa-check text-success m-auto' style={{ fontSize: '30px' }} />
                    </div>
                </td>
                <td className=''>
                    <div className='d-flex'>
                        <i className='fa fa-times text-danger m-auto' style={{ fontSize: '30px' }} />
                    </div>
                </td>
            </tr>

            <tr className='bg-light mb-3'>
                <td>Lorem Ipsum is simply dummy text of the </td>
                <td className=''>
                    <div className='d-flex'>
                        <i className='fa fa-check text-success m-auto' style={{ fontSize: '30px' }} />
                    </div>
                </td>
                <td className=''>
                    <div className='d-flex'>
                        <i className='fa fa-check text-success m-auto' style={{ fontSize: '30px' }} />
                    </div>
                </td>
                <td className=''>
                    <div className='d-flex'>
                        <i className='fa fa-times text-danger m-auto' style={{ fontSize: '30px' }} />
                    </div>
                </td>
                <td className=''>
                    <div className='d-flex'>
                        <i className='fa fa-times text-danger m-auto' style={{ fontSize: '30px' }} />
                    </div>
                </td>
            </tr>

            <tr>
                <td className=''></td>
                {[1, 2, 3, 4].map(item => (
                    <td key={item + 'buttonkey'}>
                        <div className='d-flex'>
                            <button className={'m-auto btn px-5 py-3 ' + (choosenPackIdx == item ? 'btn-green-active' : 'btn-green')} onClick={() => onChoose(item)}>Pilih</button>
                        </div>
                    </td>
                ))}
            </tr>

        </table>
    )
}

export default TableSection