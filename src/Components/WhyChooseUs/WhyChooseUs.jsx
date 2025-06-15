import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { LiaShippingFastSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";
import WhyChooseUsImg from '../../assets/choose-us/why-choose-us.png'
import { LiaUsersCogSolid } from "react-icons/lia";
import './WhyChooseUs.css'

const WhyChooseUs = () => {
    return (
        <div className='container'>
            <h2 className='section_tagline mb-4'><IoCheckmarkDoneOutline className='section_tagline_icon' /> Why Choose Us</h2>
            <div className='row justify-content-between'>
                <div className='col-md-6'>
                    <div className="row shadow-sm py-3 px-1 mb-3">
                        <div className="col-2">
                            <div className='why_choose_us_icon_box'>
                                <LiaUsersCogSolid />
                            </div>
                        </div>
                        <div className="col-10">
                            <h5 className='why_choose_us_title'>Experienced and Professional Team</h5>
                            <p className='why_choose_us_title_peragraph'>Our team brings years of industry expertise, creative insight, and strategic thinking to every project—ensuring your brand gets the attention it deserves.</p>
                        </div>
                    </div>
                    <div className="row shadow-sm py-3 px-1 mb-3">
                        <div className="col-2">
                            <div className='why_choose_us_icon_box'>
                                <LiaShippingFastSolid />
                            </div>
                        </div>
                        <div className="col-10">
                            <h5 className='why_choose_us_title'>Fast & Reliable Service</h5>
                            <p className='why_choose_us_title_peragraph'>We deliver high-impact marketing solutions on time, every time—so you can stay ahead of the competition without delays.</p>
                        </div>
                    </div>
                    <div className="row shadow-sm py-3 px-1">
                        <div className="col-2">
                            <div className='why_choose_us_icon_box'>
                                <GrCertificate />
                            </div>
                        </div>
                        <div className="col-10">
                            <h5 className='why_choose_us_title'>100% Satisfaction Guarantee</h5>
                            <p className='why_choose_us_title_peragraph'>Your success is our priority. We’re committed to delivering results you’ll love—or we’ll work until you do.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-5'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={WhyChooseUsImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs