import React from 'react'
import {Link} from 'react-router-dom'

const SignIn = props => {
    return (
        <div className='row'>
            <div className='col-md'>
                <img src={require('../Modules/images/download.png')} width='100%' />
            </div>
            <div className='col-md d-flex'>
                <div className='m-auto'>
                    <h1 className='text-main'>You Are Almost There!</h1>
                    <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                    <div className='mt-3'>
                        <label class="sr-only" for="inlineFormInputGroup">Email</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-main"><i className='fa fa-envelope text-white' /></div>
                            </div>
                            <input type="email" class="form-control" id="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label class="sr-only" for="inlineFormInputGroup">Password</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text bg-main"><i className='fa fa-key text-white' /></div>
                            </div>
                            <input type="password" class="form-control" id="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className='d-flex mt-3'>
                        <Link className='ml-auto text-main'>Forget Your Password?</Link>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-md d-flex'>
                            <button className='btn-main btn-block btn m-auto px-4 py-3'>Masuk</button>
                        </div>
                        <div className='col-md d-flex'>
                            <button className='btn-light btn m-auto px-4 py-3 text-secondary'>Belum punya akun ? <strong>Daftar</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn