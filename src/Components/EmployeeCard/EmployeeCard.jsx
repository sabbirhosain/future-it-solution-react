import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import './EmployeeCard.css';
const EmployeeCard = ({ member }) => {
    const socialIcons = {
        facebook: { icon: <FaFacebookF />, label: 'Facebook' },
        linkedin: { icon: <FaLinkedinIn />, label: 'LinkedIn' }
    };

    return (
        <div className="col-md-3 mb-4">
            <div className="employee_card">
                <div className="employee_img">
                    <img src={member.image} className="img-fluid" alt={member.name} />
                </div>
                <div className="employee_card_info">
                    <Link to='' className='employee_name'>{member.name}</Link>
                    <span className='employee_title'>{member.title}</span>
                    <hr className="hr mx-0" />
                    <div className='d-flex align-items-center justify-content-between pb-2'>

                        {member.social_media.map((social, index) => {
                            const platform = social.platform.toLowerCase();
                            const socialData = socialIcons[platform];

                            return socialData ? (
                                <div key={index} className="d-flex align-items-center gap-1">
                                    <div className="employee_social_icon">{socialData.icon}</div>
                                    <a href={social.url} className="employee_social_name" target="_blank" rel="noopener noreferrer"> {socialData.label} </a>
                                </div>
                            ) : null;
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeCard;
