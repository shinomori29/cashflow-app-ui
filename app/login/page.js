import React from 'react'
import Link from 'next/link'

export default function Login() {
  return (
    <form className="w-full h-screen max-w-[431px] mx-auto bg-[#f1c40f] p-5 flex flex-col justify-center gap-7 items-center">
        <h1 className='text-4xl titillium-web-semibold text-white text-center'>Saatnya Cek Arus Kas Kamu</h1>
        <input required type='text' placeholder='Masukkan username' className='w-full py-3 px-5 text-sm outline-none bg-white text-black rounded-full border border-white' />
        <input required type='password' placeholder='Masukkan password' className='w-full py-3 px-5 text-sm outline-none bg-white text-black rounded-full border border-white' />
        <div className='flex flex-col items-center gap-3'>
            <button type='submit' className='w-fit px-10 py-3 bg-white text-black rounded-full text-sm titillium-web-semibold'>Lanjutkan</button>
            <p className='text-black titillium-web-semibold text-xs'>Belum punya akun ? <Link href={"/register"} className='text-white titillium-web-bold'>Daftar</Link></p>
        </div>
    </form>
  )
}
