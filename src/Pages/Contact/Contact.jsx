import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { BiMailSend } from "react-icons/bi";
import Layout from "../../Layout/Layout";
import './Contact.css';
import { useEffect, useState } from "react";

const Contact = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            const handleLoad = () => setLoading(false);
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    return (
        <Layout title='Contact'>
            <section className='countact_us'>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-6">
                            <form action="">
                                <div className="row border px-3 py-4">
                                    <div className="col-md-6 mb-3">
                                        <label className='form-label form_label'>Your Name</label>
                                        <input type="text" className='form-control rounded-0 form_control' required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className='form-label form_label'>Your Email</label>
                                        <input type="email" className='form-control rounded-0 form_control' required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className='form-label form_label'>Phone Number</label>
                                        <input type="text" className='form-control rounded-0 form_control' required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className='form-label form_label'>Address</label>
                                        <input type="text" className='form-control rounded-0 form_control' required />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label className='form-label form_label'>Subject</label>
                                        <input type="text" className='form-control rounded-0 form_control' required />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <textarea rows='4' className='form-control rounded-0 form_control' placeholder='Your Massage...' required />
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <button type='submit' className='contact_submit_btn'><BiMailSend />Submit Now</button>
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