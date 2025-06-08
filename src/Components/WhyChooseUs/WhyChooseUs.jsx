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
                            <p className='why_choose_us_title_peragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias velit explicabo culpa dolor nulla non.</p>
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
                            <p className='why_choose_us_title_peragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias velit explicabo culpa dolor nulla non.</p>
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
                            <p className='why_choose_us_title_peragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias velit explicabo culpa dolor nulla non.</p>
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