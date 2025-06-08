import projecImg from '../../assets/project/project-1.jpg'
import { Link } from 'react-router-dom'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import './ProjectCard.css'

const ProjectCard = () => {
    return (
        <div className='col-md-4 mb-4'>
            <div className="project_card_box">
                <div className="project_card_img">
                    <img src={projecImg} className="img-fluid" alt="Tools Image" />
                    <Link to='' className='project_btn bg-danger'>View More <HiOutlineArrowSmallRight /></Link>
                </div>
                <div className="project_text_box">
                    <h2 className='project_title'>Lorem ipsum dolor sit amet.</h2>
                    <p className='project_peragraph'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem est voluptate odit sit velit eveniet.</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard