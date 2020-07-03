import React from 'react'
import { Button } from '../Components/Index'
import {withRouter} from 'react-router-dom'

const Page404 = (props) => {
    return (
        <div className='d-flex vh-100 shape-wave-bottom'>
            <div className='container m-auto '>
                <div className='row'>
                    <div className='col-md d-flex'>
                        <img src={require('../Modules/images/page_not_found.svg')} width='75%' className='m-auto' />
                    </div>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='font-weight-bold mb-auto mx-auto'>Page Not Found!</h1>
                            <h3 className='my-3'>It looks like the page you're looking is not available right now.</h3>
                            <Button label='Back to previous page' className='btn-main' onClick={props.history.goBack}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Page404)