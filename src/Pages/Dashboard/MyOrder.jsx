import { NavLink } from 'react-router-dom'
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlinePrivacyTip, MdManageAccounts } from "react-icons/md";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { TbReport } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";
import Layout from '../../Layout/Layout'
import './Dashboard.css'
import MyOrderTable from './MyOrderTable';
import { useEffect, useState } from 'react';

const MyOrder = () => {
    const [loading, setLoading] = useState(true);

    return (
        <Layout title='Order'>
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
                            <div className="row bg-white shadow-sm py-4 mt-3">
                                <div className="col-md-3">
                                    <div className='w-100 mb-3 mb-md-0'>
                                        <select className="form-select rounded-0">
                                            <option value=''>Select User Role</option>
                                            <option value='salesman'>Salesman</option>
                                            <option value='manager'>Manager</option>
                                            <option value='admin'>Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className='w-100 mb-3 mb-md-0'>
                                        <input className="form-control rounded-0" type="date" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className='w-100 mb-3 mb-md-0'>
                                        <select className="form-select rounded-0">
                                            <option value=''>Select User Role</option>
                                            <option value='salesman'>Salesman</option>
                                            <option value='manager'>Manager</option>
                                            <option value='admin'>Admin</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className='w-100'>
                                        <input className="form-control rounded-0" type="search" placeholder="Search Hear..." />
                                    </div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <MyOrderTable />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default MyOrder