import { useEffect, useState } from 'react';
import AboutAgency from '../../Components/AboutAgency/AboutAgency'
import EmployeeCard from '../../Components/EmployeeCard/EmployeeCard';
import Layout from '../../Layout/Layout'
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { useAppContextProvider } from '../../Context/AuthContext';
import './About.css';

const About = () => {
  const { handleError, isLoading, ourTeam, getOurTeam } = useAppContextProvider()
  useEffect(() => { getOurTeam() }, ['']);

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
            {ourTeam.map((member) => (
              <EmployeeCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About