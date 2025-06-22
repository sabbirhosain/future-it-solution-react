import PremiumToolsCard from '../../Components/PremiumToolsCard/PremiumToolsCard'
import { IoCheckmarkDoneOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { premium_tools_list } from '../../Context/Base_Api_Url';
import Layout from '../../Layout/Layout'
import axios from 'axios';
import './PremiumTools.css';

const PremiumTools = () => {
  // All Permium Tools List
  const [handleError, setHandleError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [premiumTools, setPremiumTools] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getPermiumTools = async (page) => {
    try {
      setIsLoading(true);
      setHandleError(null);

      const response = await axios.get(`${premium_tools_list}?page=${page}`);

      if (response && response.data) {
        setPremiumTools(response.data.payload);
        setTotalPages(response.data.pagination?.total_page || 1);
      }

    } catch (error) {
      console.log(error.message);
      setHandleError(error.response.data || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => { getPermiumTools(currentPage) }, [currentPage]);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  }

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
      <Layout title='Error'>
        <div className="container py-5">
          <div className="alert alert-danger text-center">
            {handleError}
            <button className="btn btn-sm btn-outline-danger ms-3" onClick={() => getPermiumTools(currentPage)}>Retry</button>
          </div>
        </div>
      </Layout>
    );
  }


  return (
    <Layout title='Premium Tools'>
      <section className='premium_tools_section'>
        <div className="container">

          {premiumTools?.length > 0 ? (
            <div className="row">
              {premiumTools.map((item, index) => (<PremiumToolsCard key={index} item={item} />))}
            </div>
          ) : (
            <div className="text-center py-5">
              <span>No premium tools available</span>
            </div>
          )}

        </div>
      </section>

      <section className='pagination_section mb-5'>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6">
              <div className='d-flex align-items-center justify-content-center gap-3'>
                <button onClick={handlePrevPage} className='btn btn-success rounded-0 btn-sm' disabled={currentPage === 1} > Prev </button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={handleNextPage} className='btn btn-success rounded-0 btn-sm' disabled={currentPage === totalPages} > Next </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PremiumTools