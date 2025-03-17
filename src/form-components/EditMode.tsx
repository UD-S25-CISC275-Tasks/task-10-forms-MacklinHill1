import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    };

    const handleStudentToggle = () => {
        setIsStudent(!isStudent);
    };

    return (
        <div>
            <h3>Edit Mode</h3>
            <label>
                Edit Mode:
                <input
                    type="checkbox"
                    className="form-switch"
                    checked={isEditMode}
                    onChange={(e) => {
                        setIsEditMode(e.target.checked);
                    }}
                />
            </label>
            {isEditMode ?
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={userName}
                            onChange={(event) => {
                                handleNameChange(event);
                            }}
                        />
                    </label>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={() => {
                                    handleStudentToggle();
                                }}
                            />
                            Is a Student?
                        </label>
                    </div>
                </div>
            :   <p>
                    {userName} is {isStudent ? "a student" : "not a student"}.
                </p>
            }
        </div>
    );
}
