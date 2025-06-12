import { NavLink } from 'react-router-dom'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlinePrivacyTip, MdManageAccounts } from "react-icons/md";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { SiGooglemeet } from "react-icons/si";
import { TbReport } from "react-icons/tb";
import { MdSupportAgent, MdRunningWithErrors } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";
import { RiProhibited2Line } from "react-icons/ri";
import { GrCompliance } from "react-icons/gr";
import Layout from '../../Layout/Layout'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <Layout>
      <section className='dashboard_section'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className="dashboard_sidebar">
                <NavLink to='/dashboard' className='dashboard_sidebar_item'><MdOutlineDashboardCustomize />Dashboard</NavLink>
                <NavLink to='/meeting-schedule' className='dashboard_sidebar_item'><MdOutlineDashboardCustomize />Meeting Time</NavLink>
                <NavLink to='/order' className='dashboard_sidebar_item'><TfiShoppingCartFull />My Orders</NavLink>
                <NavLink to='/profile' className='dashboard_sidebar_item'><MdManageAccounts />Profile</NavLink>
                <NavLink to='/reports' className='dashboard_sidebar_item'><TbReport />Reports</NavLink>
                <NavLink to='/data-and-privacy' className='dashboard_sidebar_item'><MdOutlinePrivacyTip />Data & Privacy</NavLink>
                <NavLink to='/live-support' className='dashboard_sidebar_item'><MdSupportAgent />Live Support</NavLink>
              </div>
            </div>
            <div className="col-md-10">
              <div className="row mt-4">
                <div className="col-md-3 mb-4">
                  <div className='dashboard_card'>
                    <h6 className='dashboard_card_title'><GrCompliance />Complete Project</h6>
                    <h1 className='dashboard_card_count'>10</h1>
                    <span className='dashboard_card_text'>Within this Year</span>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className='dashboard_card'>
                    <h6 className='dashboard_card_title'><AiOutlineFileDone />Under Revision</h6>
                    <h1 className='dashboard_card_count'>10</h1>
                    <span className='dashboard_card_text'>Within this Year</span>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className='dashboard_card'>
                    <h6 className='dashboard_card_title'><MdRunningWithErrors />Running Project</h6>
                    <h1 className='dashboard_card_count'>10</h1>
                    <span className='dashboard_card_text'>Within this Year</span>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className='dashboard_card'>
                    <h6 className='dashboard_card_title'><RiProhibited2Line />Cancelled Project</h6>
                    <h1 className='dashboard_card_count'>10</h1>
                    <span className='dashboard_card_text'>Within this Year</span>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className='dashboard_card'>
                    <h6 className='dashboard_card_title'><SiGooglemeet />Meeting Schedule</h6>
                    <h1 className='dashboard_card_meeting_counter'>02 : 04 : 06 : 08</h1>
                    <span className='dashboard_card_text'>Your Local Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard