import { Link } from 'react-router-dom'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import './ServicesPackage.css'

const ServicesPackage = () => {
    return (
        <>
            <nav className='d-flex align-items-center justify-content-between'>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-daily" type="button" role="tab" aria-controls="nav-daily" aria-selected="true">Daily</button>
                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-weekly" type="button" role="tab" aria-controls="nav-weekly" aria-selected="false">Weekly</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-monthly" type="button" role="tab" aria-controls="nav-monthly" aria-selected="false">Monthly</button>
                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-yearly" type="button" role="tab" aria-controls="nav-yearly" aria-selected="false">Yearly</button>
                </div>
                <Link to='/services' className='package_more_btn'>More Services <GoArrowUpRight /></Link>
            </nav>
            
            <div className="tab-content pt-4" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-daily" role="tabpanel" aria-labelledby="nav-daily-tab">
                    <div className="row">
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Basic Plan</h5>
                                <span className='package_price'>Free <sub>Sample</sub></span>
                                <Link to='#' className='btn btn-success w-100 mt-4 mb-2'>Select Package</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Business Package</h5>
                                <span className='package_price'>$100 <sub>6 Hours</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Select Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Enterprice Package</h5>
                                <span className='package_price'>$100 <sub>1 Days</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Select Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Custome Package</h5>
                                <span className='package_price'>$0.10 <sub>Per Lead</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Customized Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-weekly" role="tabpanel" aria-labelledby="nav-weekly-tab">
                    <div className="row">
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Basic Plan</h5>
                                <span className='package_price'>Free <sub>Sample</sub></span>
                                <Link to='#' className='btn btn-success w-100 mt-4 mb-2'>Select Package</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Business Package</h5>
                                <span className='package_price'>$100 <sub>6 Hours</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Select Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Enterprice Package</h5>
                                <span className='package_price'>$100 <sub>1 Days</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Select Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Custome Package</h5>
                                <span className='package_price'>$0.10 <sub>Per Lead</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Customized Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-monthly" role="tabpanel" aria-labelledby="nav-monthly-tab">
                    <div className="row">
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Basic Plan</h5>
                                <span className='package_price'>Free <sub>Sample</sub></span>
                                <Link to='#' className='btn btn-success w-100 mt-4 mb-2'>Select Package</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Business Package</h5>
                                <span className='package_price'>$100 <sub>6 Hours</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Select Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Enterprice Package</h5>
                                <span className='package_price'>$100 <sub>1 Days</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Select Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Custome Package</h5>
                                <span className='package_price'>$0.10 <sub>Per Lead</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Customized Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-yearly" role="tabpanel" aria-labelledby="nav-yearly-tab">
                    <div className="row">
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Basic Plan</h5>
                                <span className='package_price'>Free <sub>Sample</sub></span>
                                <Link to='#' className='btn btn-success w-100 mt-4 mb-2'>Select Package</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Business Package</h5>
                                <span className='package_price'>$100 <sub>6 Hours</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Select Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Enterprice Package</h5>
                                <span className='package_price'>$100 <sub>1 Days</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Select Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className="package_card">
                                <h5 className='package_card_price_cartegory'>Custome Package</h5>
                                <span className='package_price'>$0.10 <sub>Per Lead</sub></span>
                                <Link to='#' className='btn btn-outline-success w-100 mt-4 mb-2'>Customized Plan</Link>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                                <span className='package_modules_list'><IoCheckmarkDoneOutline /> Available Modules Name</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesPackage