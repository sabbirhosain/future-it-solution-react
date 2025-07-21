import { FaStar } from "react-icons/fa";
import DEFAULT_IMAGE from '../../assets/tools-1.jpg'
import { Link } from "react-router-dom";
import './PremiumToolsCard.css';

const PremiumToolsCard = ({ item }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className='tools_service_card_box'>
        <div className='tools_service_img_box'>
          <img src={item.attachment?.secure_url || DEFAULT_IMAGE} className="img-fluid" alt={item.tools_name ?? 'Tools Image'} />
          {item.discount && <span className='tools_service_discount bg-danger'>{item.discount} % OFF</span>}
        </div>
        <div className="d-flex align-items-center mt-1">
          <span className='tools_service_price'>{item.currency === 'BDT' ? '৳' : '$'} {item.price}</span>
          <span className='tools_service_rating'> <FaStar style={{ color: 'gold' }} /> {item.avg_rating} ({item.total_sold}) </span>
        </div>
        <div className='tools_service_text_box'>
          <Link to={`/premium-tools/${item._id}`} className='tools_service_title'>{item.item_name}</Link>
          <span className='tools_service_descrip'>Duration : {item.expired} {item.expired_type}</span>
          <div className='d-flex align-items-center gap-1 pt-3'>
            <Link to={`/premium-tools/checkout/${item._id}`} className='btn btn-success w-100 rounded-0 btn-sm'>BUY NOW</Link>
            <Link to={`/premium-tools/${item._id}`} className='btn btn-outline-success w-100 rounded-0 btn-sm'>DETAILS</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PremiumToolsCard;