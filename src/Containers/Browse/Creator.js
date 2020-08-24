import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import ListCard from './ListCardCreator'

import LoadingOverlay from 'react-loading-overlay'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import participationAction from '../../Modules/Redux/Actions/Participation'

const ROUTES = require('../../Constants/Routes')

const Creator = props => {

    const [state, setState] = useState({
        filter: 'Terbaru'
    })

    const [fullList, setFullList] = useState(props.participations)
    const [participations, setparticipations] = useState(props.participations)
    const [maxSearch, setMaxSearch] = useState(2)

    const checkPermission = () => {
        return true
    }

    useEffect(() => {
        props.getParticipations()
    }, [])

    useEffect(() => {
        if (fullList)
            setparticipations(fullList?.slice(0, maxSearch))
    }, [maxSearch])

    useEffect(() => {
        if (props.participations) {
            setFullList(props.participations)
            setparticipations(props.participations.slice(0, maxSearch))
        }
    }, [props.participations])

    return (
        <LoadingOverlay spinner active={props.loading} text='Loading please wait..'>
            
            <div className='bg-main text-white'>
                <div className='container py-5'>
                    <h2 className='mt-5 mb-0'>Cari</h2>
                    <h1>Creator</h1>
                </div>
            </div>

            <div className='container py-5'>
                <div className='bg-main col-md-9' style={{ borderRadius: '15px'}}>
                    <div className='d-flex flex-md-row flex-column pb-3'>
                        <div className='text-white mt-3 col-md-7'>
                            <p><strong>Tidak Mendapat Layanan atau Creator yang Diinginkan?</strong><br/>It's Your Lucky Day! Kontak Kami untuk Mendapatkan Layanan Digital Kreatif yang Kamu Butuhkan!</p>
                        </div>
                        <div className='col-md d-flex'>
                            <div className='m-md-auto justify-content-start'>
                                <Link className='btn btn-light px-5 py-3 text-primary' to={ROUTES.DESIGNCATEGORY} style={{ borderRadius: '15px' }}><strong>Konsultasi Gratis!</strong></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    {participations?.map(item => (
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
        participations: state.participation.participations,
        loading: state.participation.loading,
        error: state.participation.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getParticipations: () => dispatch(participationAction.getParticipations()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Creator))