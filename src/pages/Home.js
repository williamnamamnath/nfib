import MUHCInfo from "./MUHCInfo";

const doctors = [
    { name: "Dr. Daniela D'Agostino", clinic: "Pediatric and Adult Clinic" },
    { name: "Dr. Ahmad Ghais", clinic: "Pediatric Clinic" },
    { name: "Dr. June Ortenberg", clinic: "Pediatric Clinic" }
];

const Home = () => {
    return (
        <div className="container py-5">
            <section className="row align-items-center g-4">
                <div className="col-lg-7">
                    <h1 className="fw-bold display-5 hero-title">Welcome to the MUHC'S<br/>Neurofibromatosis (NFIB) Clinic</h1>
                </div>
            </section>

            <section className="mt-5">
                <h4 className="text-center text-secondary mb-4">The medical geneticists in charge of the NFIB clinics:</h4>
                <div className="row row-cols-1 row-cols-md-3 g-3">
                    {doctors.map((doctor) => (
                        <div className="col" key={doctor.name}>
                            <div className="card h-100 shadow-sm border-0 doctor-card">
                                <div className="card-body text-center">
                                    <h5 className="fw-bold">{doctor.name}</h5>
                                    <p className="text-secondary mb-0">{doctor.clinic}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-5">
                <MUHCInfo />
            </section>
        </div>
    );
};

export default Home;