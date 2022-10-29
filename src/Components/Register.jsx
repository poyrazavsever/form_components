import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import { AiOutlineClose, AiFillCheckCircle } from "react-icons/ai"
import { useState } from 'react';

function Register() {

    const [submit, setSubmit] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setSubmit(true)
    }

    return (

        <div className='flex flex-col items-center justify-center gap-3 w-auto px-24 py-16 border border-gray-400  rounded-lg bg-gray-50'>


            <h4 className='text-red font-bold tracking-wider text-sm sm:text-lg pb-8 xl:text-xl'><span className='text-red-400'>Pavsever.com'a</span> Hoşgeldiniz</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7 w-full">

                <div className='relative'>
                    <Input inputType="text" placeholder="örn: pav-sev" label="Kullanıcı Adı" errorType="name" min="8" max="32" register={register} errors={errors} />

                    {errors.name ?
                        <div className='absolute top-8 right-2'>
                            <AiOutlineClose className='text-red-500' />
                        </div> : ""
                    }
                </div>


                <div className='relative'>
                    <Input inputType={"email"} placeholder="example@pavsever.com" label="E-posta" errorType="email" register={register} errors={errors} />
                    {errors.name ?
                        <div className='absolute top-8 right-2'>
                            <AiOutlineClose className='text-red-500' />
                        </div> : ""
                    }
                </div>


                <div className='relative'>

                    <Input inputType="password" label="Parola" errorType="password" min="8" register={register} errors={errors} />

                    {errors.name ?
                        <div className='absolute top-8 right-2'>
                            <AiOutlineClose className='text-red-500' />
                        </div> : ""
                    }

                </div>

                <button type="submit" className='submitButton'>Gönder</button>
            </form>

            <p className='text-sm lg:text-base pt-3 font-medium'>Zaten kayıtlı mısın? <a href="https://www.pavsever.com" className='text-red-400 pl-1 duration-300 transition-all hover:text-red-600'>Giriş Yap</a></p>
        </div>

    );
}


export default Register; 