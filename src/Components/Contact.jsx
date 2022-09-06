import React from 'react'
import { useForm } from 'react-hook-form';
import Input from './Input';

function Contact() {

  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div className='flex flex-col items-center justify-center gap-3 w-auto px-24 py-16 border border-gray-400  rounded-lg bg-gray-50'>


            <h4 className='text-red font-bold tracking-wider w-full block text-center text-sm sm:text-lg pb-8 xl:text-xl'><span className='text-red-400'>Pavsever.com </span> İletişim Formu</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7 w-full">

                <Input inputType="text" placeholder="örn: Poyraz Avsever" label="Adınız" errorType="name" min="8" max="32" register={register} errors={errors} />

                <Input inputType={"email"} placeholder="example@pavsever.com" label="E-posta" errorType="email" register={register} errors={errors} />

                <Input inputType="password" label="Parola" errorType="password" min="8" register={register} errors={errors} />

                <button type="submit" className='submitButton'>Gönder</button>
            </form>

            <p className='text-sm lg:text-base pt-3 font-medium'>Zaten kayıtlı mısın? <a href="https://www.pavsever.com" className='text-red-400 pl-1 duration-300 transition-all hover:text-red-600'>Giriş Yap</a></p>
        </div>
  )
}

export default Contact