import React from 'react'

function Select({ optionValues, name, formik }) {
    return (
        <div className="FormControl">
            <select name={name} {...formik.getFieldProps({ name })} >
                {optionValues.map(item => {
                    return (
                        <option key={item.value} value={item.value}>{item.label}</option>
                    )
                })}
            </select>
            {formik.errors[name] && formik.touched[name] && <div className="error">{formik.errors[name]}</div>}


        </div>
    )
}

export default Select
