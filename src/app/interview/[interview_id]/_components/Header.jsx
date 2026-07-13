import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='p-2 shadow-sm'>
        <Image src={'/spotify.jpeg'} alt='logo' width={100} height={100} className='w-[140px]'/>
    </div>
  )
}

export default Header