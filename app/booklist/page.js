import React from 'react'
import Image from 'next/image'
import BooklistItem from '../components/BooklistItem'

export default function Booklist() {
  return (
    <div className="w-full min-h-screen max-w-[431px] mx-auto bg-[#f1c40f] relative">
        <div className='w-full h-fit py-4 px-5 bg-[#ecf0f1] flex items-center justify-end'>
            <button className='cursor-pointer'><Image src="/icons/profile.svg" width={25} height={25} alt="profile" /></button>
        </div>

        {/* Kondisi data kosong */}
        <div className='w-full min-h-[90vh] flex items-center flex-col justify-center gap-5 hidden'>
            <div className='flex items-start justify-center gap-3 w-9/12'>
                <div className='mt-1'><Image src="/icons/transaction-history.svg" width={70} height={70} alt='transaction' className='[filter:brightness(0)_saturate(100%)_invert(95%)_sepia(100%)_saturate(0%)_hue-rotate(18deg)_brightness(104%)_contrast(104%)]' /></div>
                <div className='text-white text-sm titillium-web-semibold'>Sepertinya Kamu belum pernah mencatat transaksi. Semua catatan akan muncul di halaman ini.</div>
            </div>
            <button className='w-fit px-10 py-3 bg-white text-black rounded-full text-sm titillium-web-semibold'>Buat Buku</button>
        </div>

        {/* Kondisi data eksis */}
        <div className='w-full flex flex-col gap-3 px-5 pb-5 py-10'>
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
            <BooklistItem title="Biaya Renovasi Rumah" bookId="543ggregrs" />
        </div>

        {/* Add book button */}
        <div className='w-10 h-10 shadow-xl cursor-pointer bg-white rounded-full fixed bottom-10 right-10 flex-items-center justify-center'>
            <Image src="/icons/add-icon.svg" width={40} height={40} alt="add" />
        </div>
    </div>
  )
}
