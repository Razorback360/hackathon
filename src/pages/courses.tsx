import Ribbon from '@/components/ribbon'
import Head from 'next/head'
import React, {Component} from 'react'
import CourseCard from '../components/CourseCard'

export default function Home() {
  return (
    <div className="flex justify-center items-start h-screen w-screen flex-row flex-wrap overflow-hidden z-0 bg-gradient-to-br from-green-500 to-teal-300">
      <img className='w-full h-full object-cover absolute inset-0' src="/Hexagon.png" alt="Background Image"/>
      <Ribbon />
      <div className="flex justify-center h-auto w-screen flex-row flex-wrap overflow-hidden z-0">
      <CourseCard courseName={"ICS 104"} state={-1}/>
      <CourseCard courseName={"COE 231"} state={0}/>
      <CourseCard courseName={"MATH 101"} state={1}/>
      <CourseCard courseName={"MATH 202"} state={-1}/>
      <CourseCard courseName={"BUS 231"} state={-1}/>
      <CourseCard courseName={"IAS 121"} state={1}/>
      </div>      
    </div>
    
  )
}
