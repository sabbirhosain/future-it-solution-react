import Layout from '../../Layout/Layout'
import imageDetails from '../../assets/tools-image/tools_details.png'
import { CgDetailsMore } from "react-icons/cg";
import { GoDot } from "react-icons/go";
import ApolloPremiumForm from '../../Components/PremiumToolsCard/ApolloPremiumForm';
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import ClientReview from '../../Components/PremiumToolsCard/ClientReview';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import './PremiumToolsDetails.css'

const PremiumToolsDetails = () => {
    return (
        <Layout>
            <section className='page_heading_bg'>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7">
                            <h2 className='page_heading_tagline'><IoCheckmarkDoneOutline className='page_heading_tagline_icon' />Job Seeker</h2>
                            <span className='page_heading_title'>Smart solution to <span className='page_heading_title_color'>build a outstanding </span>performance easily.</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='premium_tools_details'>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            <img src={imageDetails} className='img-fluid' alt="Tools Details" />
                        </div>
                        <div className="col-md-7">
                            <div className="ps-md-4">
                                <h2 className='tools_details_title'><span className='tools_details_title_color'>Apollio.oi</span> Premium 10k Credit.</h2>
                                <hr className='hr' />
                                <p className='tools_details_peragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores fuga error autem hic officiis ex! Voluptate dolor impedit ipsa alias doloribus nesciunt voluptatibus iusto, laborum beatae vitae, dignissimos quas commodi voluptates minima quibusdam deserunt aliquam quae officiis accusantium obcaecati.</p>
                                <h2 className='tools_details_section_tagline'><CgDetailsMore className='tools_details_section_tagline_icon' />Additional details</h2>
                                <div className='ms-3 mb-3'>
                                    <div className="row">
                                        <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                                        <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                                        <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                                        <div className="col-6"><span className='additional_details_list'><GoDot /> 10,000 Free Email Creadit</span></div>
                                    </div>
                                </div>
                                <h2 className='tools_details_section_tagline'><CgDetailsMore className='tools_details_section_tagline_icon' />Package details</h2>
                                <div className='ms-3'>
                                    <div className="row">
                                        <div className="col-12"><span className='additional_details_list'><GoDot /> <strong>100 Tk</strong> : 10,000 Email Creadit - <strong>Validity</strong> : 3 Month</span></div>
                                        <div className="col-12"><span className='additional_details_list'><GoDot /> <strong>100 Tk</strong> : 10,000 Email Creadit - <strong>Validity</strong> : 3 Month</span></div>
                                        <div className="col-12"><span className='additional_details_list'><GoDot /> <strong>100 Tk</strong> : 10,000 Email Creadit - <strong>Validity</strong> : 3 Month</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='premium_tools_booking'>
                <div className="container">
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="px-4">
                                <h2 className='tools_details_section_tagline'><CgDetailsMore className='tools_details_section_tagline_icon' />Important Note</h2>
                                <p className='tools_details_peragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores fuga error autem hic officiis ex! Voluptate dolor impedit ipsa alias doloribus nesciunt voluptatibus iusto, laborum beatae vitae, dignissimos quas commodi voluptates minima quibusdam deserunt aliquam quae officiis accusantium obcaecati.</p>
                                <h2 className='tools_details_section_tagline'><CgDetailsMore className='tools_details_section_tagline_icon' />Contact Customer Support (Only Message Allow)</h2>
                                <a href="" className='btn btn-success premium_tools_whatsapp_btn w-25'>WhatsApp</a>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <ApolloPremiumForm />
                        </div>
                    </div>
                </div>
            </section>

            <section className='premium_tools_client_review'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='tools_reviews'>
                                <h2 className='client_reviews_title'>Client Reviews</h2>
                                <div className="row align-items-center justify-content-between">

                                    <div className="col-md-3">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <h1 className='tools_reviews_reating'>4.9</h1>
                                            <div>
                                                <div className='tools_reviews_star'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                                <span className='tools_total_reviews'>100k Reviews</span>
                                            </div>
                                        </div>
                                        <button type='button' className='btn btn-success rounded-0 w-75 btn-sm d-flex align-items-center justify-content-center gap-2'><CiEdit />Write a Review</button>
                                    </div>

                                    <div className="col-md-5">
                                        <div className='d-flex align-items-center gap-3 py-1'>
                                            <span className='d-flex align-items-center gap-2 tools_total_reviews'>5 <FaStar style={{ color: 'orange' }} /></span>
                                            <div className='progress w-100 tools_review_progress' role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                <div className='progress-bar tools_review_progress_bar' style={{ width: '98%' }} />
                                            </div>
                                            <span className='tools_total_reviews'>52.8k</span>
                                        </div>
                                        <div className='d-flex align-items-center gap-3 py-1'>
                                            <span className='d-flex align-items-center gap-2 tools_total_reviews'>5 <FaStar style={{ color: 'orange' }} /></span>
                                            <div className='progress w-100 tools_review_progress' role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                <div className='progress-bar tools_review_progress_bar' style={{ width: '98%' }} />
                                            </div>
                                            <span className='tools_total_reviews'>52.8k</span>
                                        </div>
                                        <div className='d-flex align-items-center gap-3 py-1'>
                                            <span className='d-flex align-items-center gap-2 tools_total_reviews'>5 <FaStar style={{ color: 'orange' }} /></span>
                                            <div className='progress w-100 tools_review_progress' role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                <div className='progress-bar tools_review_progress_bar' style={{ width: '98%' }} />
                                            </div>
                                            <span className='tools_total_reviews'>52.8k</span>
                                        </div>
                                        <div className='d-flex align-items-center gap-3 py-1'>
                                            <span className='d-flex align-items-center gap-2 tools_total_reviews'>5 <FaStar style={{ color: 'orange' }} /></span>
                                            <div className='progress w-100 tools_review_progress' role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                <div className='progress-bar tools_review_progress_bar' style={{ width: '98%' }} />
                                            </div>
                                            <span className='tools_total_reviews'>52.8k</span>
                                        </div>
                                        <div className='d-flex align-items-center gap-3 py-1'>
                                            <span className='d-flex align-items-center gap-2 tools_total_reviews'>5 <FaStar style={{ color: 'orange' }} /></span>
                                            <div className='progress w-100 tools_review_progress' role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                <div className='progress-bar tools_review_progress_bar' style={{ width: '98%' }} />
                                            </div>
                                            <span className='tools_total_reviews'>52.8k</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end gap-2 mb-2">
                        <button type='button' className='btn btn-outline-success btn-sm rounded-0'><BiLeftArrow /></button>
                        <button type='button' className='btn btn-outline-success btn-sm rounded-0'><BiRightArrow /></button>
                    </div>
                    <div className="row">
                        <ClientReview />
                        <ClientReview />
                        <ClientReview />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PremiumToolsDetails