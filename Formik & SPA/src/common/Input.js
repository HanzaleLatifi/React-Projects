import React from 'react'

function Input({ formik, label, name , type="text" }) {
    return (
        <div className="FormControl">
            <label >{label}</label>
            <input name={name} type={type} {...formik.getFieldProps({name})} />
            {formik.errors[name] && formik.touched[name] && <div className="error">{formik.errors[name]}</div>}

        </div>
    )
}

export default Input