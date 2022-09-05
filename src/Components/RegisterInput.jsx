import React from 'react'
function RegisterInput({ inputType, placeholder, label, errorType, max, min, errors, register }) {

    return (
        <div className='upinput'>

            <label htmlFor="name" className='label'>{label}</label>

            <input type={inputType} id='password' className='input' placeholder={placeholder} {...register(errorType, { required: true, maxLength: max, minLength: min })} />

            {/* Name */}
            <>
                {errorType === "name" ?
                    errors.name?.type === "required" && <span className='error'>Burayı doldurmak zorunlu.</span>
                    : ""}
                {errorType === "name" ?
                    errors.name?.type === "maxLength" && <span className='error'>Maksimum {max} karakter.</span>
                    : ""}
                {errorType === "name" ?
                    errors.name?.type === "minLength" && <span className='error'>Minimum {min} karakter.</span>
                    : ""}
                {errorType === "name" ?
                    errors.name?.type === "pattern" && <span className='error'>Geçersiz karakter kullanımı.</span>
                    : ""}
            </>

            {/* Email */}
            <>
                {errorType === "email" ?
                    errors.email?.type === "required" && <span className='error'>Burayı doldurmak zorunlu.</span>
                    : ""}
            </>


            {/* Password */}
            <>
                {errorType === "password" ?
                    errors.password?.type === "required" && <span className='error'>Burayı doldurmak zorunlu.</span>
                    : ""}
                {errorType === "password" ?
                    errors.password?.type === "maxLength" && <span className='error'>Maksimum {max} karakter.</span>
                    : ""}
                {errorType === "password" ?
                    errors.password?.type === "minLength" && <span className='error'>Minimum {min} karakter.</span>
                    : ""}
            </>

        </div>

    )
}

export default RegisterInput