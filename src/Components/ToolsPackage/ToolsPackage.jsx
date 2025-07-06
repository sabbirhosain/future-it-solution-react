import { Link } from 'react-router-dom'
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useAppContextProvider } from "../../Context/AuthContext";
import './ToolsPackage.css'

const ToolsPackage = ({ data, item }) => {
    const { selectPackage } = useAppContextProvider();

    return (
        <div className='col-md-3 mb-4'>
            <div className="package_card">
                <h5 className='package_card_price_cartegory'>{data.package_name}</h5>
                <span className='package_price'>{data.currency === 'BDT' ? '৳' : '$'} {data.price} <sub>{data.expired} {data.expired_type}</sub></span>
                <Link to='/premium-tools/check-out' onClick={() => selectPackage(data, item)} className='btn btn-success w-100 mt-4 mb-2'>Select Package</Link>

                {Array.isArray(data.features) && data.features.length > 0 ? (
                    data.features.map((feature, index) => (
                        <span className='package_modules_list' key={index}><IoCheckmarkDoneOutline />{feature}</span>
                    ))
                ) : (
                    <div className="col-12">
                        <p>No features available.</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default ToolsPackage