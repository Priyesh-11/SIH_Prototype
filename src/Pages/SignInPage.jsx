import React from 'react'
import { Link } from 'react-router-dom'

const SignInPage = () => {
  return (
    <div className='bg-light flex h-screen w-full border-[10px] border-dark'>
        <div className='w-[50%] h-full'> 
            <img src="/kochi.png" alt="img" className='h-full w-full object-cover' />
        </div>
        <div className='w-[50%] h-full flex flex-col justify-between p-5 items-center '>
            <div className='my-10 w-full flex justify-end h-[60px]'>
                <img src="/Koch_Metro_Logo.png" alt="logo" className='h-full object-cover' />
            </div>
            <div className='flex flex-col justify-center items-center h-[70%] gap-5 w-full'>
                <div className='flex flex-col mb-10'>
                    <h1 className='text-dark text-6xl font-bold'>Welcome Back!</h1>
                    <p className='text-grayish text-xl font-semibold'>Please Log in your account</p>
                </div>
                <div className='flex flex-col gap-10 h-[50%] w-full justify-center items-center'>
                    <div className='h-[26%] w-[50%] hover:w-[52%] hover:h-[28%] transition-all  relative'>
                        <h1 className='text-lg font-medium absolute left-3 top-1 text-grayish'>User Name</h1>
                        <input type="text" className='h-full w-full px-3 pt-8 pb-2 border-[3px] rounded-md border-grayish text-lg' />
                    </div>
                    <div className='h-[26%] w-[50%] hover:w-[52%] hover:h-[28%] transition-all relative'>
                        <h1 className='text-lg font-medium absolute left-3 top-1 text-grayish'>User code</h1>
                        <input type="text" className='h-full w-full px-3 pt-8 pb-2 border-[3px] rounded-md border-grayish text-lg' />
                    </div>
                    <div className='h-[26%] w-[50%] hover:w-[52%] hover:h-[28%] transition-all relative'>
                        <h1 className='text-lg font-medium absolute left-3 top-1 text-grayish'>Password</h1>
                        <input type="text" className='h-full w-full px-3 pt-8 pb-2 border-[3px] rounded-md border-grayish text-lg' />
                    </div>
                </div>
                <button className='w-[50%] flex justify-end items-center'>
                    <h1 className='text-lg text-blue-400 hover:text-blue-500'>forgot password?</h1>
                </button>
                <Link to='/' className='w-[50%] flex gap-2 justify-between items-center'>
                    <button className='w-full text-light bg-dark hover:bg-light hover:text-dark border-2 hover:border-dark transition-all text-2xl p-3 rounded-lg font-medium'>
                        Login
                    </button>
                </Link>
            </div>
            <div className='h-[35%] w-full flex justify-center items-end'> 
                <p className=' text-gray-500 text-md font-normal'>
                    By Sign in you have agreed our terms and have read our data policy
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignInPage