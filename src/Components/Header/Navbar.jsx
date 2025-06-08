import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import { MdWifiCalling3, MdOutlineDashboardCustomize } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { SlSettings } from "react-icons/sl";
import './Navbar.css'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const logout = () => { confirm('Are You Sure ? You Want to Logout.') }
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className='top_header_bg'>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-8">
              <div className="d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-2">
                  <span className='top_header_phone_icon'><MdWifiCalling3 /></span>
                  <a href="https://wa.me/+8801727147610?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services?" target="new" className='top_header_phone_text'>0172-7147 610</a>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className='top_header_email_icon'><FaEnvelope /></span>
                  <a href="mailto:example@gmail.com" className='top_header_email_text'>contact@futureitsolution.com</a>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className='navbar_social_media_box'>
                <a href="" className='navbar_social_media_icon'><FaFacebookF /></a>
                <a href="" className='navbar_social_media_icon'><FaLinkedinIn /></a>
                <a href="" className='navbar_social_media_icon'><FaInstagram /></a>
                <a href="" className='navbar_social_media_icon'><TbBrandFiverr /></a>
                <a href="" className='navbar_social_media_icon'><SiUpwork /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Header Section Start === */}
      <nav className={`navbar navbar-expand-lg navbar_bg ${isSticky ? 'sticky_nav' : ''}`}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="d-flex align-items-center gap-2">
              <span className='logo_brand'>F</span>
              <span className='logo_text'>It Solution</span>
            </div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className='nav-link nav_link'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className='nav-link nav_link'>About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className='nav-link nav_link'>Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/project" className='nav-link nav_link'>Project</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className='nav-link nav_link'>Contact</NavLink>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2">
              <Link to='/appointment' className='nav_btn'>Appointment</Link>
              <div className="btn-group">
                <button type="button" className="nav_btn bg-danger rounded-0 dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false"> Sign in </button>
                <ul className="dropdown-menu dropdown-menu-end mt-2 py-0 rounded-0">
                  <li> <button type="button" className="dropdown-item d-flex align-items-center gap-2" onClick={logout}><BiLogOut /> Logout </button> </li>
                  <hr className="dropdown-divider p-0 m-0" />
                  <li> <Link to='/dashboard' className="dropdown-item d-flex align-items-center gap-2"><MdOutlineDashboardCustomize /> Dashboard </Link> </li>
                  <hr className="dropdown-divider p-0 m-0" />
                  <li> <Link to='/profile' className="dropdown-item d-flex align-items-center gap-2"><SlSettings />Setting</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar