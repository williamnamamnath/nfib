import MUHCInfo from "./MUHCInfo";

const Home = () => {

    return (
        <>
        <h1 className="text-center fw-bold" style={{fontSize: '1.8em'}}>NEUROFIBROMATOSIS</h1>
        <br/>
        <br/>
        <div className="m-4 text-center" style={{color: '#272727'}}>
            <h4>
            The medical geneticists in charge of the neurofibromatosis clinics:
            </h4>
            <br/>
        </div>

        <div className="d-flex flex-column flex-md-row text-center justify-content-center align-items-center p-4 rounded shadow mx-auto bg-primary text-white" style={{backgroundColor: '#245BDE', width: 'fit-content', lineHeight: '1.5em'}}>
            <div className="text-center p-3">
                <h3 className="text-decoration-underline">Dr. Daniela D'Agostino</h3>
                <p style={{color: "#CECECE"}}>Pediatric and Adult Clinic</p>
            </div>
            <br/>
            <br/>

            <div className="text-center p-3">
                <h3 className="text-decoration-underline">Dr. Ahmad Ghais</h3>
                <p style={{color: "#CECECE"}}>Pediatric Clinic</p>
            </div>
            <br/>
            <br/>

            <div className="text-center p-3">
                <h3 className="text-decoration-underline">Dr. June Ortenberg</h3>
                <p style={{color: "#CECECE"}}>Pediatric Clinic</p>
            </div>
            <br/>
            <br/>
        </div>
            <br/>
            <br/>
            <br/>
        <br/>
        <br/>
        <br/>
            <MUHCInfo />
        </>
    )
}; 

export default Home; 