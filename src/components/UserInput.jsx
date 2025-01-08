import { useState } from "react";

export default function UserInput() {
    const [ initialInvestment, setInitialInvestment ] = useState(10000);
    const [ annualInvestment, setAnnualInvestment ] = useState(1200);
    const [ expectedReturn, setExpectedReturn ] = useState(6);
    const [ duration, setDuration ] = useState(10);

    
    function handleInitialInvestment(event) {
        setInitialInvestment(event.target.value);
    }

    function handleAnnualInvestment(event) {
        setAnnualInvestment(event.target.value);
    }

    function handleExpectedReturn(event) {
        setExpectedReturn(event.target.value);
    }

    function handleDuration(event) {
        setDuration(event.target.value);
    }

    return (
        <section id="user-input">
            <div className="input-group" >
                <p>
                    <label>Initial Investment</label>
                    <input type="number" value={initialInvestment} onChange={handleInitialInvestment} required />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" value={annualInvestment} onChange={handleAnnualInvestment} required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" value={expectedReturn} onChange={handleExpectedReturn} required />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" value={duration} onChange={handleDuration} required />
                </p>
            </div>
        </section>
    )
}
