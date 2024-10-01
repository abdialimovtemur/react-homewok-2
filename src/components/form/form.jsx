import React, { useState } from "react";

const Form = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (inputValue) {
            onAdd(inputValue); 
            setInputValue(""); 
        }
    };

    return (
        <div>
            <form onSubmit={submit} className="text-yellow-500">
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    type="text"
                    placeholder="user name"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Form;
