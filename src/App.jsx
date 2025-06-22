import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Services from "./Pages/Services/Services"
import Contact from "./Pages/Contact/Contact"
import Project from "./Pages/Project/Project"
import Appointment from "./Pages/Appointment/Appointment"
import Register from "./Pages/Authentication/Register"
import Login from "./Pages/Authentication/Login"
import NotFound from "./Pages/NotFound/NotFound"
import PremiumTools from "./Pages/PremiumTools/PremiumTools"
import PremiumToolsDetails from "./Pages/PremiumTools/PremiumToolsDetails"
import ServicesDetails from "./Pages/Services/ServicesDetails"
import Dashboard from "./Pages/Dashboard/Dashboard"
import MyOrder from "./Pages/Dashboard/MyOrder"
import Profile from "./Pages/Dashboard/Profile"
import Reports from "./Pages/Dashboard/Reports"
import DataAndPrivacy from "./Pages/Dashboard/DataAndPrivacy"
import LiveSupport from "./Pages/Dashboard/LiveSupport"
import OrderConfirm from "./Pages/OrderConfirm/OrderConfirm"
import MeetingSchedule from "./Pages/Dashboard/MeetingSchedule"
import { ToastContainer } from "react-toastify"
import { ProtectedRoute, useAppContextProvider } from "./Context/AuthContext"
import axios from "axios"
import "./App.css"


const App = () => {
  // axios defaults config
  const { decryptData } = useAppContextProvider();
  const encryptedToken = localStorage.getItem("roots");
  const decryptToken = encryptedToken ? decryptData(encryptedToken) : null;
  const token = decryptToken?.accessToken;
  if (token) { axios.defaults.headers.common['Authorization'] = `Bearer ${token}` }
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services-details/:id" element={<ServicesDetails />} />
        <Route path="/project" element={<Project />} />
        <Route path="/premium-tools" element={<PremiumTools />} />
        <Route path="/premium-tools/:id" element={<PremiumToolsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<MyOrder />} />
          <Route path="/order-confirm/:id" element={<OrderConfirm />} />
          <Route path="/meeting-schedule" element={<MeetingSchedule />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/data-and-privacy" element={<DataAndPrivacy />} />
          <Route path="/live-support" element={<LiveSupport />} />
        </Route>
      </Routes>
    </>
  )
}

export default App