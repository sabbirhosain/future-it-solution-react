import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Authentication.css'
import Layout from "../../Layout/Layout";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const passwordShowToggle = () => { setShowPassword(!showPassword) };

    return (
        <Layout title='Register'>
            <section className='d-flex align-items-center justify-content-center py-5 register_section'>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form className='shadow-sm bg-white px-5 py-4'>
                            <h4 className='text-center pt-4 pb-5'>Register Now</h4>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>First Name</label>
                                    <input type="text" className='form-control rounded-0' />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Last Name</label>
                                    <input type="text" className='form-control rounded-0' />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Country</label>
                                    <input type="text" className='form-control rounded-0' />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Phone Number</label>
                                    <input type="text" className='form-control rounded-0' />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className='form-label'>Email Address</label>
                                    <input type="email" className='form-control rounded-0' />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Password</label>
                                    <input type={showPassword ? "text" : "password"} className='form-control rounded-0' />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Confirm Password</label>
                                    <div className='position-relative'>
                                        <input type={showPassword ? "text" : "password"} className='form-control rounded-0' />
                                        <button type="button" className='password_show_btn' onClick={passwordShowToggle}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                                    </div>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <button type="submit" className='btn btn-success rounded-0 w-100'>Register</button>
                                    <p className='text-center mt-4'>I have already an account <Link to='/login'>Login</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Register