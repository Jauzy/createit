import React from 'react'
import NumberFormat from 'react-number-format'
import {Link} from 'react-router-dom'

const ListCard = props => {
    const { item } = props
    return (
        <Link className='text-decoration-none text-dark' to={`/project/dashboard/${item._id}`}>
            <div className='row contest-card rounded-lg'>
                <div className='col-md-auto'>
                    <img width='100%' className='rounded-lg bg-light' src={require('../../Modules/images/brief-mascot.png')} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    <h6 className='text-white bg-main py-2 px-3 position-absolute rounded-lg' style={{ top: '0' }}>
                        {/* <NumberFormat value={item?.price || '0'} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /> */}
                    </h6>
                </div>
                <div className='col-md d-flex'>
                    <div className='my-auto'>
                        <div className='d-flex flex-wrap'>
                            <h4 className='my-auto'>{item?.name}</h4>
                            <small className='my-auto ml-2'>oleh {item?.user.name}</small>
                        </div>
                        <p className='text-secondary'>{item?.desc}</p>
                        <h6>{item?.industryType}</h6>
                        <h6>{item?.category} / <strong>{item?.subCategory}</strong></h6>
                    </div>
                </div>
                <div className='col-md d-flex text-secondary'>
                    <div className='m-auto'>
                        <div className=''>
                            Tipe Kontes
                            {/* <h5 className='my-auto'>{item?.contestType || 'Belum ditentukan'}</h5> */}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </Link>
    )
}

export default ListCard