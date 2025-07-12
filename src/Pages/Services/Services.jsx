import Layout from '../../Layout/Layout'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import { useEffect, useState } from 'react'
import './Services.css'

const Services = () => {
  const [handleError, setHandleError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        setIsLoading(true);
        setHandleError(null);
        const response = await fetch("/service_database.json");
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setServices(data);
          } else {
            throw new Error("Invalid data format. Expected an array.");
          }
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setHandleError(error.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };
    getServices();
  }, []);

  return (
    <Layout title='Services'>
      <section className='service_section'>
        <div className="container">
          <div className="row">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Services