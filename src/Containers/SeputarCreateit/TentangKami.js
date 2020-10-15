import React from 'react'

const TentangKami = (props) => {
    return (
        <div>
            <div className='container mt-5'>
                <div className='d-flex flex-column'>
                    <div className='text-center mx-auto mt-3 d-flex flex-column'>
                        <h1 className='text-main font-weight-bold mx-auto' style={{ maxWidth: '750px' }}>Lorem Ipsum Dolor Sit Amet Constectur</h1>
                        <h6 className='text-secondary mt-2 mx-auto' style={{ maxWidth: '800px' }}>
                            Praesent luctus ante id orci venenatis efficitur at in dui. Quisque accumsan rutrum erat. Curabitur sed bibendum tellus, nec pellentesque ante.
                        </h6>
                    </div>
                    <div className='text-center mx-auto d-flex flex-column'>
                        <img src={require('../../Modules/images/5471.jpg')} width='100%' className='m-auto' style={{ maxWidth: '825px' }}/>
                    </div>
                </div>
            </div>
            <div className='bg-light'>
                <div className='container mb-5 pt-5'>
                    <div className='text-center mx-auto d-flex flex-column mb-5'>
                        <h1 className='font-weight-bold mx-auto' style={{ maxWidth: '750px' }}>Lorem Ipsum Dolor Sit Amet</h1>
                    </div>
                    <div className='d-flex flex-column'>
                        <div className='d-flex flex-column mb-5'>
                            <h4 className='font-weight-bold' style={{ maxWidth: '750px' }}>Lorem Ipsum Dolor Sit Amet Constectur</h4>
                            <h6 className='text-secondary mt-2' style={{ maxWidth: '800px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus lacinia purus non accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec malesuada dui vel tortor fermentum dapibus. Donec consectetur diam vel lacus porta.
                            </h6>
                        </div>
                        <div className='d-flex flex-column mb-5'>
                            <h4 className='font-weight-bold' style={{ maxWidth: '750px' }}>Lorem Ipsum Dolor Sit Amet Constectur</h4>
                            <h6 className='text-secondary mt-2' style={{ maxWidth: '800px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus lacinia purus non accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                            </h6>
                        </div>
                        <div className='d-flex flex-column mb-5'>
                            <h4 className='font-weight-bold' style={{ maxWidth: '750px' }}>Lorem Ipsum Dolor Sit Amet Constectur</h4>
                            <h6 className='text-secondary mt-2' style={{ maxWidth: '800px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus lacinia purus non accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec malesuada dui vel tortor fermentum dapibus
                            </h6>
                        </div>
                        <div className='d-flex flex-column mb-5'>
                            <h4 className='font-weight-bold' style={{ maxWidth: '750px' }}>Lorem Ipsum Dolor Sit Amet Constectur</h4>
                            <h6 className='text-secondary mt-2' style={{ maxWidth: '800px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus lacinia purus non accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec malesuada dui vel tortor fermentum dapibus. Donec consectetur diam vel lacus porta.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md d-flex'>
                        <img src={require('../../Modules/images/iconfinder_icon-person_211874.svg')} width='100%' className='m-auto' />
                    </div>
                    <div className='col-md d-flex'>
                        <div className='m-auto'>
                            <h3 className='font-weight-bold'>Founder</h3>
                            <h6 className='mt-3 mb-5 text-secondary'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus lacinia purus non accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TentangKami