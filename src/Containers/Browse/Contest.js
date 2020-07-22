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
        industryType: 'Pilih industri', category: 'Pilih kategori', filter: 'Terbaru'
    })

    useEffect(() => {
        props.getContests()
    }, [])

    const checkPermission = (contestType) => {
        if (contestType == 'Public') return true
        else if (contestType == 'Stealth') {
            return true
        } else if(contestType == 'Ninja'){
            return user?.type == 'creator'
        }
        else {
            return false
        }
    }

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
                    {props.contests?.map(item => (
                        checkPermission(item.contestType) && <ListCard item={item} key={item.name} />
                    ))}
                    <button className='btn btn-main btn-block'>Tampilkan lebih banyak</button>
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