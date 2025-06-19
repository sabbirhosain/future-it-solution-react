import { useState } from 'react';

const PremiumToolsBooking = ({ premiumTools }) => {
    const [selectedPackage, setSelectedPackage] = useState(premiumTools.pricing_tiers[0]);
    const [couponCode, setCouponCode] = useState(premiumTools.coupon_code || '');
    const [agreeTerms, setAgreeTerms] = useState(false);

    // Handle package selection change
    const handlePackageChange = (e) => {
        const selectedTier = premiumTools.pricing_tiers.find(
            tier => tier._id === e.target.value
        );
        setSelectedPackage(selectedTier);
    };

    // Handle coupon verification
    const verifyCoupon = (e) => {
        e.preventDefault();
        // Add your coupon verification logic here
        alert(`Verifying coupon: ${couponCode}`);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agreeTerms) {
            alert('Please agree to the terms and conditions');
            return;
        }
        // Add your order submission logic here
        console.log('Order submitted:', {
            package: selectedPackage,
            couponCode: couponCode
        });
    };

    return (
        <div className="col-md-6">
            <form className='row p-3 border bg-white'>
                <div className="col-md-6 mb-3">
                    <label className='form-label'>Select Package</label>
                    <select
                        className="form-select rounded-0"
                        aria-label="Package selection"
                        value={selectedPackage._id}
                        onChange={handlePackageChange}
                    >
                        {premiumTools.pricing_tiers.map((tier) => (
                            <option key={tier._id} value={tier._id}> {tier.package_name} </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-6 mb-3">
                    <label className='form-label'>Discount</label>
                    <input
                        type="text"
                        className='form-control rounded-0'
                        readOnly
                        value={`${selectedPackage.discount || 0}%`}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label className='form-label'>Price</label>
                    <input
                        type="text"
                        className='form-control rounded-0'
                        readOnly
                        value={`${selectedPackage.price} ${selectedPackage.currency}`}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label className='form-label'>Subscription Expired</label>
                    <input
                        type="text"
                        className='form-control rounded-0'
                        readOnly
                        value={`${selectedPackage.expired} ${selectedPackage.expired_type}`}
                    />
                </div>

                <div className="col-md-12 mb-3">
                    <label className='form-label'>Coupon Code (Optional)</label>
                    <div className="d-flex">
                        <input
                            type="text"
                            className='form-control rounded-0'
                            placeholder="Enter coupon code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button type="button" className='btn btn-danger rounded-0 w-25' onClick={verifyCoupon}>VERIFY </button>
                    </div>
                </div>

                <div className="col-md-12 mb-3">
                    <div className="form-check">
                        <input
                            className="form-check-input border-dark rounded-0"
                            type="checkbox"
                            id="termsCheckbox"
                            checked={agreeTerms}
                            onChange={(e) => setAgreeTerms(e.target.checked)}
                            required
                        />
                        <label className="form-check-label" htmlFor="termsCheckbox">
                            I agree to the terms and conditions
                        </label>
                    </div>
                </div>

                <div className="col-md-12 mb-3">
                    <button
                        type='submit'
                        className='btn btn-success rounded-0 w-100 py-2'
                        onClick={handleSubmit}
                    >
                        Order Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PremiumToolsBooking;