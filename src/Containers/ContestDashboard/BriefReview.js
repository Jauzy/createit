import React from 'react'

const BriefReview = props => {
    const { contest } = props
    return (
        <div>
            <div className='p-4'>
                <div className='mt-2'>
                    <h2 className='font-weight-bold text-dark'>Nama Kontes</h2>
                    <h6 className='text-secondary font-weight-bold'>{contest?.name}</h6>
                </div>
                <div className='mt-5'>
                    <h2 className='font-weight-bold text-dark'>Deskripsi Kontes</h2>
                    <h6 className='text-secondary font-weight-bold'>{contest?.desc ? contest?.desc : 'Belum diatur'}</h6>
                </div>
                <div className='mt-5'>
                    <h3 className='font-weight-bold text-dark'>Tujuan Penggunaan Kontes</h3>
                    <h6 className='text-secondary font-weight-bold'>{contest?.purpose ? contest?.purpose : 'Belum diatur'}</h6>
                </div>
                <div className='mt-5'>
                    <h3 className='font-weight-bold text-dark'>Jenis Industri Perusahaanmu</h3>
                    <h6 className='text-secondary font-weight-bold'>{contest?.industryType ? contest?.industryType : 'Belum diatur'}</h6>
                </div>
                <div className='mt-5'>
                    <h3 className='font-weight-bold text-dark'>Website / Media Sosial Perusahaanmu</h3>
                    <h6 className='text-secondary font-weight-bold'>{contest?.social ? contest?.social : 'Belum diatur'}</h6>
                </div>
                <div className='mt-5'>
                    <h5 className='font-weight-bold text-dark'>Apa Creator diperbolehkan menampilkan hasil Desainmu sebagai portofolio Createit?</h5>
                    <h6 className='text-secondary font-weight-bold'>{contest?.creatorPermission == false ? 'Tidak' : 'Boleh'}</h6>
                </div>
                <div className='mt-5'>
                    <h3 className='font-weight-bold text-dark'>Catatan Tambahan untuk Creator</h3>
                    <h6 className='text-secondary font-weight-bold'>{contest?.notes ? contest?.notes : 'Belum diatur'}</h6>
                </div>
            </div>
        </div>
    )
}

export default BriefReview