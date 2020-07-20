import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate';

const CreatorContestList = props => {
    const [state, setState] = useState({
        mode: 'Grid', filter: 'Active',
        list: [],
        full_list: []
    })

    const filterBtn = [
        { title: 'Active', quantity: 0 },
        { title: 'Unrated', quantity: 0 },
        { title: '1-2 Stars', quantity: 0 },
        { title: '3-4 Stars', quantity: 0 },
        { title: 'Trash', quantity: 0 },
    ]

    const handlePageClick = data => {
        let selected = data.selected;

        setState({
            ...state,
            page_number: selected,
            list: state.full_list.slice((selected) * 20, (selected + 1) * 20)
        })
    };

    return (
        <div>
            <div className='bg-main text-white'>
                <div className='container py-5'>
                    <h2 className='mt-5 mb-0'>List</h2>
                    <h1>Contest</h1>
                </div>
            </div>

            <div className='container py-5'>
                <div className='d-flex flex-wrap'>
                    <div className='d-flex flex-wrap mr-auto justify-content-center'>
                        {filterBtn.map(item => (
                            <div className={'rounded-lg d-flex align-items-center justify-content-center btn m-1 btn-category' + (state.filter == item.title ? '-active' : '')}
                                style={{ width: '120px', height: '50px' }} onClick={() => setState({ ...state, filter: item.title })}>
                                {item.title} ({item.quantity})
                            </div>
                        ))}
                    </div>
                </div>

                <small className='text-secondary'>Showing (5) content</small>
                <div className='d-flex flex-wrap justify-content-center'>
                    {[1, 2, 3, 4].map(item => (
                        <Link className='m-2 text-decoration-none' style={{ maxWidth: '250px' }} to={'#'}>
                            <img width='100%' src={require('../../Modules/images/906560.png')} style={{ width: '250px', height: '250px', objectFit: 'cover' }} className='rounded-lg' />
                            <h5 className='text-secondary text-center mt-2'>Lorem Ipsum</h5>
                        </Link>
                    ))}
                </div>

                <div className='d-flex'>
                    <div className='m-auto'>
                        <ReactPaginate
                            previousLabel={'Prev'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={Math.ceil(state.full_list?.length / 20)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default CreatorContestList