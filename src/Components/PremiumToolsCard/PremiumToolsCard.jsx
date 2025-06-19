import { TbListDetails } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import image from '../../assets/tools-image/1.png'
import { Link } from "react-router-dom";
import './PremiumToolsCard.css';

const PremiumToolsCard = ({ item }) => {
  const { _id, tools_name, short_description, total_rating, total_sold, pricing_tiers } = item || {};
  const { price, currency, discount } = pricing_tiers[0] || {};

  return (
    <div className="col-md-3 mb-5">
      <div className='tools_service_card_box'>
        <div className='tools_service_img_box'>
          <img src={image} className="img-fluid" alt="Tools Image" />
          {discount && <span className='tools_service_discount'>- {discount}% OFF</span>}
        </div>
        <div className="d-flex align-items-center mt-1">
          <span className='tools_service_price'>{price} {currency}</span>
          <span className='tools_service_rating'>
            <FaStar style={{ color: 'gold' }} /> {total_rating} ({total_sold})
          </span>
        </div>
        <div className='tools_service_text_box'>
          <Link to={`/premium-tools/${_id}`} className='tools_service_title'>{tools_name}</Link>
          <span className='tools_service_descrip'>{short_description}</span>
          <div className='d-flex align-items-center gap-1 pt-3'>
            <Link to={`/premium-tools/${_id}`} className='btn btn-success w-100 rounded-0 btn-sm'>BUY NOW</Link>
            <Link to={`/premium-tools/${_id}`} className='btn btn-outline-success rounded-0 btn-sm'> <TbListDetails /> </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PremiumToolsCard;