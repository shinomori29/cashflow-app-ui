import React from 'react'
import Link from 'next/link'

export default function BooklistItem({ bookId, title }) {
  return (
    <Link href={`/booklist/${bookId}`}><div className='w-full rounded-xl bg-white titillium-web-semibold text-black p-3 cursor-pointer'>{title}</div></Link>
  )
}
