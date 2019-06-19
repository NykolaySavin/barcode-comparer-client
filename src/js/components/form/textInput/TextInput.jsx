import React from "react";

export const handleInputChange = (action,event) => {
    event.persist();
    action({ [event.target.name]: event.target.value});
}
export default function TextInput({label,name,action}) {
    return (<div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                onChange={handleInputChange.bind(null,action)}
                type="text"
                className="form-control"
                id={name}
                name={name}
                placeholder="Enter number"
            />
        </div>
    );
}
