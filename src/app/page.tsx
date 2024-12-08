import React from 'react'
import Hero from './components/Hero'
import Air from './components/Air'
import Featured from './components/Featured'
import Gear from './components/Gear'
import Miss from './components/Miss'
import Essential from './components/Essential'

const page = () => {
  return (
    <div>
      <Hero/>
      <Air/>
      <Featured/>
      <Gear/>
      <Miss/>
      <Essential/>
    </div>
  )
}

export default page