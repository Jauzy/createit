import React, { useEffect } from 'react'
import bsCustomFileInput from 'bs-custom-file-input'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import Select from 'react-select';

const Brief = (props) => {
    useEffect(() => {
        $(document).ready(function () {
            bsCustomFileInput.init()
        })
    }, [])
    return (
        <div className=''>

            <div className='bg-'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md d-flex'>
                            <div className='m-auto'>
                                <img src={require('../Modules/images/logo.png')} width='200px' />
                                <h3 className='mt-4 font-weight-bold text-main'>Brief Kreatif</h3>
                                <h1 className='text-main font-weight-bold'>Create Contest</h1>
                                <div className='text-secondary'>
                                    Isi brief kreatif sebaik mungkin supaya Creator bisa memahami keinginanmu dengan mudah. Tenang aja, ini bukan ujian semester kok, take your time!
                                </div>
                            </div>
                        </div>
                        <div className='col-md d-flex'>
                            <img src={require('../Modules/images/brief-mascot.png')} width='60%' className='m-auto' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-light'>
                <div className='container py-5'>

                    <div className='row'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Nama Project*</label>
                                <input type="email" class="form-control is-invalid" aria-describedby="emailHelp" />
                                <small id="emailHelp" class="form-text text-muted">Masukan Namamu.</small>
                                <div class="invalid-feedback">
                                    *Harus diisi.
                                </div>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Deskripsi Project*</label>
                                <textarea class="form-control is-invalid" rows="3"></textarea>
                                <small id="emailHelp" class="form-text text-muted">Deskripsikan seperti apa projek yang ingin kamu buat.</small>
                                <div class="invalid-feedback">
                                    *Harus diisi.
                                </div>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Tujuan Penggunaan Project*</label>
                                <textarea class="form-control is-invalid" rows="3"></textarea>
                                <small id="emailHelp" class="form-text text-muted">Ceritakan tujuan dari projekmu.</small>
                                <div class="invalid-feedback">
                                    *Harus diisi.
                                </div>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Upload Desain Referensi*</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" id="customFile" />
                                    <label class="custom-file-label" for="customFile">Choose file</label>
                                </div>
                                <small id="emailHelp" class="form-text text-muted">Kirim referensi desain supaya Creator bisa tahu seleramu. Max 1Mb dengan Format Image.</small>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Jenis Industri Perusahaanmu*</label>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={{ value: null, label: 'Pilih industri' }}
                                    isLoading={false}
                                    isClearable={false}
                                    isRtl={false}
                                    isSearchable={false}
                                    name="color"
                                    options={[{ value: 'Industri Kreatif', label: 'Industri Kreatif' }]}
                                />
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Website / Media Sosial Perusahaanmu*</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Apa Creator diperbolehkan menampilkan hasil Desainmu sebagai portofolio Createit?*</label>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={{ value: null, label: 'Pilih Izin' }}
                                    isLoading={false}
                                    isClearable={false}
                                    isRtl={false}
                                    isSearchable={false}
                                    name="permission"
                                    options={[{ value: false, label: 'Tidak' }, { value: true, label: 'Boleh' }]}
                                />
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>
                    <hr />

                    <div className='row pt-3'>
                        <div className='col-md'>
                            <div class="form-group">
                                <label className='font-weight-bold text-dark'>Catatan Tambahan untuk Creator*</label>
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div className='col-md'></div>
                    </div>

                </div>
            </div>

            <div className='container py-5'>
                <div className='d-flex flex-wrap pb-3'>
                    <button className='btn btn-main px-5 py-3 m-2'>Simpan</button>
                    <button className='btn btn-main px-5 py-3 m-2'>Lanjut</button>
                </div>
                <div>
                    <hr />
                    <div className='d-flex flex-wrap'>
                        <div className='text-main'>
                            <h5>@{new Date().getFullYear()} CreateIt!</h5>
                            <div className='d-flex'>
                                <i className='fa fa-phone mr-2 my-auto' />
                                <h6 className='my-auto'>(+62) 123 1234 1234</h6>
                            </div>
                        </div>
                        <div className='ml-auto'>
                            <Link className='mx-2 text-decoration-none text-main' to='#'>Syarat & Ketentuan</Link>
                            <Link className='mx-2 text-decoration-none text-main' to='#'>Kebijakan Privasi</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Brief