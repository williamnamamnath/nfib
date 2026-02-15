const Contact = () => {

    return (
        <>
        <div className="container nf-page">
            <section className="nf-hero card shadow-sm border-0 mb-4">
                    <h1 className="fw-bold mb-3">Contact Us</h1>
                    <p className="mb-4">
                        Should you have any questions or concerns, please use one of the following methods below to reach out to us.
                    </p>
                </section>
                <br/>
                <br/>

                <section className="row g-4 mt-4">
                    <div className="col-12 col-lg-6">
                        <div className="nf-card card shadow-sm border-0 h-100">
                            <h2 className="fw-bold mb-3">Contact Information</h2>
                            <ul className="mt-3 list-unstyled">
                                <li className="mb-2">
                                    <a href="tel:+15144124427" className="text-decoration-none text-dark">
                                        <i className="bi bi-telephone-fill me-2" aria-hidden="true"></i>
                                        (514) 412-4427
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:nfib@muhc.mcgill.ca" className="text-decoration-none text-dark">
                                        <i className="bi bi-envelope-fill me-2" aria-hidden="true"></i>
                                        nfib@muhc.mcgill.ca
                                    </a>
                                </li>
                            </ul>
                            <p>
                                If you'd like to send us a referral from your family doctor or another qualified specialist, please send it to <a href="https://referralportal.muhc.ca/" target="_blank" rel="noopener noreferrer">https://referralportal.muhc.ca/</a>.
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-12 col-lg-6">
                        <div className="nf-card card shadow-sm border-0 h-100">
                            <h2 className="fw-bold mb-3">Resources</h2>
                            <p className="mb-3">Here are some links that you may find helpful.</p>
                            <br/>
                            <p className="mb-3 fw-bold">More information on neurofibromatosis</p>
                            <ul>
                                <li>"Link"</li>
                            </ul>
                        </div>
                    </div>
                </section>
                
            <br/>
            <br/>

            <div className="text-center p-4">
            <button className="btn shadow rounded-pill fw-bold px-3 py-2" style={{boxShadow: '0 2px 20px 0 #1d4ed8', backgroundColor: '#0f172a', fontSize: '1em'}}>
                <a href="https://muhc.ca" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">More information on the MUHC</a>
            </button>
            </div>
        </div>
        </>
    )
}; 

export default Contact;
