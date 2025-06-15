import PremiumToolsCard from '../../Components/PremiumToolsCard/PremiumToolsCard'
import Layout from '../../Layout/Layout'
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import './PremiumTools.css';
import { useEffect, useState } from 'react';

const PremiumTools = () => {
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
    <Layout title='Premium Tools'>
      <section className='page_heading_bg'>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <h2 className='page_heading_tagline'><IoCheckmarkDoneOutline className='page_heading_tagline_icon' />Our Employee</h2>
              <span className='page_heading_title'>Smart solution to <span className='page_heading_title_color'>build a outstanding </span>performance easily.</span>
            </div>
          </div>
        </div>
      </section>
      <section className='premium_tools_section'>
        <div className="container">
          <div className="row">
            <PremiumToolsCard />
            <PremiumToolsCard />
            <PremiumToolsCard />
            <PremiumToolsCard />
            <PremiumToolsCard />
            <PremiumToolsCard />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PremiumTools