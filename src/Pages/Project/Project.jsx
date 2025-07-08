import Layout from '../../Layout/Layout'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './Project.css'
import { useEffect, useState } from 'react';
const Project = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Layout title='Project'>
      <section className='project_section'>
        <div className="container">
          <div className="row">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Project