import { Helmet } from 'react-helmet'
import Navbar from '../Components/Header/Navbar'
import Footer from '../Components/Footer/Footer'


const Layout = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>

            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout