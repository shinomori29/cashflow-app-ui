import React from 'react'
import Image from 'next/image'
import BooklistItem from '@/app/components/BooklistItem'

export default function BookDetail() {
  return (
    <div className="w-full min-h-screen max-w-[431px] mx-auto bg-white relative">
        <div className='w-full h-fit py-4 px-5 bg-[#ecf0f1] flex items-center justify-end'>
            <button className='cursor-pointer'><Image src="/icons/profile.svg" width={25} height={25} alt="profile" /></button>
        </div>

        {/* Kondisi data eksis */}
        <div className='w-full flex flex-col gap-3 px-5 pb-5 py-10'>
            
        </div>

        {/* Add book button */}
        <div className='w-10 h-10 shadow-xl cursor-pointer bg-white rounded-full fixed bottom-10 right-10 flex-items-center justify-center'>
            <Image src="/icons/add-icon.svg" width={40} height={40} alt="add" />
        </div>
    </div>
  )
}
