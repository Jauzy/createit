import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import ListCard from './ListCardProject'

import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import projectAction from '../../Modules/Redux/Actions/Project'

const Project = props => {

    const [state, setState] = useState({
        industryType: { value: null, label: 'Pilih industri' }, category: { value: null, label: 'Pilih kategori' }, filter: 'Terbaru'
    })

    const [fullList, setFullList] = useState(props.projects)
    const [projects, setProjects] = useState(props.projects)
    const [maxSearch, setMaxSearch] = useState(2)

    const checkPermission = () => {
        return true
    }

    const onSearch = () => {
        let fullListT = props.projects
        if (state.industryType.value) {
            fullListT = fullListT.filter(e => e.industryType == state.industryType.value)
        }
        if (state.category.value) {
            fullListT = fullListT.filter(e => e.category == state.category.value)
        }
        setFullList(fullListT)
        setProjects(fullListT.slice(0, maxSearch))
    }

    useEffect(() => {
        props.getProjects()
    }, [])

    useEffect(() => {
        if (fullList)
            setProjects(fullList?.slice(0, maxSearch))
    }, [maxSearch])

    useEffect(() => {
        if (props.projects) {
            setFullList(props.projects)
            setProjects(props.projects.slice(0, maxSearch))
        }
    }, [props.projects])

    return (
        <LoadingOverlay spinner active={props.loading} text='Loading please wait..'>

            <div className='bg-main text-white'>
                <div className='container py-5'>
                    <h2 className='mt-5 mb-0'>Cari</h2>
                    <h1>Project</h1>
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
                    {projects?.map(item => (
                        checkPermission(item.contestType) && <ListCard item={item} key={item.name} />
                    ))}
                    {maxSearch < fullList?.length && <button className='btn btn-main btn-block' onClick={() => setMaxSearch(maxSearch + 5)}>Tampilkan lebih banyak</button>}
                    {fullList?.length < 1 && <h2 className='text-center my-3'>No project Found!</h2>}
                </div>

            </div>

        </LoadingOverlay>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        projects: state.project.projects,
        loading: state.project.loading,
        error: state.project.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProjects: () => dispatch(projectAction.getProjects()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Project))