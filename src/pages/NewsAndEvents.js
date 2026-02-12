const NewsAndEvents = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container nf-page flex-grow-1">
                <section className="nf-hero card shadow-sm border-0 mb-4">
                    <h1 className="fw-bold mb-3">News and Upcoming Events</h1>
                    <p className="mb-4">
                        You will find below the latest news and upcoming events in regards to the NF1 clinic at the MUHC.
                    </p>
                </section>
                <br/>
                <br/>

                <section className="row g-4 my-4">
                    <div className="col-12 col-lg-6">
                        <div className="nf-card card shadow-sm border-0 h-100">
                            <h2 className="fw-bold mb-3">Updates</h2>
                            <ul>
                                <li>

                            <p className="mt-3">
                                <b>January 25, 2026:</b> Filler information.
                            </p>
                                </li>
                                <li>

                            <p className="mb-0">
                                <b>December 16, 2024:</b> Filler information.
                            </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 my-4">
                        <div className="nf-card card shadow-sm border-0 h-100">
                            <h2 className="fw-bold mb-3">News and Upcoming Events</h2>
                            <p className="mb-3">Stay tuned to know about the next updates for the NFIB clinic at the Montreal Children's Hospital</p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default NewsAndEvents;