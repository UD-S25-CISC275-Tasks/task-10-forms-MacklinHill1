import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "Red",
        "Green",
        "Blue",
        "Yellow",
        "Orange",
        "Purple",
        "Pink",
        "Brown",
    ];
    const [selectedColor, setSelectedColor] = useState<string>("Red");

    const handleColorChange = (color: string): void => {
        setSelectedColor(color);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <label key={color} style={{ marginRight: "10px" }}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => {
                                handleColorChange(color);
                            }}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    marginTop: "20px",
                    padding: "20px",
                    backgroundColor: selectedColor.toLowerCase(),
                    color: "white",
                    textAlign: "center",
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
