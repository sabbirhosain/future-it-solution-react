import PremiumToolsCard from '../../Components/PremiumToolsCard/PremiumToolsCard'
import { item_show } from '../../Context/Base_Api_Url';
import { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout'
import axios from 'axios';
import './PremiumTools.css';

const PremiumTools = () => {
  const [handleError, setHandleError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [premiumTools, setPremiumTools] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getPermiumTools = async (page) => {
    try {
      setIsLoading(true);
      setHandleError(null);

      const response = await axios.get(`${item_show}?page=${page}`);
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
  const handlePrevPage = () => { if (currentPage > 1) { setCurrentPage(prev => prev - 1) } }
  const handleNextPage = () => { if (currentPage < totalPages) { setCurrentPage(prev => prev + 1) } }

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <span>Loading...</span>
      </div>
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
              <span>No Data Available</span>
            </div>
          )}

          {totalPages > 1 && (
            <div className="d-flex align-items-center justify-content-center mt-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={handlePrevPage} aria-label="Previous" disabled={currentPage === 1}> <span aria-hidden="true">«</span> </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                      <button className="page-link" onClick={() => setCurrentPage(page)}>{page}</button>
                    </li>
                  ))}

                  <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={handleNextPage} aria-label="Next" disabled={currentPage === totalPages} > <span aria-hidden="true">»</span></button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default PremiumTools