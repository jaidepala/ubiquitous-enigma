import React from "react";
import { Uuid } from './uuid';

const FormRender = (props) => {

    const { labelText, type, placeholderText, onType, required, name } = props;
    const uuid = Uuid();

    if (type === 'input') {
        return (
            <li>
                <label htmlFor={uuid}>{labelText}</label>
                <input
                    onChange={(event) => {
                        onType(event, props);
                    }}
                    required={required}
                    name={name}
                    type="text"
                    id={uuid}
                    placeholder={placeholderText}
                />
            </li>
        );
    }
    else if (type === 'email') {
        return (
            <li>
                <label htmlFor={uuid}>{labelText}</label>
                <input
                    onChange={(event) => {
                        onType(event, props);
                    }}
                    required={required}
                    type="email"
                    id={uuid}
                    placeholder={placeholderText}
                />
            </li>
        );
    }
    else if (type === 'phone') {

        /* 
            !   REF:
            *   https://stackoverflow.com/a/43688362
        */
        return (
            <li>
                <label htmlFor={uuid}>{labelText}</label>
                <input
                    title="Phone number should be 10 digits and must have only numbers."
                    onChange={(event) => {
                        onType(event, props);
                    }}
                    required={required}
                    maxLength="10"
                    minLength="10"
                    pattern="[0-9]*"
                    type="text"
                    id={uuid}
                    placeholder={placeholderText}
                />
            </li>
        );
    }
    else if (type === 'textarea') {
        return (
            <li>
                <label htmlFor={uuid}>{labelText}</label>
                <textarea required={required} onChange={(event) => { onType(event, props); }} rows="6" id={uuid} placeholder={placeholderText}></textarea>
            </li>
        );
    }
};

export default FormRender
