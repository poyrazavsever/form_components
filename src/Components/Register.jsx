import React from 'react';
import RegisterForm from './Form';

function Register() {


    return (

        <div className='flex flex-col items-center justify-center gap-3 w-auto px-24 py-16 border border-gray-400  rounded-lg bg-gray-50'>


            <h4 className='text-red font-bold tracking-wider text-sm sm:text-lg pb-8 xl:text-xl'><span className='text-red-400'>Pavsever.com'a</span> Hoşgeldiniz</h4>

            <RegisterForm />

            <p className='text-sm lg:text-base pt-3 font-medium'>Zaten kayıtlı mısın? <a href="https://www.pavsever.com" className='text-red-400 pl-1 duration-300 transition-all hover:text-red-600'>Giriş Yap</a></p>
        </div>

    );
}


export default Register; 