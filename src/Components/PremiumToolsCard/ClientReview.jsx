import { VscVerifiedFilled } from "react-icons/vsc";
import { FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";
import clientReviewImg from '../../assets/user_image.png'
import './ClientReview.css'

const ClientReview = () => {
    return (
        <div className="col-md-12">
            <div className='coustomer_review_box'>
                <div className="row align-items-center border-bottom pb-3">
                    <div className="col-4">
                        <div className="d-flex align-items-center gap-3">
                            <div className='services_icon_box'>
                                <img src={clientReviewImg} className="img-fluid" alt="Client Image" />
                            </div>
                            <div>
                                <Link href='' className='coustomer_review_name'>Sabbir Hosain <VscVerifiedFilled style={{ color: 'blue' }} /></Link>
                                <span className='coustomer_review_country'>Bangladesh - 1week ago</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='coustomer_reviews_star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    </div>
                </div>
                <p className='coustomer_review_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quis sunt consequuntur sequi porro. Eligendi magni assumenda et delectus consequuntur ullam suscipit perspiciatis magnam natus beatae ad, quae iusto ut voluptatibus reprehenderit reiciendis dignissimos velit accusantium placeat dolorem soluta commodi ab quibusdam? Perspiciatis delectus, eos labore alias odio totam nisi.</p>
            </div>
        </div>
    )
}

export default ClientReview