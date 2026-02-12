const stats = [
    { label: "Prevalence", value: "1 in 2,500" },
    { label: "Care focus", value: "Early monitoring" }
]

const symptoms = [
    "Cafe au lait spots (6+)",
    "Freckling in armpits or groin",
    "Lisch nodules on the iris",
    "Neurofibromas, including plexiform",
    "Bone changes (scoliosis, tibial bowing)",
    "Optic pathway glioma",
    "Learning differences or ADHD",
    "Larger head size",
    "Short stature"
]

const monitoring = [
    "Skin checks for new or changing neurofibromas",
    "Blood pressure screening",
    "Growth and head circumference tracking",
    "Early puberty screening",
    "Skeletal change review",
    "Learning and school progress review",
    "Comprehensive eye exam"
]

const NF1 = () => {
    return (
        <>
            <div className="container nf-page">
                <section className="nf-hero card shadow-sm border-0 mb-4">
                    <h1 className="fw-bold mb-3">What is NF1?</h1>
                    <p className="mb-4">
                        NF1 (also known as <span style={{ color: '#193577' }}>neurofibromatosis type I</span>) is a genetic condition that can cause pigment changes and tumors along nerves. Many tumors stay
                        benign, but some can affect vision, learning, or comfort. Coordinated, early monitoring helps manage
                        risks and support healthy development.
                    </p>
                    <div className="d-flex flex-wrap gap-3">
                        {stats.map((item) => (
                            <div key={item.label} className="nf-stat card border-0 shadow-sm">
                                <div className="nf-stat__value">{item.value}</div>
                                <div className="nf-stat__label">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </section>
                <br/>
                <br/>

                <section className="row g-4 mt-4">
                    <div className="col-12 col-lg-6">
                        <div className="nf-card card shadow-sm border-0 h-100">
                            <h2 className="fw-bold mb-3">Overview</h2>
                            <p className="mt-3">
                                NF1 involves benign nerve sheath tumors and characteristic skin findings. It can vary widely from person to
                                person, and most tumors remain non-cancerous. Early recognition helps address complications such as learning
                                differences, vision changes, and blood pressure concerns.
                            </p>
                            <p className="mb-0">
                                Care focuses on monitoring growth, providing education, and stepping in early when symptoms appear.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="nf-card card shadow-sm border-0 h-100">
                            <h2 className="fw-bold mb-3">Symptoms</h2>
                            <p className="mb-3">Common findings observed during childhood include:</p>
                            <ul className="nf-list mt-3 mb-0">
                                {symptoms.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="nf-card card shadow-sm border-0 my-4">
                    <h2 className="fw-bold mb-3">Treatment and monitoring</h2>
                    <p>
                        There is no cure yet, but proactive monitoring and targeted treatment improve outcomes. A specialist team helps
                        prioritize which symptoms to address and when.
                    </p>
                    <div className="row g-3 mt-3">
                        <div className="col-12 col-md-6">
                            <h5 className="fw-bold">Monitoring</h5>
                            <ul className="nf-list mb-0">
                                {monitoring.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
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
            </div>
        </>
    )
}

export default NF1