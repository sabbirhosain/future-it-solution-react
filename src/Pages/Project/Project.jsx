import Layout from '../../Layout/Layout'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './Project.css'
const Project = () => {
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