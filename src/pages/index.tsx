import Login from '@/components/Login'
import Head from 'next/head'
import React, {Component} from 'react'
import CourseCard from '../components/CourseCard'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <CourseCard courseName={"ics104"} state={1} examNums={3} />
    </div>
    
  )
}

 