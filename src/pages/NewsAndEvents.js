const NewsAndEvents = () => {

    return (
        <>
        <div className="p-3">
            <div className="text-center fw-bold">
                <h1>NF1 News and Upcoming Events</h1>
            </div>
            <br/>
            <br/>

            <div className="text-justify mx-3 my-5" style={{lineHeight: '1.4em'}}>
                <div className="d-flex rounded mx-3 my-5 text-justify" style={{lineHeight: '1.4em'}}>
                    <div className="rounded shadow p-3 text-white" style={{boxShadow: '0 2px 10px 0 #1d4ed8', backgroundColor: '#D2DCF1', color: 'black', width: 'max-content', lineHeight: '2em', fontSize: '1.1em'}}>
            <p>NFIB, also known as <b>neurofibromatosis</b>, contains 3 conditions: Neurofibromatosis type 1 (NF1), also known as von Recklinghausen disease, Neurofibromatosis type 2 (NF2) and Schwannomatosis (SWN).</p>
            
            <br/>
            <p>At the Montreal University Health Centre, the genetics department specializes with <b>Neurofibromatosis Type 1 (NF1) </b>, which is a genetic condition that causes changes in skin pigment and tumors on nerve tissue. Skin changes include flat, light brown spots and freckles in the armpits and groin. Tumors can grow anywhere in the nervous system, including the brain, spinal cord and nerves. NF1 is rare. About 1 in 2,500 is affected by NF1.
                <br/>
                <br/>
            The tumors often are not cancerous, known as benign tumors. But sometimes they can become cancerous. Symptoms often are mild. But complications can occur and may include trouble with learning, heart and blood vessel conditions, vision loss, and pain.
                <br/>
                <br/>
            Treatment focuses on supporting healthy growth and development in children and early management of complications. If NF1 causes large tumors or tumors that press on a nerve, surgery can reduce symptoms. A newer medicine is available to treat tumors in children, and other new treatments are being developed.</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
        </>
    )
}

export default NewsAndEvents;