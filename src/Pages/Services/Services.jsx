import Layout from '../../Layout/Layout'
import ServiceCard from '../../Components/ServiceCard/ServiceCard'
import { IoCheckmarkDoneOutline } from 'react-icons/io5'
import './Services.css'

const Services = () => {
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