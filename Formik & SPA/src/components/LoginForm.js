import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import CheckBox from '../common/CheckBox'
import Input from '../common/Input' 

//
const initialValues = {
    email:"" , password:"" 
    
}
const onSubmit=(values)=>{
    console.log(values)
}

const validationSchema=Yup.object({
    email: Yup.string().required('Email is required').email('email is invalid'),
    terms: Yup.boolean().required().oneOf([true], 'You must accept.'),

})
//

function LoginForm() {
    const formik = useFormik(
        {
            initialValues,
            onSubmit,
            validationSchema,
            validateOnMount: true,

        }
    )
    return (
        <form className="Form" onSubmit={formik.handleSubmit}>
            <Input name="email" formik={formik} label="Email" />
            <Input name="password" formik={formik} label="Password" type="password" />
            <CheckBox name="terms" formik={formik} value={true}/>
            <button className="Btn" type="submit" disabled={!formik.isValid}>Login</button>
        </form>
    )
}

export default LoginForm
