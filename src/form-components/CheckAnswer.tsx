import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const isCorrect = userAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>

            <input
                type="text"
                value={userAnswer}
                onChange={handleAnswerChange}
                placeholder="Enter your answer here"
            ></input>
            <div>
                {userAnswer === "" ?
                    <span>❌</span>
                : isCorrect ?
                    <span>✔️</span>
                :   <span>❌</span>}
            </div>
        </div>
    );
}
