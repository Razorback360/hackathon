import Ribbon from '@/components/ribbon'
import Head from 'next/head'
import React, {Component, useEffect} from 'react'
import CourseCard from '../components/CourseCard'
import Router from 'next/router'

const Home = ({ courses }) => {
  console.log(courses)
  const cards = []
  courses.forEach((course) => {
    cards.push(
      <CourseCard courseName={course.course.name} state={course.conflict ? -1 : course.reserved ? 1 : 0} onClick={() => {Router.push(`/panel/${course.course.id}`)}} />
    )
  })
  return (
    <div className="flex justify-center items-start h-screen w-screen flex-row flex-wrap overflow-x-hidden z-0 bg-gradient-to-br from-green-500 to-teal-300">
      <img className='w-full h-full object-cover absolute inset-0' src="/Hexagon.png" alt="Background Image"/>
      <Ribbon />
      <div className="flex justify-center h-auto w-screen flex-row flex-wrap overflow-hidden z-0">
      {cards.length > 0 && cards}
      </div>      
    </div>
    
  )
}

export const getServerSideProps = async ({req}) => {
  const res = await fetch("http://localhost:3000/api/manager/b75fd7ce-97e7-4c4a-a10e-df0adc6dd6dd")
  const courses = await res.json()

  return{
    props:{
      courses
    }
  }
}

export default Home;