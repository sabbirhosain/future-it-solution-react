import Layout from '../../Layout/Layout'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import { CgDetailsMore } from 'react-icons/cg'
import { GoDot } from 'react-icons/go'
import imageDetails from '../../assets/tools-image/tools_details.png'
import './ServicesDetails.css'
import ServicesPackage from '../../Components/ServicePackages/ServicesPackage'
import { useEffect, useState } from 'react'

const ServicesDetails = () => {
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
    <Layout>
      <section className='page_heading_bg'>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h2 className='page_heading_tagline'><IoCheckmarkDoneOutline className='page_heading_tagline_icon' />Job Seeker</h2>
              <span className='page_heading_title'>Smart solution to <span className='page_heading_title_color'>build a outstanding </span>performance easily.</span>
            </div>
          </div>
        </div>
      </section>

      <section className='services_details'>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5">
              <img src={imageDetails} className='img-fluid' alt="Tools Details" />
            </div>
            <div className="col-md-7">
              <div className="ps-md-4">
                <h2 className='services_details_title'><span className='services_details_title_color'>Apollio.oi</span> Premium 10k Credit.</h2>
                <hr className='hr' />
                <p className='services_details_peragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores fuga error autem hic officiis ex! Voluptate dolor impedit ipsa alias doloribus nesciunt voluptatibus iusto, laborum beatae vitae, dignissimos quas commodi voluptates minima quibusdam deserunt aliquam quae officiis accusantium obcaecati.</p>
                <h2 className='services_details_section_tagline'><CgDetailsMore className='services_details_section_tagline_icon' />Additional details</h2>
                <div className='ms-3 mb-3'>
                  <div className="row">
                    <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                    <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                    <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                    <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                    <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                    <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                    <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                    <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                    <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                    <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='package_section'>
        <div className="container">
          <ServicesPackage />
        </div>
      </section>
    </Layout>
  )
}

export default ServicesDetails