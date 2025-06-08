import './MeetOurClients.css'
import ourClient from '../../assets/happy-clients/partner-03.png'
const MeetOurClients = () => {
    return (
        <div className='col-md-2 mb-3'>
            <div className="meet_our_team_box">
                <img src={ourClient} className='meet_our_team_img' alt="" />
            </div>
        </div>
    )
}

export default MeetOurClients