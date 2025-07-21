import Layout from '../../Layout/Layout'
import { FaCheck } from "react-icons/fa6";
import './OrderConfirm.css'

const OrderConfirm = () => {
    return (
        <Layout>
            <section className="order_confirm_section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className='order_confirm_text'>
                                <div className='order_confirm_icon'><FaCheck /></div>
                                <h5>Order Confirmed!</h5>
                                <h4>Your order has been placed successfully.</h4>
                                <p>A confirmation email with the details of your order has been sent to</p>
                                <strong style={{ fontFamily: 'sans-serif' }}>WhatsApp : <a href="https://api.whatsapp.com/send/?phone=+8801780741598&text=I%20ordered%20premium%20tools.%20Please%20help%20me." target='_new'>+880 1780741598</a></strong>
                                <p className='pt-5 text-danger'>আমরা কিছুক্ষণের মধ্যে আপনার সাথে যোগাযোগ করব। অনুগ্রহ করে অপেক্ষা করুন।</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout >
    )
}

export default OrderConfirm