import { useEffect, useState } from 'react';
import AboutAgency from '../../Components/AboutAgency/AboutAgency'
import EmployeeCard from '../../Components/EmployeeCard/EmployeeCard';
import Layout from '../../Layout/Layout'
import './About.css';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  
  return (
    <Layout title='About Us'>
      <section className='about_agency'>
        <AboutAgency />
      </section>

      <section className='our_employee'>
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-7">
              <h2 className='section_tagline'><IoCheckmarkDoneOutline className='section_tagline_icon' />Our Leadership</h2>
              <span className='section_title'>Smart solution to <span className='section_title_color'>build a outstanding </span>performance easily.</span>
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
    </Layout>
  )
}

export default About