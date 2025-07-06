import Layout from '../../Layout/Layout'
import { item_details } from '../../Context/Base_Api_Url';
import { FaRegHandPointRight, FaStar } from 'react-icons/fa';
import DEFAULT_IMG from '../../assets/tools_details.png'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { TbArrowBadgeRight } from 'react-icons/tb';
import ToolsPackage from '../../Components/ToolsPackage/ToolsPackage';
import './PremiumToolsDetails.css'

const PremiumToolsDetails = () => {
    const { id } = useParams();
    const [premiumTools, setPremiumTools] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [handleError, setHandleError] = useState(null);

    useEffect(() => {
        const getPermiumTools = async () => {
            try {
                setIsLoading(true);
                setHandleError(null);

                const response = await axios.get(`${item_details}${id}`);
                if (response && response.data) {
                    setPremiumTools(response.data.payload);
                }
            } catch (error) {
                console.log(error.message);
                setHandleError(error.response.data || "Something went wrong");

            } finally {
                setIsLoading(false);
            }
        }
        getPermiumTools();
    }, [id]);


    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <span>Loading...</span>
            </div>
        );
    }

    return (
        <Layout title='Premium Tools'>
            <section className='tools_details_section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={premiumTools?.attachment?.secure_url || DEFAULT_IMG}
                                onError={(e) => e.target.src = DEFAULT_IMG}
                                className='tools_details_img'
                                alt={premiumTools?.item_name || 'Image'}
                            />
                        </div>
                        <div className="col-md-6">
                            <h1 className='tools_details_title'>{premiumTools ? premiumTools.item_name : ''}</h1>
                            <hr className='hr' />
                            <h5 className='tools_details_section_tagline'> <FaRegHandPointRight className='tools_details_section_tagline_icon' /> Short Description</h5>
                            <p className='tools_details_short_description'>{premiumTools ? premiumTools.short_description : ''}</p>
                            <h5 className='tools_details_section_tagline'> <FaRegHandPointRight className='tools_details_section_tagline_icon' /> Additional features</h5>
                            <div className="row">

                                {Array.isArray(premiumTools.features) && premiumTools.features.length > 0 ? (
                                    premiumTools.features.map((feature, index) => (
                                        <div className="col-6" key={index}>
                                            <span className='additional_details_list'><TbArrowBadgeRight /> {feature}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12">
                                        <p>No features available.</p>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='tools_details_packages'>
                <div className="container">
                    <div className="row">

                        {Array.isArray(premiumTools.packages) && premiumTools.packages.map((data, index) => (<ToolsPackage key={index} data={data} item={premiumTools} />))}

                    </div>
                </div>
            </section>

            <section className='tools_details_description'>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <h5 className='tools_details_section_tagline'> <FaRegHandPointRight className='tools_details_section_tagline_icon' />Long Description</h5>
                            <p className='tools_details_long_description'>{premiumTools ? premiumTools.long_description : ''}</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <h5 className='tools_details_section_tagline text-danger'> <FaRegHandPointRight className='tools_details_section_tagline_icon text-danger' />Important Note</h5>
                            <p className='tools_details_long_description'>{premiumTools ? premiumTools.notes : ''}</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className='text-center'>
                                <p className='tools_details_contact_support'>Contact Customer Support (Only Message Allow)</p>
                                <a href='' className='tools_details_contact_support_btn'>WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default PremiumToolsDetails;