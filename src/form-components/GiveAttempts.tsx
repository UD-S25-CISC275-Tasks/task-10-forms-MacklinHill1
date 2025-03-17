import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);

    const [requestedAttempts, setRequestedAttempts] = useState<string>("0");

    const handleRequestedAttemptsChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const value = event.target.value;
        if (value === "" || /^[0-9]+$/.test(value)) {
            setRequestedAttempts(value);
        }
    };

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedRequested = parseInt(requestedAttempts, 10);
        if (parsedRequested > 0 && !isNaN(parsedRequested)) {
            setAttemptsLeft(attemptsLeft + parsedRequested);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleRequestedAttemptsChange}
                placeholder="Requested Attempts"
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use Attempt
            </button>
            <button onClick={handleGainAttempts}>Gain Attempts</button>
        </div>
    );
}
