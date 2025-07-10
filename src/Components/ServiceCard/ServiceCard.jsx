import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (
        <div className="col-md-4 mb-5">
            <div className='service_card_box'>
                <div className='service_img_box'>
                    <img src={service.image || '/default-service.png'} className="img-fluid" alt={service.title} />
                    {service.discount && (<span className='service_discount'>- {service.discount}% OFF</span>)}
                </div>

                <div className="d-flex align-items-center mt-1">
                    <span className='service_price'>{service.status === 'available' ? "Available" : "Unavailable"}</span>
                    {service.rating && (<span className='service_rating'> <FaStar style={{ color: 'gold' }} />{service.rating} ({service.sold || 0}) </span>)}
                </div>

                <div className='service_text_box'>
                    <Link to={`/services-details/${service.id}`} className='service_title'> {service.title}</Link>
                    <span className='service_descrip'>{service.short_desc || "No description provided."}</span>
                    <hr className="hr" />

                    <div className='d-flex align-items-center flex-wrap gap-1'>
                        {(service.tags || []).map((tag, index) => (<button key={index} className="service_tag">{tag}</button>))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
