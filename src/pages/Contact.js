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

        <section className="nf-card card shadow-sm border-0 my-4">
                    <h2 className="fw-bold mb-3">***FILLER INFORMATION</h2>
                    <p>
                        There is no cure yet, but proactive monitoring and targeted treatment improve outcomes. A specialist team helps
                        prioritize which symptoms to address and when.
                    </p>
                    <div className="row g-3 mt-3">
                        <div className="col-12 col-md-6">
                            <h5 className="fw-bold">Interventions</h5>
                            <ul className="nf-list mb-0">
                                <li>Selumetinib (Koselugo) for plexiform neurofibromas in children</li>
                                <li>Surgery for symptomatic or compressive tumors</li>
                                <li>Standard oncology care if tumors become cancerous</li>
                                <li>Clinical trials exploring future gene-targeted therapies</li>
                            </ul>
                        </div>
                    </div>
                </section>
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
