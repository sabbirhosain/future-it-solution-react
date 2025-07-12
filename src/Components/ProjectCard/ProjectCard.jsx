import projecImg from '../../assets/project/project-1.jpg'
import { Link } from 'react-router-dom'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
    return (
        <div className='col-md-4 mb-4'>
            <div className="project_card_box">
                <div className="project_card_img">
                    <img src={project.image} className="img-fluid" alt="Tools Image" />
                    <a href={project.project_link} target='_new' className='project_btn bg-danger'>View More <HiOutlineArrowSmallRight /></a>
                </div>
                <div className="project_text_box">
                    <h2 className='project_title'>{project.title}</h2>
                    <p className='project_peragraph'>{project.short_desc}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard