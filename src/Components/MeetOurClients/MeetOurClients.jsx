import './MeetOurClients.css'
const MeetOurClients = ({ clients }) => {
    return (
        <div className='col-md-2 mb-4'>
            <div className="meet_our_team_box">
                <img src={clients.company_logo} className='meet_our_team_img' alt={clients.company_name} />
            </div>
        </div>
    )
}

export default MeetOurClients