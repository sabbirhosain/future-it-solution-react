import Layout from '../../Layout/Layout'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import { useEffect, useState } from 'react';
import './Project.css'
const Project = () => {
  const [handleError, setHandleError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        setIsLoading(true);
        setHandleError(null);
        const response = await fetch("/project_database.json");
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data)) {
            setProject(data);
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
    <Layout title='Project'>
      <section className='project_section'>
        <div className="container">
          <div className="row">
            {project.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Project