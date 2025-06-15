import { Link } from 'react-router-dom'
import Layout from '../../Layout/Layout'
import './OrderConfirm.css'
import { useEffect, useState } from 'react';

const OrderConfirm = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === "complete") {
            setLoading(false);
        } else {
            const handleLoad = () => setLoading(false);
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-grow text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    return (
        <Layout>
            <section className='order_confirm'>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-8">
                            <div className="text-center">
                                <h1 className='order_message_title'>Thank You For Your Order.</h1>
                                <p className='order_message_id'>Your order (id) has been confirmed.</p>
                                <Link to='/order' className='order_message_btn'>Check Order</Link>
                                <p className='order_message_peragraph'><strong>Note :</strong> We will contact you within 15 minutes. Please Wait !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default OrderConfirm