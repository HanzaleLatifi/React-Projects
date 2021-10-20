import React from 'react'

function Radio({ radioInputs, formik, name }) {
    return (
        <div className="Radios">
            {radioInputs.map(item => {
                return (
                    <div key={item.value}>
                        <label htmlFor={item.value} >{item.label}</label>
                        <input onChange={formik.handleChange} type="radio"
                            value={item.value}
                            name={name}
                            id={item.value}
                            checked={formik.values.gender === item.value} />
                    </div>
                )
            })}
            {formik.errors[name] && formik.touched[name] && <div className="error">{formik.errors[name]}</div>}


        </div>
    )
}

export default Radio
