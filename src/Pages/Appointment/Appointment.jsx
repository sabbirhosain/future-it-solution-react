import Layout from '../../Layout/Layout'
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoLanguageOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import host_img from '../../assets/user_image.png'
import './Appointment.css'

const Appointment = () => {
  // select date
  const today = new Date();
  const sevenDaysFromToday = new Date();
  sevenDaysFromToday.setDate(today.getDate() + 6);

  const [dateSelect, setDateSelect] = useState(new Date());
  const formattedDate = `${String(dateSelect.getMonth() + 1).padStart(2, '0')}-${String(dateSelect.getDate()).padStart(2, '0')}-${dateSelect.getFullYear()}`;

  const [meeting_time, setMeeting_time] = useState('');
  const [time_zone, setTime_zone] = useState('');
  const [meeting_type, setMeeting_type] = useState('');
  const [meeting_reason, setMeeting_reason] = useState('');
  const [bangladesh_date_and_time, setBangladesh_date_and_time] = useState('');
  const [fieldError, setFieldError] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!meeting_time || time_zone === '') {
      setBangladesh_date_and_time('');
      return;
    }

    // Parse selected time and timezone
    const [time, modifier] = meeting_time.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    if (modifier === 'PM' && hours !== 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;

    // Create Date object in selected timezone
    const selectedDate = new Date(dateSelect);
    selectedDate.setHours(hours);
    selectedDate.setMinutes(minutes);
    selectedDate.setSeconds(0);

    // Convert to UTC
    const utcTime = selectedDate.getTime() - parseInt(time_zone) * 60 * 60 * 1000;

    // Convert to Bangladesh Time (GMT+6)
    const bdDate = new Date(utcTime + 6 * 60 * 60 * 1000);

    // Format to 12-hour clock
    let bdHours = bdDate.getHours();
    const bdMinutes = String(bdDate.getMinutes()).padStart(2, '0');
    const ampm = bdHours >= 12 ? 'PM' : 'AM';
    bdHours = bdHours % 12 || 12;

    // Determine "Day" or "Night"
    const timeOfDay = (bdDate.getHours() >= 6 && bdDate.getHours() < 18) ? 'Day' : 'Night';

    // Optional: include date if needed
    const bdFormattedDate = `${String(bdDate.getMonth() + 1).padStart(2, '0')}-${String(bdDate.getDate()).padStart(2, '0')}-${bdDate.getFullYear()}`;

    setBangladesh_date_and_time(`${bdFormattedDate} - ${bdHours}:${bdMinutes} ${ampm} (${timeOfDay})`);

  }, [meeting_time, time_zone, dateSelect]);





























  return (
    <Layout title='Appointment'>
      <section className='appointment_section'>
        <div className="container">
          <form className="row border py-5">
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
            <div className="col-md-9">
              <div className="row border-start">
                <div className="col-md-12 mb-5">
                  <Calendar className='appointment_calender' minDate={today} maxDate={sevenDaysFromToday} onChange={setDateSelect} value={dateSelect} />
                </div>
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Your Meeting Time</label>
                  <select value={meeting_time} onChange={(event) => setMeeting_time(event.target.value)} className="form-select rounded-0">
                    <option value="">Select Option</option>
                    <option value="12:00 AM">12:00 AM</option>
                    <option value="01:00 AM">01:00 AM</option>
                    <option value="02:00 AM">02:00 AM</option>
                    <option value="03:00 AM">03:00 AM</option>
                    <option value="04:00 AM">04:00 AM</option>
                    <option value="05:00 AM">05:00 AM</option>
                    <option value="06:00 AM">06:00 AM</option>
                    <option value="07:00 AM">07:00 AM</option>
                    <option value="08:00 AM">08:00 AM</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                    <option value="08:00 PM">08:00 PM</option>
                    <option value="09:00 PM">09:00 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                    <option value="11:00 PM">11:00 PM</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <label className='form-label'>Your Time Zone</label>
                  <select value={time_zone} onChange={(event) => setTime_zone(event.target.value)} className="form-select rounded-0">
                    <option value="">Select Option</option>
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
                <div className="col-md-4 mb-4">
                  <label className='form-label'>Bangladesh Time</label>
                  <input value={bangladesh_date_and_time} className='form-control rounded-0' placeholder='00-00-0000 - 0:00 AM/PM' readOnly />
                </div>
                <div className="col-md-12 mb-3">
                  <label className='form-label'>Choose your meeting type?</label>
                  <div className="d-flex align-items-center gap-3">
                    <div className="form-check">
                      <input onChange={(event) => setMeeting_type(event.target.value)} className="form-check-input border-primary" type="radio" name="meeting" id="googleMeet" />
                      <label className="form-check-label" htmlFor="googleMeet">Google Meet</label>
                    </div>
                    <div className="form-check">
                      <input onChange={(event) => setMeeting_type(event.target.value)} className="form-check-input border-primary" type="radio" name="meeting" id="zoomMeet" />
                      <label className="form-check-label" htmlFor="zoomMeet">Zoom Meet</label>
                    </div>
                    <div className="form-check">
                      <input onChange={(event) => setMeeting_type(event.target.value)} className="form-check-input border-primary" type="radio" name="meeting" id="whatsappChatting" />
                      <label className="form-check-label" htmlFor="whatsappChatting">Whatsapp Meet</label>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mb-4">
                  <label className='form-label'>Meeting Reason</label>
                  <textarea value={meeting_reason} onChange={(event) => setMeeting_reason(event.target.value)} rows='3' className='form-control rounded-0' placeholder='Your Message...' />
                </div>

                <div className="col-md-12">
                  <button type='submit' className='btn btn-success rounded-0 w-100 booking_schedule_btn'>Booking schedule</button>
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