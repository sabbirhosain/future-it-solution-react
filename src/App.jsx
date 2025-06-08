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
import "./App.css"
import OrderConfirm from "./Pages/OrderConfirm/OrderConfirm"
import MeetingSchedule from "./Pages/Dashboard/MeetingSchedule"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services-details/:id" element={<ServicesDetails />} />
        <Route path="/project" element={<Project />} />
        <Route path="/premium-tools" element={<PremiumTools />} />
        <Route path="/premium-tools/:id" element={<PremiumToolsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order" element={<MyOrder />} />
        <Route path="/order-confirm/:id" element={<OrderConfirm />} />
        <Route path="/meeting-schedule" element={<MeetingSchedule />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/data-and-privacy" element={<DataAndPrivacy />} />
        <Route path="/live-support" element={<LiveSupport />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App