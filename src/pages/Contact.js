import phone from "../images/phone.png"
import email from "../images/email.png"
import fax from "../images/fax.png"

const Contact = () => {

    return (
        <>
        <div className="text-center p-3">
            <h1 className="text-center">Contact Us</h1>
        </div>

        <div className="d-flex justify-content-center align-items-center p-4 rounded fade-in">
            <div className="rounded shadow p-3" style={{boxShadow: '0 2px 20px 0 #1d4ed8', backgroundColor: '#CFD3DD', color: 'black', maxWidth: '760px', width: '100%', lineHeight: '1.6', fontSize: '1.05em'}}>
                <p className="p-2 text-center">Should you have any questions or concerns, please use one of the following methods below to reach out to us. An administrative member of our team will then assist you to the best of their abilities to answer your question or to help you with your request.
                </p>
            </div>
        </div>
        <br/>

        <div className="d-flex justify-content-center align-items-center p-4 rounded fade-in">
            <div className="rounded shadow text-white p-3" style={{boxShadow: '0 2px 20px 0 #1d4ed8', backgroundColor: '#0f172a', maxWidth: '760px', width: '100%', lineHeight: '1.6', fontSize: '1.05em'}}>
            <ul className="list-unstyled mb-0">
                <li className="p-3 d-flex align-items-start gap-3"><img src={phone} alt="phone logo" style={{width: 28, height: 28}}/><div><div className="fw-bold">Phone</div><div>(514) 412-4427</div></div></li>
                <li className="p-3 d-flex align-items-start gap-3"><img src={fax} alt="fax logo" style={{width: 28, height: 28}}/><div><div className="fw-bold">Fax</div><div>(514) 412-4296</div></div></li>
                <li className="p-3 d-flex align-items-start gap-3"><img src={email} alt="email logo" style={{width: 28, height: 28}}/><div><div className="fw-bold">Email</div><div>nf1@muhc.mcgill.ca</div></div></li>
            </ul>
            </div>
        </div>
            <br/>

            <div className="text-center p-4">
            <button className="btn shadow rounded-pill fw-bold px-3 py-2" style={{boxShadow: '0 2px 20px 0 #1d4ed8', backgroundColor: '#0f172a', fontSize: '1em'}}>
                <a href="https://muhc.ca" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">More information on the MUHC</a>
            </button>
            </div>
        </>
    )
}; 

export default Contact;
