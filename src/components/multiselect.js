import React from "react";
import Select from "react-select"; // Importe o componente Select
import './multiselect.css'

const options = [
    { value: "skill 1", label: "skill 1" },
    { value: "skill 2", label: "skill 2" },
    { value: "skill 3", label: "skill 3" },
    { value: "skill 4", label: "skill 4" },
    { value: "skill 5", label: "skill 5" },
];

export const Multiselect = () => {
    return (
        <>
            <Select className="skill" isMulti options={options} /> {/* Use o componente Select corretamente */}
        </>
    );
};