import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { login } from "../../Context/Base_Api_Url";
import { useAppContextProvider } from "../../Context/Context";
import { toast } from "react-toastify";
import './Authentication.css'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const passwordShowToggle = () => { setShowPassword(!showPassword) };
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [fieldError, setFieldError] = useState('');
    const [loading, setLoading] = useState(false);
    const { encryptData, decryptData } = useAppContextProvider();

    useEffect(() => {
        const checkAuth = async () => {
            const storedData = localStorage.getItem('roots');
            if (!storedData) return;

            try {
                const decryptedData = await decryptData(storedData);
                if (decryptedData?.accessToken) { navigate('/') }
            } catch (error) {
                console.error('Error decrypting data:', error);
                localStorage.removeItem('roots');
            }
        };

        checkAuth();
    }, [navigate, decryptData]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setFieldError('');
        setLoading(true);

        try {
            if (!user || !password) {
                return setFieldError("user and password is required...!!")
            }
            const response = await fetch(login, {
                method: 'POST', headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ user: user, password: password }),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success(data.message || 'Login Success!')
                localStorage.setItem('roots', encryptData(data)); // Encrypt user data
                navigate('/');
            } else {
                setFieldError(data.message || 'User and Password Invalid');
                console.error('Login failed:', data);
            }

        } catch (error) {
            setFieldError('Internal Server Error');
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout title='Login'>
            <section className='d-flex align-items-center justify-content-center py-5 login_section'>
                <div className="row justify-content-center w-100">
                    <div className="col-md-4">
                        <form onSubmit={handleSubmit} className='shadow-sm bg-white p-4'>
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label className='form-label'>Email Address</label>
                                    <input type="text" className='form-control rounded-0' value={user} onChange={(e) => setUser(e.target.value)} required disabled={loading} />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label className='form-label'>Password</label>
                                    <div className='position-relative'>
                                        <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className='form-control rounded-0' required disabled={loading} />
                                        <button type="button" className='password_show_btn' onClick={passwordShowToggle}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                                    </div>
                                    <small className="text-danger">{fieldError}</small>
                                </div>
                                <div className="col-md-12 mt-3">
                                    <button type="submit" className='btn btn-success rounded-0 w-100' disabled={loading}>{loading ? 'Please Wait...' : 'Sign In'}</button>
                                    <p className='text-center m-0 mt-4'>I don't have an account <Link to='/register'>Register</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Login