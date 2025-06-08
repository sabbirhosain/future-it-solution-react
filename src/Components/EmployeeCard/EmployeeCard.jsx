import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import './EmployeeCard.css';
import team1 from '../../assets/our-team/team2.png'
const EmployeeCard = () => {
    return (
        <div className="col-md-3 mb-4">
            <div className="employee_card">
                <div className="employee_img">
                    <img src={team1} className="img-fluid" alt="Team Member" />
                </div>
                <div className="employee_card_info">
                    <Link to='' className='employee_name'>Md. Sabbir Hosain</Link>
                    <span className='employee_title'>CEO, Founder</span>
                    <hr className="hr mx-0" />
                    <div className='d-flex align-items-center justify-content-between pb-2'>
                        <div className='d-flex align-items-center gap-1'>
                            <div className='employee_social_icon'><FaFacebookF /></div>
                            <Link to='' className='employee_social_name'>Facebook</Link>
                        </div>
                        <div className='d-flex align-items-center gap-1'>
                            <div className='employee_social_icon'><FaLinkedinIn /></div>
                            <Link to='' className='employee_social_name'>Linkedin</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
