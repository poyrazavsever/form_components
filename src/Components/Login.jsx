import React from 'react'
import "../index.css"

function Login() {
  return (
    <div className='flex flex-col items-center justify-center gap-3 w-auto px-24 py-16 border border-gray-400 rounded-lg bg-white'>

        <h4 className='text-red font-bold tracking-wider text-sm sm:text-lg pb-8 xl:text-xl'><span className='text-red-400'>Pavsever.com'a</span> Hoşgeldiniz</h4>

        <form className='flex flex-col gap-6 w-full'>

            <div className='upinput'>
                <label htmlFor="mail" className='label'>E-posta</label>
                <input type="email" id='mail' placeholder='example@niafix.com' className='input'/>
            </div>

            <div className='upinput'>
                <label htmlFor="password" className='label'>Password</label>
                <input type="password" id='password' className='input'/>
            </div>

            <button className='w-full bg-red-400 text-sm md:text-base xl:text-lg transition-colors text-white py-3 rounded-md mt-4 hover:bg-red-500'>Giriş Yap</button>
        </form>

        <p className='text-xs lg:text-sm pt-3 font-medium'>Daha Kayıt Olmadın mı? <a href="https://www.pavsever.com" className='text-red-400 pl-1 duration-300 transition-all hover:text-red-600'>Kayıt yap</a></p>

    </div>
  )
}

export default Login