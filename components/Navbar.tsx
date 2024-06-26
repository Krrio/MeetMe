import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 
    px-6 py-4 lg:px-10'>
      <Link
        href="/"
        className='flex items-center gap-1'
      >
        <Image 
          src="/icons/logo.png"
          width={34}
          height={34}
          alt='Meet Me logo'
          className='max-sm:size-10'
        />
        <p className='text-[26px] ml-[5px] font-extrabold text-white 
        max-sm:hidden'>
          Meet Me
        </p>
      </Link>

      <div className='flex-between gap-5'>
        {/* Clerk - User Management */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar