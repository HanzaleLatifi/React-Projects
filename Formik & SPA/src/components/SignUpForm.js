import { Formik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Input from '../common/Input';
import Radio from '../common/Radio';
import Select from '../common/Select';
import CheckBox from '../common/CheckBox';

// for formik
const initialValues = {
    name: "", email:"" , password:"" , passwordConfirm:"" , gender:"" , nationality:""
    
}
const onSubmit=(values)=>{
    console.log(values)
}

const validationSchema=Yup.object({
    name:Yup.string().required("name is required").min(3) ,
    email: Yup.string().required('Email is required').email('email is invalid'),
    password:Yup.string().required("password is required") ,
    passwordConfirm:Yup.string().required("password Confirm is required").oneOf([Yup.ref('password'), null], 'Passwords must match'),
    gender:Yup.string().required("gender is required") ,
    nationality:Yup.string().required("select country !") ,
    terms: Yup.boolean().required().oneOf([true], 'You must accept.'),

})

//
const radioInputs=[
    {label:"Male" , value:"1"} ,
    {label:"Female" , value:"0"}
]
const optionValues=[
    {label:"select country ..." , value:""} ,
    {label:"iran" , value:"IR"} ,
    {label:"qatar" ,value:"QA"} ,
    {label:"Turkey" , value:"TK"}
]
function SignUpForm() {
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
            <Input name="name" formik={formik} label="Full Name"/>
            <Input name="email" formik={formik} label="Email"/>
            <Input name="password" formik={formik} label="Password" type="password"/>
            <Input name="passwordConfirm" formik={formik} label="Password Confirm" type="password"/>
            <Radio name="gender" formik={formik} radioInputs={radioInputs}/>
            <Select name="nationality" formik={formik} optionValues={optionValues} />
            <CheckBox name="terms" formik={formik} value={true}/>
            <button className="Btn" type="submit" disabled={!formik.isValid}>Sign Up</button>

        </form>

    )
}

export default SignUpForm
