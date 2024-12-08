import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='max-w-[1440px] h-9 mx-auto flex justify-center gap-[1050px] px-4 bg-[#F5F5F5] items-center'>
        <div>
        <Image 
        src='/logo1.png' alt="logo" width={100} height={100} className='w-6 h-6'/>
        </div>
        
        <div className='h-[30px]'>
            Find a Store &nbsp; | &nbsp; Help &nbsp; | &nbsp; Join us &nbsp; | &nbsp;Sign In
        </div>
    </div>
  )
}

export default Header