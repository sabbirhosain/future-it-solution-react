import Layout from '../../Layout/Layout'
import imageDetails from '../../assets/tools-image/tools_details.png'
import { CgDetailsMore } from "react-icons/cg";
import { GoDot } from "react-icons/go";
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import ClientReview from '../../Components/PremiumToolsCard/ClientReview';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import './PremiumToolsDetails.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { premium_tools_single } from '../../Context/Base_Api_Url';
import axios from 'axios';

const PremiumToolsDetails = () => {
    const { id } = useParams();
    const [handleError, setHandleError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [premiumTools, setPremiumTools] = useState({});

    // Destructure premiumTools with default values
    const {
        tools_name = '',
        short_description = '',
        long_description = '',
        important_note = '',
        additional_feature = [],
        pricing_tiers = [],
        rating = 0,
        total_sold = 0,
        coupon_code = ''
    } = premiumTools;

    useEffect(() => {
        const getPermiumTools = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`${premium_tools_single}${id}`);
                if (response?.data) {
                    setPremiumTools(response.data.payload);
                }
            } catch (error) {
                console.log(error.message);
                setHandleError(error.response?.data || "Something went wrong");
            } finally {
                setIsLoading(false);
            }
        }
        getPermiumTools();
    }, [id]);

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <Layout title='Premium Tools'>
            <section className='page_heading_bg'>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7">
                            <h2 className='page_heading_tagline'>
                                <IoCheckmarkDoneOutline className='page_heading_tagline_icon' />
                                {tools_name}
                            </h2>
                            <span className='page_heading_title'>{short_description}</span>
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
                                <h2 className='tools_details_title'>{tools_name}</h2>
                                <hr className='hr' />
                                <p className='tools_details_peragraph'>{long_description}</p>
                                <h2 className='tools_details_section_tagline'>
                                    <CgDetailsMore className='tools_details_section_tagline_icon' />
                                    Additional details
                                </h2>
                                <div className='ms-3 mb-3'>
                                    <div className="row">
                                        {additional_feature.map((feature, index) => (
                                            <div className="col-6" key={index}>
                                                <span className='additional_details_list'>
                                                    <GoDot /> {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <h2 className='tools_details_section_tagline'>
                                    <CgDetailsMore className='tools_details_section_tagline_icon' />
                                    Package details
                                </h2>
                                <div className='ms-3'>
                                    {pricing_tiers.map((tier, index) => (
                                        <div className="col-12" key={index}>
                                            <span className='additional_details_list'>
                                                <GoDot />
                                                <strong> {tier.price} {tier.currency}</strong> :
                                                {tier.package_name} -
                                                <strong>Validity</strong> : {tier.expired} {tier.expired_type}
                                                {tier.discount > 0 && ` (${tier.discount}% OFF)`}
                                            </span>
                                        </div>
                                    ))}
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
                                <h2 className='tools_details_section_tagline'>
                                    <CgDetailsMore className='tools_details_section_tagline_icon' />
                                    Important Note
                                </h2>
                                <p className='tools_details_peragraph'>{important_note}</p>
                                <h2 className='tools_details_section_tagline'>
                                    <CgDetailsMore className='tools_details_section_tagline_icon' />
                                    Contact Customer Support (Only Message Allow)
                                </h2>
                                <a href="" className='btn btn-success premium_tools_whatsapp_btn w-25'>WhatsApp</a>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <form className='row p-3 border bg-white'>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Select Package</label>
                                    <select className="form-select rounded-0" aria-label="Default select example">
                                        {pricing_tiers.map((tier, index) => (
                                            <option key={index} value={tier._id}>
                                                {tier.package_name} - {tier.price} {tier.currency}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Discount</label>
                                    <input
                                        type="text"
                                        className='form-control rounded-0'
                                        disabled
                                        value={pricing_tiers[0]?.discount ? `${pricing_tiers[0].discount}%` : '0%'}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Price (BDT)</label>
                                    <input type="text" className='form-control rounded-0' disabled />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Price (USD)</label>
                                    <input
                                        type="text"
                                        className='form-control rounded-0'
                                        disabled
                                        value={`${pricing_tiers[0]?.price || 0} ${pricing_tiers[0]?.currency || 'USD'}`}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Subscription Period</label>
                                    <input
                                        type="text"
                                        className='form-control rounded-0'
                                        disabled
                                        value={pricing_tiers[0] ? `${pricing_tiers[0].expired} ${pricing_tiers[0].expired_type}` : ''}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className='form-label'>Cupon Code (Optional)</label>
                                    <div className="d-flex">
                                        <input
                                            type="text"
                                            className='form-control rounded-0'
                                            placeholder={coupon_code ? coupon_code : 'If Available'}
                                        />
                                        <button className='btn btn-danger rounded-0 w-25'>Verify</button>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input border-dark rounded-0" type="checkbox" defaultValue id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">I agree terms and conditions</label>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <button type='submit' className='btn btn-success rounded-0 w-100'>Order Now</button>
                                </div>
                            </form>
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
                                            <h1 className='tools_reviews_reating'>{rating.toFixed(1)}</h1>
                                            <div>
                                                <div className='tools_reviews_star'>
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar key={i} color={i < Math.floor(rating) ? 'orange' : 'gray'} />
                                                    ))}
                                                </div>
                                                <span className='tools_total_reviews'>{total_sold} Reviews</span>
                                            </div>
                                        </div>
                                        <button type='button' className='btn btn-success rounded-0 w-75 btn-sm d-flex align-items-center justify-content-center gap-2'>
                                            <CiEdit />Write a Review
                                        </button>
                                    </div>

                                    <div className="col-md-5">
                                        {[5, 4, 3, 2, 1].map((stars) => (
                                            <div key={stars} className='d-flex align-items-center gap-3 py-1'>
                                                <span className='d-flex align-items-center gap-2 tools_total_reviews'>
                                                    {stars} <FaStar style={{ color: 'orange' }} />
                                                </span>
                                                <div className='progress w-100 tools_review_progress' role="progressbar">
                                                    <div
                                                        className='progress-bar tools_review_progress_bar'
                                                        style={{ width: `${(stars / 5) * 100}%` }}
                                                    />
                                                </div>
                                                <span className='tools_total_reviews'>
                                                    {Math.round((stars / 5) * total_sold)}
                                                </span>
                                            </div>
                                        ))}
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

export default PremiumToolsDetails;