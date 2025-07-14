import { FaRegEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiUserLocationLine } from "react-icons/ri";
import { RiSendPlane2Fill } from "react-icons/ri";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className='footer_section'>
      <div className="container">
        <div className="row justify-content-between border-bottom py-5">
          <div className="col-md-4">
            <Link className="" to="/">
              <div className="d-flex align-items-center gap-2">
                <span className='footer_logo_brand'>F</span>
                <span className='footer_logo_text'>It Solution</span>
              </div>
            </Link>
            <p className='footer_peragraph'>We are a results-driven digital agency focused on crafting innovative strategies, designing impactful experiences, and helping brands grow through creativity, technology, and a deep understanding of their audience.</p>
            <div className='footer_social_media_box'>
              <a href='https://www.facebook.com/futureitsolution.info/' target="_new" className='footer_social_media_box_icon'><FaFacebookF /></a>
              <a href='https://www.linkedin.com/company/future-it-solution/' target="_new" className='footer_social_media_box_icon'><FaLinkedinIn /></a>
              <a href='https://www.fiverr.com/quick_devlopers' target="_new" className='footer_social_media_box_icon'><FaInstagram /></a>
              <a href='https://www.fiverr.com/quick_devlopers' target="_new" className='footer_social_media_box_icon'><TbBrandFiverr /></a>
              <a href='https://www.upwork.com/freelancers/~01389c689555473e23?viewMode=1' target="_new" className='footer_social_media_box_icon'><SiUpwork /></a>
            </div>
          </div>
          <div className="col-md-3 my-4 my-md-0">
            <h2 className='quick_view'>Contact Info</h2>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className='footer_phone_icon'><MdOutlinePhoneInTalk /></span>
              <a href="https://api.whatsapp.com/send/?phone=%2B8801780741598&text=Hello%2C+I+want+to+know+more+about+your+services%3F&type=phone_number&app_absent=0" target="_new" className='footer_phone_text'>+880 178 0741 598</a>
            </div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className='footer_email_icon'><FaRegEnvelope /></span>
              <Link to="mailto:example@gmail.com" className='footer_email_text'>contact.futureitsolution@gmail.com</Link>
            </div>
            <div className="d-flex gap-2">
              <span className='footer_location_icon'><RiUserLocationLine /></span>
              <p className='footer_location_icon'>Based in Bangladesh | Available Worldwide</p>
            </div>
          </div>
          <div className="col-md-4">
            <h2 className='quick_view'>Subscribe For Latest Information</h2>
            <form className="d-flex" role="search">
              <input className="form-control rounded-0" type="search" placeholder="Email Address" />
              <button className="btn btn-success rounded-0" type="submit"><RiSendPlane2Fill /></button>
            </form>
          </div>
        </div>
        <div className="row align-items-center justify-content-between py-4">
          <div className="col-md-6">
            <p className='text-center text-md-start footer_copyright'>Copyright © 2025 Future It Solution. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3">
              <Link href='' className='text-center text-md-end terms_condition'>Terms & Condition</Link>
              <Link href='' className='text-center text-md-end terms_condition'>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer