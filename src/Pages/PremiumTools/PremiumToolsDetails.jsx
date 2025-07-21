import Layout from '../../Layout/Layout'
import { free_item_details } from '../../Context/Base_Api_Url';
import { FaRegHandPointRight, FaStar } from 'react-icons/fa';
import DEFAULT_IMG from '../../assets/tools_details.png'
import { useEffect, useState } from 'react';
import { TbArrowBadgeRight } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './PremiumToolsDetails.css'
import { MdOutlineShoppingCart } from 'react-icons/md';

const PremiumToolsDetails = () => {
    const { id } = useParams();
    const [freeTools, setFreeTools] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [handleError, setHandleError] = useState(null);

    useEffect(() => {
        const getFreeTools = async () => {
            try {
                setIsLoading(true);
                setHandleError(null);

                const response = await axios.get(`${free_item_details}${id}`);
                if (response && response.data) {
                    setFreeTools(response.data.payload);
                }
            } catch (error) {
                console.log(error.message);
                setHandleError(error.response.data || "Something went wrong");

            } finally {
                setIsLoading(false);
            }
        }
        getFreeTools();
    }, [id]);


    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <span>Loading...</span>
            </div>
        );
    }

    return (
        <Layout>
            <section className='tools_details_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={freeTools?.attachment?.secure_url || DEFAULT_IMG} onError={(e) => e.target.src = DEFAULT_IMG} className='tools_details_img' alt={freeTools?.item_name || 'Image'} />
                        </div>
                        <div className="col-md-6">
                            <h1 className='tools_details_title'>{freeTools ? freeTools.item_name : ''}</h1>
                            <hr className='hr' />
                            <h5 className='tools_details_section_tagline'> <FaRegHandPointRight className='tools_details_section_tagline_icon' /> Short Description</h5>
                            <p className='tools_details_short_description'>{freeTools ? freeTools.short_description : ''}</p>
                            <h5 className='tools_details_section_tagline'> <FaRegHandPointRight className='tools_details_section_tagline_icon' /> Additional features</h5>
                            <div className="row">
                                {Array.isArray(freeTools.features) && freeTools.features.length > 0 ? (
                                    freeTools.features.map((feature, index) => (
                                        <div className="col-6" key={index}>
                                            <span className='additional_details_list'><TbArrowBadgeRight /> {feature}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12">
                                        <p>No features available.</p>
                                    </div>
                                )}
                                <div className="col-12 mt-3">
                                    <Link to={`/premium-tools/checkout/${id}`} className='tools_details_order_btn'><MdOutlineShoppingCart />Order Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='tools_details_description'>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-12">
                            <h5 className='tools_details_section_tagline'> <FaRegHandPointRight className='tools_details_section_tagline_icon' />Long Description</h5>
                            <p className='tools_details_long_description'>{freeTools ? freeTools.long_description : ''}</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <h5 className='tools_details_section_tagline text-danger'> <FaRegHandPointRight className='tools_details_section_tagline_icon text-danger' />Important Note</h5>
                            <p className='tools_details_long_description'>{freeTools ? freeTools.notes : ''}</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className='text-center'>
                                <p className='tools_details_contact_support'>Contact Customer Support (Only Message Allow)</p>
                                <a href="https://api.whatsapp.com/send/?phone=+8801780741598&text=I%20want%20to%20order%20premium%20tools.%20Please%20help%20me." target="_blank" rel="noopener noreferrer" className="tools_details_contact_support_btn">WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PremiumToolsDetails;