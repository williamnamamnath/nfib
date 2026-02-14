const MUHCInfo = () => {

    return (
        <div className="container nf-page">
            <section className="nf-card card shadow-sm border-0 my-4">
                    <h2 className="fw-bold mb-3">Clinics and Referrals</h2>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br /><br />
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className="mt-3">
                            <span className="fw-bold">You want to submit your referral?</span> Visit the link below to learn how to proceed.
                        </p>
                        <ul>
                            <li>
                                <a
                                    href="https://referralportal.muhc.ca/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://referralportal.muhc.ca/
                                </a>
                            </li>
                        </ul>
                </section>
        </div>
    );
}

export default MUHCInfo;
