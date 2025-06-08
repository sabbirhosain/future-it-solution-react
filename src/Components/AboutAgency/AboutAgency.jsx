import aboutImg from '../../assets/about_thumb.png';
import Counter from 'react-countup';
import './AboutAgency.css'
import { IoCheckmarkDoneOutline } from 'react-icons/io5';


const AboutAgency = () => {

    const CounterUp = ({ count, duration }) => {
        return <Counter end={count} duration={duration} enableScrollSpy scrollSpyOnce={false} />
    }

    return (
        <div className='container'>
            <div className='row justify-content-between'>
                <div className='col-md-5'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={aboutImg} className='img-fluid' alt="" />
                    </div>
                </div>
                <div className='col-md-6'>
                    <h2 className='section_tagline'><IoCheckmarkDoneOutline className='section_tagline_icon' /> Who we are</h2>
                    <h2 className='about_agency_title'>Creative <span className='about_agency_title_color'>solutions that  grow</span> and empower brands.</h2>
                    <p className='about_agency_paragraph'>We are a results-driven digital agency focused on crafting innovative strategies, designing impactful experiences, and helping brands grow through creativity, technology, and a deep understanding of their audience.</p>
                    <div className='about_agency_counter_box'>
                        <div className='row align-items-center'>
                            <div className='col-sm-4 text-center'>
                                <h3 className='about_agency_counter'><CounterUp count='1200' duration='2.5' /> +</h3>
                                <h6 className='about_agency_counter_title'>Project Complete</h6>
                            </div>
                            <div className='col-sm-4 border-start border-end text-center'>
                                <h3 className='about_agency_counter'><CounterUp count='08' duration='2.5' /> +</h3>
                                <h6 className='about_agency_counter_title'>Awards Gained</h6>
                            </div>
                            <div className='col-sm-4 text-center'>
                                <h3 className='about_agency_counter'><CounterUp count='100' duration='2.5' /> %</h3>
                                <h6 className='about_agency_counter_title'>Satisfied Clients</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutAgency