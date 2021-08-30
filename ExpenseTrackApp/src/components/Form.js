import React, { useState } from 'react'

function Form(props) {


    const [formValues, setFormValues] = useState({ amount: 0, desc: '', type: 'expense' })

    const changeHandler = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        props.addTransaction(formValues)

    }

    return (
        <div className='form-container'>
            <form onSubmit={submitHandler} >
                <input type='number' name='amount' value={formValues.amount} onChange={changeHandler} placeholder="amount..."></input>
                <input type='text' name='desc' value={formValues.desc} onChange={changeHandler} placeholder="description..."></input>

                <div className='radio-container'>
                    <input id='1' type='radio' name='type' value='expense' onChange={changeHandler} checked={formValues.type === 'expense'} />
                    <label htmlFor='1'>expense</label>
                    <input id='2' type='radio' name='type' value='income' onChange={changeHandler} checked={formValues.type === 'income'} />
                    <label htmlFor='2'>income</label>
                </div>

                <button type='submit'>Add</button>

            </form>

        </div>
    )
}

export default Form;
