import Layout from '../../Layout/Layout'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import './Services.css'
import { useEffect, useState } from 'react'

const Services = () => {
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
    <Layout title='Services'>
      <section className='service_section'>
        <div className="container">
          <div className="row">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Services