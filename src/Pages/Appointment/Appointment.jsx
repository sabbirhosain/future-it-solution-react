import Layout from '../../Layout/Layout'
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoLanguageOutline } from "react-icons/io5";
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import host_img from '../../assets/user_image.png'
import './Appointment.css'

const Appointment = () => {
  // select date
  const [dateSelect, setDateSelect] = useState(new Date());
  const today = new Date();
  const sevenDaysFromToday = new Date();
  sevenDaysFromToday.setDate(today.getDate() + 6);

  const gmtTimeSlots = [
    '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM',
    '04:00 AM', '05:00 AM', '06:00 AM', '07:00 AM',
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM',
    '08:00 PM', '09:00 PM', '10:00 PM', '11:00 PM'
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const slotsPerPage = 8;
  const totalPages = Math.ceil(gmtTimeSlots.length / slotsPerPage);

  const indexOfLastSlot = currentPage * slotsPerPage;
  const indexOfFirstSlot = indexOfLastSlot - slotsPerPage;
  const currentSlots = gmtTimeSlots.slice(indexOfFirstSlot, indexOfLastSlot);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <Layout>
      <section className='appointment_section'>
        <div className="container">
          <form className="row border py-3">
            <div className="col-md-3">
              <div className='p-2'>
                <img src={host_img} className='appointment_host_img' alt="Host Image" />
                <h5 className='appointment_host_name'>Future It Solution</h5>
                <p className='appointment_host_title'>Support Team</p>
                <p className='appointment_host_country'><FaLocationCrosshairs /> Located in Bangladesh</p>
                <p className='appointment_host_language'><IoLanguageOutline /> Languages</p>
                <p className='appointment_host_language_name'>English (Fluent)</p>
                <p className='appointment_host_language_name'>Hindi/Urdu (Conversational)</p>
                <p className='appointment_host_language_name'>Bengali (Native/Bilingual)</p>
              </div>
            </div>
            <div className="col-md-5 border-start border-end">
              <div className="col-md-12 mb-5">
                <Calendar className='appointment_calender' minDate={today} maxDate={sevenDaysFromToday} onChange={setDateSelect} value={dateSelect} />
              </div>

              <div className='col-md-12'>
                <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 mt-4">
                  {currentSlots.map((slot, index) => {
                    const inputId = `slot-${indexOfFirstSlot + index}`;
                    return (
                      <div className="form-check" key={inputId}>
                        <input className="form-check-input border-primary" type="radio" name="timeZone" id={inputId} />
                        <label className="form-check-label" htmlFor={inputId}> {slot} </label>
                      </div>
                    );
                  })}
                </div>

                {/* Pagination Buttons */}
                <div className="mt-4 d-flex justify-content-center gap-3">
                  <button type='button' className="btn btn-success btn-sm rounded-0 d-flex align-items-center justify-content-center" onClick={handlePrev} disabled={currentPage === 1}><BiLeftArrow /></button>
                  <span className="align-self-center">Page {currentPage} of {totalPages}</span>
                  <button type='button' className="btn btn-success btn-sm rounded-0 d-flex align-items-center justify-content-center" onClick={handleNext} disabled={currentPage === totalPages}><BiRightArrow /></button>
                </div>

              </div>
            </div>
            <div className="col-md-4">
              <div className="row px-3">
                <div className="col-md-12 mb-3">
                  <label className='form-label'>Your Time Zone</label>
                  <select class="form-select rounded-0">
                    <option selected>Open this select menu</option>
                    <option value="-12">GMT -12:00 - UTC -12</option>
                    <option value="-11">GMT -11:00 - UTC -11</option>
                    <option value="-10">GMT -10:00 - UTC -10</option>
                    <option value="-9">GMT -09:00 - UTC -9</option>
                    <option value="-8">GMT -08:00 - UTC -8</option>
                    <option value="-7">GMT -07:00 - UTC -7</option>
                    <option value="-6">GMT -06:00 - UTC -6</option>
                    <option value="-5">GMT -05:00 - UTC -5</option>
                    <option value="-4">GMT -04:00 - UTC -4</option>
                    <option value="-3">GMT -03:00 - UTC -3</option>
                    <option value="-2">GMT -02:00 - UTC -2</option>
                    <option value="-1">GMT -01:00 - UTC -1</option>
                    <option value="0">GMT +00:00 - UTC +0</option>
                    <option value="1">GMT +01:00 - UTC +1</option>
                    <option value="2">GMT +02:00 - UTC +2</option>
                    <option value="3">GMT +03:00 - UTC +3</option>
                    <option value="4">GMT +04:00 - UTC +4</option>
                    <option value="5">GMT +05:00 - UTC +5</option>
                    <option value="6">GMT +06:00 - UTC +6</option>
                    <option value="7">GMT +07:00 - UTC +7</option>
                    <option value="8">GMT +08:00 - UTC +8</option>
                    <option value="9">GMT +09:00 - UTC +9</option>
                    <option value="10">GMT +10:00 - UTC +10</option>
                    <option value="11">GMT +11:00 - UTC +11</option>
                    <option value="12">GMT +12:00 - UTC +12</option>
                    <option value="13">GMT +13:00 - UTC +13</option>
                    <option value="14">GMT +14:00 - UTC +14</option>
                  </select>
                </div>
                <div className="col-md-12 mb-4">
                  <label className='form-label'>Bangladesh Time Zone</label>
                  <input className='form-control rounded-0' placeholder='00 : 00 : 00 AM/PM' readOnly/>
                </div>
                <div className="col-md-12 mb-3">
                  <label className='form-label'>Choose which language you want to speak?</label>
                  <div className="d-flex align-items-center gap-3">
                    <div className="form-check">
                      <input className="form-check-input border-primary" type="checkbox" id="english" />
                      <label className="form-check-label" htmlFor="english">English</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input border-primary" type="checkbox" id="hindi" />
                      <label className="form-check-label" htmlFor="hindi">Hindi</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input border-primary" type="checkbox" id="bangla" />
                      <label className="form-check-label" htmlFor="bangla">Bangla</label>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <label className='form-label'>Choose your meeting type?</label>
                  <div className="d-flex align-items-center gap-3">
                    <div className="form-check">
                      <input className="form-check-input border-primary" type="radio" name="meeting" id="googleMeet" />
                      <label className="form-check-label" htmlFor="googleMeet">Google Meet</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input border-primary" type="radio" name="meeting" id="zoomMeet" />
                      <label className="form-check-label" htmlFor="zoomMeet">Zoom Meet</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input border-primary" type="radio" name="meeting" id="whatsappChatting" />
                      <label className="form-check-label" htmlFor="whatsappChatting">Whatsapp Chatting</label>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mb-4">
                  <label className='form-label'>Meeting Reason</label>
                  <textarea rows='2' className='form-control rounded-0' placeholder='Type...' />
                </div>

                <div className="col-md-12">
                  <button className='btn btn-success rounded-0 w-100 booking_schedule_btn'>Booking schedule</button>
                </div>

              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default Appointment