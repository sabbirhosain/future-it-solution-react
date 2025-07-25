import { NavLink } from 'react-router-dom'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlinePrivacyTip, MdManageAccounts } from "react-icons/md";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { TbReport } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import Layout from '../../Layout/Layout'
import './Dashboard.css'
import { useEffect, useState } from 'react';

const DataAndPrivacy = () => {
    const [loading, setLoading] = useState(true);

    return (
        <Layout title='Data And Privacy'>
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
                            Data and Privacy
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default DataAndPrivacy