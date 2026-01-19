import phone from "../images/phone.png"
import email from "../images/email.png"
import fax from "../images/fax.png"

const MUHCInfo = () => {

    return (
        <>
        <div className="p-4">
            <div>
                <div className="d-flex rounded text-justify mx-3 my-5" style={{lineHeight: '1.4em'}}>
                    <div className="rounded shadow p-3" style={{boxShadow: '0 2px 10px 0 #245BDE', backgroundColor: '#D2DCF1', width: 'max-content', lineHeight: '2em', fontSize: '1.1em'}}>
                        <h2 className="fw-bold">Clinics</h2>
                        <br/>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
        <div className="d-flex rounded text-justify mx-3 my-5" style={{lineHeight: '1.4em'}}>
            <div className="rounded shadow p-3" style={{boxShadow: '0 2px 10px 0 #245BDE', backgroundColor: '#D2DCF1', width: 'max-content', lineHeight: '2em', fontSize: '1.1em'}}>
                <h2 className="fw-bold">Referrals</h2>
                <br/>
                <p>When external hospitals and physicians or internal departments refer patients to the neurfibromatosis clinic, they ensure a streamlined process. This means our medical geneticists will triage each patient's referral received weekly in order for patients to receive direct consultation with one of our NFIB professionals.</p>
                <p>To fill with desired info.</p>
            </div>
        </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
            <div className="d-flex justify-content-center rounded text-justify mx-3 my-5" style={{lineHeight: '1.4em'}}>
                <div className="rounded shadow p-3" style={{boxShadow: '0 2px 10px 0 #245BDE', backgroundColor: '#D2DCF1', width: 'max-content', lineHeight: '2em', fontSize: '1.1em'}}>
                    <h2 className="fw-bold">Clinic Information</h2>
                    <br/>
                    <p>To contact us, consider one of the following options: </p>
                    <div className="d-flex justify-content-center align-items-center p-4 rounded">
            <div className="p-3" style={{width: 'max-content', lineHeight: '2em', fontSize: '1.2em'}}>
            <ul className="list-unstyled">
                <li className="p-3"><img src={phone} alt="phone logo"/><span className="fw-bold">Phone: </span>
                <br/> (514) 412-4427</li>
                <li className="p-3"><img src={fax} alt="fax logo"/><span className="fw-bold">Fax: </span>
                <br/> (514) 412-4296</li>
                <li className="p-3"><img src={email} alt="email logo"/><span className="fw-bold">Email: </span>
                <br/> nf1@muhc.mcgill.ca</li>
            </ul>
            </div>
        </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default MUHCInfo;