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

        <Input inputType="text" placeholder="Mesajınızı Giriniz..." label="Mesaj" errorType="password" min="32" max="170" register={register} errors={errors} textarea="yes" />

        <button type="submit" className='submitButton'>Gönder</button>

      </form>
    </div>
  )
}

export default Contact