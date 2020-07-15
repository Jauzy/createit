import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import ListCard from './ListCard'

const Contest = props => {
    const [state, setState] = useState({
        industryType: 'Pilih industri', category: 'Pilih kategori', filter: 'Terbaru'
    })
    return (
        <div>

            <div className='bg-main text-white'>
                <div className='container py-5'>
                    <h2 className='mt-5 mb-0'>Cari</h2>
                    <h1>Contest</h1>
                </div>
            </div>

            <div className='container py-5'>
                <div className='d-flex flex-wrap'>
                    <div style={{ width: '200px' }} className='mx-2 my-auto'>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            onChange={(item) => setState({ ...state, category: item.value })}
                            value={{ value: state.category, label: state.category }}
                            options={[{ value: 'Logo & Branding', label: 'Logo & Branding' }]}
                        />
                    </div>
                    <div style={{ width: '200px' }} className='mx-2 my-auto'>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            onChange={(item) => setState({ ...state, industryType: item.value })}
                            value={{ value: state.industryType, label: state.industryType }}
                            options={[{ value: 'Industri Kreatif', label: 'Industri Kreatif' }]}
                        />
                    </div>
                    <div style={{ width: '200px' }} className='mx-2 my-auto'>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            onChange={(item) => setState({ ...state, filter: item.value })}
                            value={{ value: state.filter, label: state.filter }}
                            options={[{ value: 'Terbaru', label: 'Terbaru' }]}
                        />
                    </div>
                    <button className='my-auto btn btn-main px-4 mx-2'>Search</button>
                </div>

                <div className='mt-4'>
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <button className='btn btn-main btn-block'>Tampilkan lebih banyak</button>
                </div>

            </div>

        </div>
    )
}

export default Contest