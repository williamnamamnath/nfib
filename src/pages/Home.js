import MUHCInfo from "./MUHCInfo";

const doctors = [
    { name: "Dr. Daniela D'Agostino", clinic: "Pediatric and Adult Clinic" },
    { name: "Dr. Ahmad Ghais", clinic: "Pediatric Clinic" },
    { name: "Dr. June Ortenberg", clinic: "Pediatric Clinic" }
];

const Home = () => {
    return (
        <>
            <div className="mb-4">
                <div className="hero">
                    <div className="container py-5">
                        <div className="row align-items-center g-4">
                            <div className="col-lg-7">
                                <h1 className="fw-bold display-5 hero-title">Welcome to the MUHC'S<br/>Neurofibromatosis (NFIB) Clinic</h1>
                                <p className="text-muted mt-3">Providing specialised and specific care for our pediatric and adult patients at the Montreal University Health Care centre. Learn about our clinics and our team.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="mt-5">
                <h4 className="text-center text-secondary mb-4">The medical geneticists in charge of the NFIB clinics:</h4>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {doctors.map((doctor) => (
                        <div className="col" key={doctor.name}>
                            <div className="fade-in">
                                <div className="card h-100 shadow-sm border-0 doctor-card">
                                    <div className="card-body text-center">
                                        <a href="/nf1-team" style={{ color: 'black' }}>
                                        <h5 className="fw-bold">{doctor.name}</h5>
                                        </a>
                                        <p className="text-secondary mb-0">{doctor.clinic}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-5">
                <MUHCInfo />
            </section>
        </>
    );
};

export default Home;
