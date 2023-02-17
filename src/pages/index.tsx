import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
  return (
    <>
    <Head>
        <title>KFUPM Login</title>
        <link rel="stylesheet" href="C:\Users\User\hackathon\src\styles\globals.css"/>
      </Head>
    <div className="flex flex-col items-center justify-center h-screen bg-image bg-[#3c4a3e]">
      <div className='z-0 opacity-90 absolute bg-[#3c4a3e] w-full h-full'></div>
      <form className="z-20 bg-white  p-6 rounded-lg shadow-md w-1/4">
        <img className=" mx-auto mb-4 w-[90%] h-16" src="KFUPM-logo.png" alt="KFUPM Logo"/>
        <div className="mb-1 bg-green-600 w-[25%] h-3 fixed left-[37.5%]"></div>
        <h1 className="text-2xl font-medium pt-6  mb-4">Sign in to your account</h1>
        <div className="mb-4 ">
          <label className="block w-4/6 mb-1  font-medium text-gray-500 dark:text-gray-500" for="email">Email</label>
          <input className="block mx-auto rounded-md bg-green-50 border border-green-500 text-green-900 w-full p-2 placeholder-green-700" type="email" id="email" name="email" required/>
        </div>
        <div className="mb-6">
          <label className=" block w-4/6 mb-1  font-medium  text-gray-500 dark:text-gray-500" for="password">Password</label>
          <input className="block mx-auto rounded-md bg-green-50 border border-green-500 text-green-900 w-full p-2 placeholder-green-700" type="password" id="password" name="password" required/>
        </div>
        <div className="flex items-center mb-4">
          <input className="mt-2 w-4 h-4 text-green-600  bg-green-600 focus:ring-green-500 focus:ring-2  border-gray-300 rounded" type="checkbox" id="keep-me-signed" name="keep-me-signed"/>
          <label className="text-sm ml-2" for="keep-me-signed">Keep me signed in</label>
        </div>
        <button className="mx-auto  block  transform duration-300 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 rounded-md">Sign in</button>
      </form>
    </div>
    </>
  )
}
