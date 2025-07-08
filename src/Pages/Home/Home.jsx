import Layout from '../../Layout/Layout'
import { VscTools } from "react-icons/vsc";
import { SiGooglemeet } from "react-icons/si";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiMiniArrowSmallUp } from "react-icons/hi2";
import { Link } from "react-router-dom";
import bgImage from '../../assets/hero.webp';
import chooseUs1 from '../../assets/choose-us/image1.svg';
import chooseUs2 from '../../assets/choose-us/image2.png';
import chooseUs3 from '../../assets/choose-us/image3.png';
import AboutAgency from "../../Components/AboutAgency/AboutAgency";
import EmployeeCard from "../../Components/EmployeeCard/EmployeeCard";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import { useEffect, useState } from "react";
import MeetOurClients from "../../Components/MeetOurClients/MeetOurClients";
import './Home.css'

const Home = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout title='Home'>
      <section className='home_section'>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 order-2 order-md-1">
              <h2 className='hero_heading'><span className='hero_heading_highlight'>Professional</span> team will take you to <span className='hero_heading_highlight'> the next </span> level<span className='hero_heading_highlight'>.</span></h2>
              <p className='hero_peragraph'>Our professional team is ready to take your business to the next level. Are you ready to grow?</p>
              <div className='d-flex align-items-center gap-3'>
                <Link to='/' className='hero_section_btn'><SiGooglemeet />Google Meeting</Link>
                <Link to='/premium-tools' className='hero_section_btn'><VscTools />Premium Tools</Link>
              </div>
            </div>
            <div className="col-md-6 order-1 order-md-2 mb-5 mb-md-0">
              <div>
                <img src={bgImage} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='choose_us'>
        <div className='container'>
          <div className='row py-4'>
            <div className='col-md-4'>
              <div className='d-flex align-items-center justify-content-center gap-3'>
                <div style={{ maxWidth: '70px' }}>
                  <img src={chooseUs1} className="img-fluid" alt="" />
                </div>
                <div>
                  <h5 className='choose_us_heading'>Reasonable Price</h5>
                  <p className='choose_us_peragraph'>Quality design at affordable rates.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='d-flex align-items-center justify-content-center gap-3'>
                <div style={{ maxWidth: '70px' }}>
                  <img src={chooseUs2} className="img-fluid" alt="" />
                </div>
                <div>
                  <h5 className='choose_us_heading'>Timely Project Delivery</h5>
                  <p className='choose_us_peragraph'>On-time Project completion.</p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='d-flex align-items-center justify-content-center gap-3'>
                <div style={{ maxWidth: '70px' }}>
                  <img src={chooseUs3} className="img-fluid" alt="" />
                </div>
                <div>
                  <h5 className='choose_us_heading'>Professional Team</h5>
                  <p className='choose_us_peragraph'>Expert architects, top result.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about_agency'>
        <AboutAgency />
      </section>

      <section className='our_employee'>
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12">
              <h2 className='section_tagline'><IoCheckmarkDoneOutline className='section_tagline_icon' />Our Leadership</h2>
              <div className="d-flex align-items-center justify-content-between">
                <span className='section_title'>Smart solution to <span className='section_title_color'>build a outstanding </span>performance easily.</span>
                <Link to='/about' className="section_more_btn">More Employee <IoIosArrowRoundForward /></Link>
              </div>
            </div>
          </div>
          <div className="row">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
          </div>
        </div>
      </section>

      <section className='why_choose_us'>
        <WhyChooseUs />
      </section>

      <section className="meet_our_clients">
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12">
              <h2 className='section_tagline'><IoCheckmarkDoneOutline className='section_tagline_icon' />Meet Our Clients</h2>
              <div className="d-flex align-items-center justify-content-between">
                <span className='section_title'>Smart solution to <span className='section_title_color'>build a outstanding </span>performance easily.</span>
                <Link to='#' className="section_more_btn">More Clients <IoIosArrowRoundForward /></Link>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <MeetOurClients />
            <MeetOurClients />
            <MeetOurClients />
            <MeetOurClients />
            <MeetOurClients />
            <MeetOurClients />
          </div>
        </div>
      </section>

      {showScrollBtn && (
        <button type="button" className="Page_up_down_btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
          <HiMiniArrowSmallUp />
        </button>
      )}

    </Layout >
  )
}

export default Home