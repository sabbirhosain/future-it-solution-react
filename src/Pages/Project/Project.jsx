import Layout from '../../Layout/Layout'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import './Project.css'
import { useEffect, useState } from 'react';
const Project = () => {
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