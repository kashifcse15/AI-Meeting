import Image from 'next/image'
import React from 'react'
import Button from '../components/button'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 '>
      <div className='flex flex-col items-center'>
        <Image src={'/spotify.jpeg'} width={400} height={100} alt='logo' className='w-[180px]' />
        <div>
          <Image src={'/butterfly.jpeg'} width={600} height={400} alt='login' className='mt-2 w-[400px] h-[250px]' />
          <h2 className='text-2xl font-bold text-center mt-5'>Welcome to AICruiter</h2>
          <p className='text-gray-500 text-center'> Sign in with google Authentication</p>


        </div>
        <div className="flex justify-center mt-5">
          <Button>Login</Button>
        </div>
      </div>

    </div>
  )
}

export default Login