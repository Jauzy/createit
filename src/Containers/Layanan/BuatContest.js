import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import contestAction from '../../Modules/Redux/Actions/Contest'

const BuatContest = (props) => {

    const onCreateContest = () => {
        props.createContest('Logo & Branding Kit', 'Logo', props.history)
    }

    return (
        <div className='container'>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='text-main font-weight-bold'>Lorem Ipsum Dolor Sit Amet Consectetur!</h1>
                            <h6 className='mt-3 mb-5 text-secondary'>praesent luctus ante id orci venenatis efficitur at in dui</h6>
                            <Link className='btn btn-success px-5 py-3' onClick={onCreateContest}>Create Contest!</Link>
                        </div>
                    </div>
                    <div className='col-md d-flex'>
                        <img src={require('../../Modules/images/81.jpg')} width='100%' className='m-auto d-none d-md-block' />
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                <div className='d-flex flex-column'>
                    <div className='text-center mx-auto mt-5 d-flex flex-column'>
                        <h1 className='font-weight-bold mx-auto' style={{ maxWidth: '700px' }}>Lorem Ipsum Dolor Sit Amet</h1>
                        <h6 className='text-secondary mt-2' style={{ maxWidth: '550px' }}>
                            Nam eu ipsum sed libero pulvinar eleifend eu sed diam. Praesent sollicitudin bidendum feugiat.
                        </h6>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='mb-5'>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-3 col-12 my-4 mr-5' style={{ borderRight: '1px solid #BDC3C7'}}>
                            <div className='rounded-circle bg-main text-white d-flex' style={{ width: '50px', height: '50px' }}></div>
                            <h4 className='font-weight-bold mt-4'>Preasent lobortis</h4>
                            <h6 className='text-secondary mt-3'>Nam eu ipsum sed libero pulvinar eleifend eu sed diam. Praesent sollicitudin bidendum feugiat.</h6>
                        </div>
                        <div className='col-md-3 col-12 my-4 mr-5' style={{ borderRight: '1px solid #BDC3C7'}}>
                            <div className='rounded-circle bg-main text-white d-flex' style={{ width: '50px', height: '50px' }}></div>
                            <h4 className='font-weight-bold mt-4'>Preasent lobortis</h4>
                            <h6 className='text-secondary mt-3'>Nam eu ipsum sed libero pulvinar eleifend eu sed diam.</h6>
                        </div>
                        <div className='col-md-3 col-12 my-4'>
                            <div className='rounded-circle bg-main text-white d-flex' style={{ width: '50px', height: '50px' }}></div>
                            <h4 className='font-weight-bold mt-4'>Preasent lobortis</h4>
                            <h6 className='text-secondary mt-3'>Nam eu ipsum sed libero pulvinar eleifend eu sed diam.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='container py-5 d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md d-flex mb-5'>
                        <img src={require('../../Modules/images/6255.png')} width='50%' className='m-auto' />
                    </div>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='text-main font-weight-bold'>Lorem Ipsum Dolor Sit Amet Consectetur!</h1>
                            <h6 className='mt-3 mb-5 text-secondary'>praesent luctus ante id orci venenatis efficitur at in dui</h6>
                            <Link className='btn btn-success px-5 py-3' onClick={onCreateContest}>Create Contest!</Link>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md d-flex'>
                        <img src={require('../../Modules/images/iconfinder_icon-person_211874.svg')} width='100%' className='m-auto d-none d-md-block' />
                    </div>
                    <div className='col-md-1'>
                        <img src={require('../../Modules/images/pngegg.png')} height='30%' className='m-auto d-none d-md-block' style={{ opacity: '0.5'}} />
                    </div>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='text-main font-weight-bold'>Lorem Ipsum Dolor Sit Amet Consectetur".</h1>
                            <h6 className='mt-3 mb-5 text-secondary'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus lacinia purus non accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec malesuada dui vei tortor fermentum dapibus. Donec consectetur diam vel lacus porta.
                            </h6>
                            <div className='container'>
                                <div className='row d-flex align-items-center'>
                                    <div className='rounded-circle bg-main text-white d-flex' style={{ width: '50px', height: '50px' }}></div>
                                    <div className='col ml-2'>
                                        <h5 className='text-main font-weight-bold pt-3'>JohnDoe</h5>
                                        <p className='text-secondary'>Bandung</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mx-auto d-flex flex-column'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-3 col-12 my-4'>
                        <div className='d-flex justify-content-center'>
                            <div className='rounded-circle bg-main text-white d-flex' style={{ width: '75px', height: '75px' }}></div>
                        </div>
                        <h3 className='font-weight-bold mt-4'>200</h3>
                        <h4 className='font-weight-bold'>Preasent lobortis</h4>
                    </div>
                    <div className='col-md-3 col-12 my-4'>
                        <div className='d-flex justify-content-center'>
                            <div className='rounded-circle bg-main text-white d-flex' style={{ width: '75px', height: '75px' }}></div>
                        </div>
                        <h3 className='font-weight-bold mt-4'>200</h3>
                        <h4 className='font-weight-bold'>Preasent lobortis</h4>
                    </div>
                    <div className='col-md-3 col-12 my-4'>
                        <div className='d-flex justify-content-center'>
                            <div className='rounded-circle bg-main text-white d-flex' style={{ width: '75px', height: '75px' }}></div>
                        </div>
                        <h3 className='font-weight-bold mt-4'>200</h3>
                        <h4 className='font-weight-bold'>Preasent lobortis</h4>
                    </div>
                </div>
            </div>
            <div className='mb-5'>
                <div className='d-flex flex-column'>
                    <div className='text-center mx-auto mt-5 d-flex flex-column'>
                        <h6 className='text-secondary mt-2' style={{ maxWidth: '550px' }}>
                            Nam eu ipsum sed libero pulvinar eleifend eu sed diam. Praesent sollicitudin bidendum feugiat.
                        </h6>
                    </div>
                </div>
            </div>
            <div className='text-center my-5'>
                <Link className='btn btn-success px-5 py-3' onClick={onCreateContest}>Create Contest!</Link>
            </div>
            <hr></hr>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h1 className='text-main font-weight-bold'>Lorem Ipsum Dolor Sit Amet Consectetur!</h1>
                            <h6 className='mt-3 mb-5 text-secondary'>praesent luctus ante id orci venenatis efficitur at in dui</h6>
                            <h5 className='text-main font-weight-bold'>Free Consult Now</h5>
                        </div>
                    </div>
                    <div className='col-md d-flex'>
                        <img src={require('../../Modules/images/5283.jpg')} width='100%' className='m-auto d-none d-md-block' />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createContest: (category, subCategory, history) => dispatch(contestAction.createContest(category, subCategory, history)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BuatContest))