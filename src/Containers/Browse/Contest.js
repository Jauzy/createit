import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import ListCard from './ListCard'

import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import contestAction from '../../Modules/Redux/Actions/Contest'

const Contest = props => {
    const { user } = props
    const [state, setState] = useState({
        industryType: { value: null, label: 'Pilih industri' }, category: { value: null, label: 'Pilih kategori' }, filter: 'Terbaru'
    })
    const [fullList, setFullList] = useState(props.contests)
    const [contests, setContests] = useState(props.contests)
    const [maxSearch, setMaxSearch] = useState(2)

    const checkPermission = (contestType) => {
        if (contestType == 'Public') return true
        else if (contestType == 'Stealth') {
            return true
        } else if (contestType == 'Ninja') {
            return user?.type == 'creator'
        }
        else {
            return false
        }
    }

    const onSearch = () => {
        let fullListT = props.contests
        if (state.industryType.value) {
            fullListT = fullListT.filter(e => e.industryType == state.industryType.value)
        }
        if (state.category.value) {
            fullListT = fullListT.filter(e => e.category == state.category.value)
        }
        setFullList(fullListT)
        setContests(fullListT.slice(0, maxSearch))
    }

    useEffect(() => {
        props.getContests()
    }, [])

    useEffect(() => {
        if (fullList)
            setContests(fullList?.slice(0, maxSearch))
    }, [maxSearch])

    useEffect(() => {
        if (props.contests) {
            setFullList(props.contests)
            setContests(props.contests.slice(0, maxSearch))
        }
    }, [props.contests])

    return (
        <LoadingOverlay spinner active={props.loading} text='Loading please wait..'>

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
                            onChange={(item) => setState({ ...state, category: item })}
                            value={state.category}
                            options={[{ value: null, label: "Semua" }, { value: 'Logo & Branding', label: 'Logo & Branding' }]}
                        />
                    </div>
                    <div style={{ width: '200px' }} className='mx-2 my-auto'>
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            onChange={(item) => setState({ ...state, industryType: item })}
                            value={state.industryType}
                            options={[{ value: null, label: "Semua" }, { value: 'Industri Kreatif', label: 'Industri Kreatif' }, { value: 'Industri Teknologi', label: 'Industri Teknologi' }]}
                        />
                    </div>
                    <button className='my-auto btn btn-main px-4 mx-2' onClick={onSearch}>Search</button>
                </div>

                <div className='mt-4'>
                    {contests?.map(item => (
                        checkPermission(item.contestType) && <ListCard item={item} key={item.name} />
                    ))}
                    {maxSearch < fullList?.length && <button className='btn btn-main btn-block' onClick={() => setMaxSearch(maxSearch + 5)}>Tampilkan lebih banyak</button>}
                    {fullList?.length < 1 && <h2 className='text-center my-3'>No Contest Found!</h2>}
                </div>

            </div>

        </LoadingOverlay>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        contests: state.contest.contests,
        loading: state.contest.loading,
        error: state.contest.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getContests: () => dispatch(contestAction.getContests()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Contest))