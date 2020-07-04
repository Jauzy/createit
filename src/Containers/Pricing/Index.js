import React, { useState } from 'react'
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom'
import TableSection from './TableSection';

const Pricing = (props) => {
    const [state, setState] = useState({
        choosenPackIdx: null, contestType: null
    })

    const contestTypes = [
        { title: 'Public', price: 'Free', desc: 'Kontes tampil secara umum di website Creat It.', options: ['Siapapun bisa melihat progres kontes kamu; Creator maupun bukan', 'Lebih banyak creator yang dapat tertarik mengikuti kontes kamu'] },
        { title: 'Stealth', price: '200k', desc: 'Progress kontes kamu tidak kasat mata dan akan tampil hanya setelah kontes selesai', options: ['Hanya kamu sebagai pembuat kontes yang dapat melihat progress kontes', 'Hasil kontes akan tampil lebih unik'] },
        { title: 'Ninja', price: '500k', desc: 'Tidak akan ada yang tahu keberadaan kontes kamu. Apakah ini nyata atau hanya sebuah ilusi?', options: ['Hanya kamu sebagai pembuat kontes yang dapat melihat progress dan hasil kontes yang rahasia ini', 'Pengerjaan kontes dilakukan secara rahasia, sehingga para Creator yang mendaftar harus menandatangani perjanjian rahasia.'] }
    ]

    const onChoose = (index) => {
        setState({ ...state, choosenPackIdx: index })
    }

    const pickContestType = (type) => {
        setState({ ...state, contestType: type })
    }

    return (
        <div>

            <div className='bg-light'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md d-flex'>
                            <div className='m-auto'>
                                <img src={require('../../Modules/images/logo.png')} width='200px' />
                                <h6 className='mt-4 text-secondary'>Brief / <strong>Pricing</strong></h6>
                                <h3 className='font-weight-bold text-main'>Pricing</h3>
                                <h1 className='text-main font-weight-bold'>Create Contest</h1>
                                <div className='text-secondary'>
                                    Pilih paket harga sesuai kebutuhanmu dan kantongmu. Hasil desain nanti akan seutuhnya menjadi hak milik kamu.
                                </div>
                            </div>
                        </div>
                        <div className='col-md d-flex'>
                            <img src={require('../../Modules/images/brief-mascot.png')} width='60%' className='m-auto' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <h3 className='font-weight-bold text-secondary'>Paket Harga</h3>
                <TableSection onChoose={onChoose} choosenPackIdx={state.choosenPackIdx} />
            </div>

            <div className='bg-light py-5 text-secondary'>
                <div className='container my-3'>
                    <div className='d-flex mb-2'>
                        <div className='bg-white rounded-lg border mr-3 shadow-sm' style={{ width: '40px', height: '40px' }}></div>
                        <h2>Featured Contest ( <NumberFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'IDR. '} /> )</h2>
                    </div>
                    <div className='ml-3' style={{ maxWidth: '600px' }}>
                        <h6 style={{ maxWidth: '500px' }}>Jadikan kontesmu lebih meriah dengan topping ini. yang memiliki keuntungan:</h6>
                        <div className='d-flex my-auto py-3'>
                            <i className='fa fa-check text-success mr-3' style={{ fontSize: '30px' }} />
                            <h6 className='my-auto'>Kontes akan berada di bagian paling atas dengan tampilan tersendiri sehingga akan menarik perhatian para creator!</h6>
                        </div>
                        <div className='d-flex my-auto pb-3'>
                            <i className='fa fa-check text-success mr-3' style={{ fontSize: '30px' }} />
                            <h6 className='my-auto'>Creator akan mendapatkan bonus dengan kamu menjadi pahlawan mereka!</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container py-5'>
                <h3 className='font-weight-bold text-secondary'>Tipe Kontes</h3>
                <div className='justify-content-center d-flex flex-wrap'>
                    {contestTypes.map(item => (
                        <div className={'bg-light px-5 py-4 m-3 text-secondary border-main' + (state.contestType == item.title ? '-active' : '')}
                            style={{ borderRadius: '20px', maxWidth: '500px' }}>
                            <div className='d-flex'>
                                <i className='fa mr-2 text-main my-auto fa-wine-bottle' style={{ fontSize: '30px' }} />
                                <h2 className='text-main font-weight-bold my-auto ml-3'>{item.title}</h2>
                                <h5 className='text-secondary my-auto ml-auto'>{item.price}</h5>
                            </div>
                            <div className='my-3'>
                                {item.desc}
                            </div>
                            {item.options?.map(opt => (
                                <div className='d-flex my-auto pb-3'>
                                    <i className='fa fa-check text-success mr-3' style={{ fontSize: '30px' }} />
                                    <h6 className='my-auto'>{opt}</h6>
                                </div>
                            ))}
                            <div className='d-flex'>
                                <button className='btn btn-category px-5 py-3 ml-auto' onClick={() => pickContestType(item.title)}>Pilih</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container py-5'>
                <div className='d-flex flex-wrap pb-3'>
                    <button className='btn btn-main px-5 py-3 m-2'>Simpan</button>
                    <button className='btn btn-main px-5 py-3 m-2'>Lanjut</button>
                </div>
                <div>
                    <hr />
                    <div className='d-flex flex-wrap'>
                        <div className='text-main'>
                            <h5>@{new Date().getFullYear()} CreateIt!</h5>
                            <div className='d-flex'>
                                <i className='fa fa-phone mr-2 my-auto' />
                                <h6 className='my-auto'>(+62) 123 1234 1234</h6>
                            </div>
                        </div>
                        <div className='ml-auto'>
                            <Link className='mx-2 text-decoration-none text-main' to='#'>Syarat & Ketentuan</Link>
                            <Link className='mx-2 text-decoration-none text-main' to='#'>Kebijakan Privasi</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pricing