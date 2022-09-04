import React from 'react';
import { useForm } from 'react-hook-form';

function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (

        <div className='flex flex-col items-center justify-center gap-3 w-auto px-24 py-16 border border-gray-400  rounded-lg bg-gray-50'>


            <h4 className='text-red font-bold tracking-wider text-sm sm:text-lg pb-8 xl:text-xl'><span className='text-red-400'>Pavsever.com'a</span> Hoşgeldiniz</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7 w-full">
                <div className='upinput'>

                    <label htmlFor="name" className='label'>Name</label>

                    <input type="text" id='name' className='input' placeholder="örn: pav-code" {...register("name", { required: true, maxLength: 24, minLength: 8, pattern : /^[A-Za-z]+$/i })} />

                    {errors.name?.type === "required" && <span className='error'>Burayı doldurmak zorunlu.</span>}

                    {errors.name?.type === "maxLength" && <span className='error'>Maksimum 24 karakter.</span>}

                    {errors.name?.type === "minLength" && <span className='error'>Minimum 8 karakter.</span>}

                    {errors.name?.type === "pattern" && <span className='error'>Geçersiz kullanıcı adı.</span>}


                </div>

                <div className='upinput'>
                    <label htmlFor="email" className='label'>Email</label>
                    <input type="email" id='email' className='input' placeholder="example@pavsever.com" {...register("email", { required: true })} />
                    {errors.email?.type === "required" && <span className='error'>Bu alanı doldurmak zorunlu.</span>}
                </div>

                <div className='upinput'>

                    <label htmlFor="password" className='label'>Parola</label>
                    <input type="password" id='password' className='input' {...register("password", { required: true, minLength: 8 })} />
                    {errors.password?.type === "required" && <span className='error'>Bu alanı doldurmak zorunlu.</span>}
                    {errors.password?.type === "minLength" && <span className='error'>Minimum 8 karakter.</span>}

                </div>



                <button type="submit" className='submitButton'>Gönder</button>
            </form>

            <p className='text-sm lg:text-base pt-3 font-medium'>Zaten kayıtlı mısın? <a href="https://www.pavsever.com" className='text-red-400 pl-1 duration-300 transition-all hover:text-red-600'>Giriş Yap</a></p>
        </div>

    );
}


export default Register; 