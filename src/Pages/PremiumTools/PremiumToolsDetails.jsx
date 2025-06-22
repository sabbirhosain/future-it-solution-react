import Layout from '../../Layout/Layout'
import imageDetails from '../../assets/tools-image/tools_details.png'
import { CgDetailsMore } from "react-icons/cg";
import PremiumToolsBooking from '../../Components/PremiumToolsCard/PremiumToolsBooking';
import { GoDot } from "react-icons/go";
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import ClientReview from '../../Components/PremiumToolsCard/ClientReview';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { premium_tools_single } from '../../Context/Base_Api_Url';
import axios from 'axios';
import './PremiumToolsDetails.css'

const PremiumToolsDetails = () => {
    const { id } = useParams();
    const [premiumTools, setPremiumTools] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [handleError, setHandleError] = useState(null);

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

    if (handleError) {
        return (
            <Layout>
                <div className="container text-center py-5">
                    <div className="alert alert-danger">{handleError}</div>
                </div>
            </Layout>
        );
    }

    if (!premiumTools) {
        return (
            <Layout>
                <div className="container text-center py-5">
                    <div className="alert alert-info">No premium tool found</div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title='Premium Tools'>
            <section className='page_heading_bg'>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7">
                            <h2 className='page_heading_tagline'> <IoCheckmarkDoneOutline className='page_heading_tagline_icon' /> {premiumTools.tools_name}</h2>
                            <span className='page_heading_title'>{premiumTools.short_description}</span>
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
                                <h2 className='tools_details_title'>{premiumTools.tools_name}</h2>
                                <hr className='hr' />
                                <p className='tools_details_peragraph'>{premiumTools.long_description}</p>
                                <h2 className='tools_details_section_tagline'> <CgDetailsMore className='tools_details_section_tagline_icon' /> Additional details</h2>
                                <div className='ms-3 mb-3'>
                                    <div className="row">
                                        {premiumTools.additional_feature.map((feature, index) => (
                                            <div className="col-6" key={index}>
                                                <span className='additional_details_list'><GoDot /> {feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <h2 className='tools_details_section_tagline'>
                                    <CgDetailsMore className='tools_details_section_tagline_icon' />
                                    Package details
                                </h2>
                                <div className='ms-3'>
                                    {premiumTools.pricing_tiers.map((tier, index) => (
                                        <div className="col-12" key={index}>
                                            <span className='additional_details_list'>
                                                <GoDot />
                                                <strong>{tier.package_name} = Quentity :  {tier.quantity} = Price : {tier.price} {tier.currency}</strong> = <strong>Expired</strong> : {tier.expired} {tier.expired_type}
                                                {tier.discount > 0 && (
                                                    <span className='text-danger ms-2'>({tier.discount}% OFF)</span>
                                                )}
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
                                <p className='tools_details_peragraph'>{premiumTools.important_note}</p>
                                <h2 className='tools_details_section_tagline'>
                                    <CgDetailsMore className='tools_details_section_tagline_icon' />
                                    Contact Customer Support (Only Message Allow)
                                </h2>
                                <a href="" className='btn btn-success premium_tools_whatsapp_btn w-25'>WhatsApp</a>
                            </div>
                        </div>
                        <PremiumToolsBooking premiumTools={premiumTools} />
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
                                            <h1 className='tools_reviews_reating'>{premiumTools.total_rating.toFixed(1)}</h1><div>
                                                <div className='tools_reviews_star'>
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar key={i} color={i < Math.floor(premiumTools.total_rating) ? 'orange' : 'lightgray'} />
                                                    ))}
                                                </div>
                                                <span className='tools_total_reviews'>{premiumTools.reviews.length} Reviews</span></div>
                                        </div>
                                        <button type='button' className='btn btn-success rounded-0 w-75 btn-sm d-flex align-items-center justify-content-center gap-2'> <CiEdit />Write a Review </button>
                                    </div>

                                    <div className="col-md-5">
                                        {[5, 4, 3, 2, 1].map((star) => {
                                            const starCount = premiumTools.reviews.filter(
                                                review => review.rating === star
                                            ).length;
                                            const percentage = (starCount / premiumTools.reviews.length) * 100;

                                            return (
                                                <div className='d-flex align-items-center gap-3 py-1' key={star}>
                                                    <span className='d-flex align-items-center gap-2 tools_total_reviews'>
                                                        {star} <FaStar style={{ color: 'orange' }} />
                                                    </span>
                                                    <div className='progress w-100 tools_review_progress' role="progressbar">
                                                        <div
                                                            className='progress-bar tools_review_progress_bar'
                                                            style={{ width: `${percentage}%` }}
                                                        />
                                                    </div>
                                                    <span className='tools_total_reviews'>{starCount}</span>
                                                </div>
                                            );
                                        })}
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
                        {premiumTools.reviews.length > 0 ? (
                            premiumTools.reviews.map((review, index) => (
                                <ClientReview key={index} review={review} />
                            ))
                        ) : (
                            <div className="col-12 text-center py-4">
                                <p>No reviews yet. Be the first to review!</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PremiumToolsDetails;