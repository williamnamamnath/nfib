import phone from "../images/phone.png"
import email from "../images/email.png"
import fax from "../images/fax.png"

const MUHCInfo = () => {

    return (
        <div className="container py-5">
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <div className="card shadow-sm border-0 info-card fade-in">
                        <h2 className="fw-bold mb-3">Clinics</h2>
                        <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="card shadow-sm border-0 info-card info-card--accent fade-in">
                        <h2 className="fw-bold mb-3">Referrals</h2>
                        <p className="mb-2">When external hospitals and physicians or internal departments refer patients to the neurfibromatosis clinic, they ensure a streamlined process. This means our medical geneticists will triage each patient's referral received weekly in order for patients to receive direct consultation with one of our NFIB professionals.</p>
                        <p className="mb-0">To fill with desired info.</p>
                    </div>
                </div>

                <div className="col-12">
                    <div className="card shadow-sm border-0 info-card info-card--accent text-center fade-in" id="contact">
                        <h2 className="fw-bold mb-3">Clinic Information</h2>
                        <p className="mb-3">To contact us, consider one of the following options:</p>
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-md-row gap-3 justify-content-center">
                            <li className="d-flex align-items-start gap-2">
                                <img src={phone} alt="phone" style={{width: 28, height: 28}} />
                                <span><span className="fw-bold">Phone:</span><br/>(514) 412-4427</span>
                            </li>
                            <li className="d-flex align-items-start gap-2">
                                <img src={fax} alt="fax" style={{width: 28, height: 28}} />
                                <span><span className="fw-bold">Fax:</span><br/>(514) 412-4296</span>
                            </li>
                            <li className="d-flex align-items-start gap-2">
                                <img src={email} alt="email" style={{width: 28, height: 28}} />
                                <span><span className="fw-bold">Email:</span><br/>nf1@muhc.mcgill.ca</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MUHCInfo;
