import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex cursor-pointer bg-black text-yellow-400 py-3 flex-row justify-between'>
        <div className='ml-3'>logo</div>
      <div className='flex justify-end flex-row mr-3 space-x-4'>
      <Link href="/home">Home</Link>
      <Link href="/socail-login">Socail login</Link>
      <Link href="/video-upload">video upload</Link>
      </div>
    </div>
  )
}

export default Navbar
