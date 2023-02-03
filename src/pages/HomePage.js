import React from 'react'
import {  Featured, Slider } from '../components'
import FirstCategories from '../components/FirstCategories'
import SecondCategories from '../components/SecondCategories'
import ThirthCategories from '../components/ThirthCategories'

const HomePage = () => {
  return (
    <div>
      <Slider/>
      <FirstCategories/>
      <SecondCategories/>
      <ThirthCategories/>
      <Featured/>
    </div>
  )
}

export default HomePage
