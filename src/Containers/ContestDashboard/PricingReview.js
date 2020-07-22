import React from 'react'
import NumberFormat from 'react-number-format'

const PricingReview = props => {
    const { contest } = props
    return (
        <div>
            <div className='p-4'>
                <div className='mt-2'>
                    <h2 className='font-weight-bold text-dark'>Paket Terpilih</h2>
                    <h6 className='text-secondary font-weight-bold'>{contest?.pricingPack ? contest?.pricingPack : 'Belum diatur'}</h6>
                </div>
                <div className='mt-5'>
                    <h2 className='font-weight-bold text-dark'>Tipe Kontes</h2>
                    <h6 className='text-secondary font-weight-bold'>{contest?.contestType ? contest?.contestType : 'Belum diatur'}</h6>
                </div>
                <div className='mt-5'>
                    <h3 className='font-weight-bold text-dark'>Durasi Kontes</h3>
                    <h6 className='text-secondary font-weight-bold'>{contest?.duration ? contest?.duration : 'Belum diatur'}</h6>
                </div>
                <div className='mt-5'>
                    <h2 className='font-weight-bold text-dark'>Harga Kontes</h2>
                    <h6 className='text-secondary font-weight-bold'>{contest?.price ? <NumberFormat value={contest?.price} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /> : 'Belum diatur'}</h6>
                </div>
            </div>
        </div>
    )
}

export default PricingReview