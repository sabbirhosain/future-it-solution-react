import React from 'react'

const ApolloPremiumForm = () => {
    return (
        <form className='row p-3 border bg-white'>
            <div className="col-md-6 mb-3">
                <label className='form-label'>Select Package</label>
                <select className="form-select rounded-0" aria-label="Default select example">
                    <option value='100'>100 Cradit</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select>
            </div>
            <div className="col-md-6 mb-3">
                <label className='form-label'>Discount</label>
                <input type="text" className='form-control rounded-0' disabled />
            </div>
            <div className="col-md-6 mb-3">
                <label className='form-label'>Price (BDT)</label>
                <input type="text" className='form-control rounded-0' disabled />
            </div>
            <div className="col-md-6 mb-3">
                <label className='form-label'>Price (USD)</label>
                <input type="text" className='form-control rounded-0' disabled />
            </div>
            <div className="col-md-6 mb-3">
                <label className='form-label'>Subscription Period</label>
                <input type="text" className='form-control rounded-0' disabled />
            </div>
            <div className="col-md-6 mb-3">
                <label className='form-label'>Cupon Code (Optional)</label>
                <div className="d-flex">
                    <input type="text" className='form-control rounded-0' placeholder='If Available'/>
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
    )
}

export default ApolloPremiumForm