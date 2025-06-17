import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { BiMailSend } from "react-icons/bi";
import Layout from "../../Layout/Layout";
import { useState } from "react";
import axios from "axios";
import { contact_form_send } from "../../Context/Base_Api_Url";
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [fieldError, setFieldError] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFieldError({});
        setLoading(true);

        try {
            const response = await axios.post(contact_form_send, {
                name: name,
                email: email,
                phone: phone,
                address: address,
                subject: subject,
                message: message
            });

            if (response && response.data) {
                window.confirm(response.data.message);
            }

        } catch (error) {
            setFieldError(error.response.data || 'Internal Server Error');
            console.error('Internal Server Error', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <Layout title='Contact'>
            <section className='countact_us'>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className="row border px-3 py-4">
                                    <div className="col-md-6 mb-3">
                                        <label className='form-label form_label'>Your Name</label>
                                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} className='form-control rounded-0 form_control' required disabled={loading} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className='form-label form_label'>Your Email</label>
                                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className='form-control rounded-0 form_control' required disabled={loading} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className='form-label form_label'>Phone Number</label>
                                        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} className='form-control rounded-0 form_control' required disabled={loading} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className='form-label form_label'>Address</label>
                                        <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} className='form-control rounded-0 form_control' required disabled={loading} />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label className='form-label form_label'>Subject</label>
                                        <input type="text" value={subject} onChange={(event) => setSubject(event.target.value)} className='form-control rounded-0 form_control' required disabled={loading} />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <textarea rows='4' value={message} onChange={(event) => setMessage(event.target.value)} className='form-control rounded-0 form_control' placeholder='Your Massage...' required disabled={loading} />
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <button type="submit" className='contact_submit_btn' disabled={loading}><BiMailSend />{loading ? 'Please Wait...' : 'Submit Now'}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5">
                            <div className='contact_us_info_box'>
                                <div className='mb-5'>
                                    <h5 className='contact_info_title'>Address</h5>
                                    <p className='contact_info_peragraph'>Chandipur Bazar, Bagha Rajshahi-6280, Bangladesh</p>
                                </div>
                                <div className='mb-5'>
                                    <h5 className='contact_info_title'>Contact Info</h5>
                                    <p className='contact_info_peragraph'>Phone : 0172-7147 610</p>
                                    <p className='contact_info_peragraph'>Email : contact@futureitsolution.com</p>
                                </div>
                                <div className='mb-5'>
                                    <h5 className='contact_info_title'>Time Schedule</h5>
                                    <p className='contact_info_peragraph'>Monday-Friday : 10:00AM to 12:00PM</p>
                                    <p className='contact_info_peragraph'>Saturday-Sunday : 10:00AM to 12:00PM</p>
                                </div>
                                <div className='contact_social_media_box'>
                                    <a href="" className='contact_social_media_icon'><FaFacebookF /></a>
                                    <a href="" className='contact_social_media_icon'><FaLinkedinIn /></a>
                                    <a href="" className='contact_social_media_icon'><FaInstagram /></a>
                                    <a href="" className='contact_social_media_icon'><TbBrandFiverr /></a>
                                    <a href="" className='contact_social_media_icon'><SiUpwork /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Contact