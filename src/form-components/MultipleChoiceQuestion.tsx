import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChoice(e.target.value);
    };
    const isCorrect = selectedChoice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedChoice} onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div>
                {isCorrect ?
                    <span role="img" aria-label="correct">
                        ✔️ Correct
                    </span>
                :   <span role="img" aria-label="incorrect">
                        ❌ Incorrect
                    </span>
                }
            </div>
        </div>
    );
}
