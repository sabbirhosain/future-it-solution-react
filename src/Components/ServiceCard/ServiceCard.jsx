import { TbListDetails } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import serviceImg from '../../assets/service-image/service1.png'
import './ServiceCard.css'

const ServiceCard = () => {
    return (
        <div className="col-md-4 mb-5">
            <div className='service_card_box'>
                <div className='service_img_box'>
                    <img src={serviceImg} className="img-fluid" alt="Tools Image" />
                    <span className='service_discount'>- 10% OFF</span>
                </div>
                <div className="d-flex align-items-center mt-1">
                    <span className='service_price'>Available</span>
                    <span className='service_rating'><FaStar style={{ color: 'gold' }} />4.9 ( 220 )</span>
                </div>
                <div className='service_text_box'>
                    <Link to='/services-details/1' className='service_title'>Apollo.io Email Account</Link>
                    <span className='service_descrip'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi, voluptate aut facilis sunt nihil blanditiis hic asperiores voluptatem atque!</span>
                    <hr className="hr"/>
                    <div className='d-flex align-items-center flex-wrap gap-1'>
                        <button className="service_tag">Job Seeker</button>
                        <button className="service_tag">Job Seeker</button>
                        <button className="service_tag">Job Seeker</button>
                        <button className="service_tag">Job Seeker</button>
                        <button className="service_tag">Job Seeker</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard