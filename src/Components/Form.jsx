import React from 'react'
import { useForm } from 'react-hook-form';
import RegisterInput from './RegisterInput';

function RegisterForm() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7 w-full">
        
        <RegisterInput inputType="text" placeholder="örn: pav-sev" label="Kullanıcı Adı" errorType="name"  min="8" max="32" register={register} errors = {errors}/>

        <RegisterInput inputType={"email"} placeholder="example@pavsever.com" label="E-posta" errorType = "email" register={register} errors = {errors} />

        <RegisterInput inputType="password" label="Parola" errorType="password" min="8" register = {register} errors = {errors} />



        <button type="submit" className='submitButton'>Gönder</button>
    </form>
    )
}

export default RegisterForm