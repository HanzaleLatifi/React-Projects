import React from 'react'

function CheckBox({ formik, name , value }) {
    return (
        <div className="CheckBox">
            <label>Terms and Conditions</label>
            <input type="checkbox" name={name} value={value} onChange={formik.handleChange}   checked={formik.values.terms} />
            {formik.errors[name] && formik.touched[name] && <div className="error">{formik.errors[name]}</div>}

        </div>
    )
}

export default CheckBox
