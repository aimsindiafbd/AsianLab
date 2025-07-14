import React from 'react'
import Banner from '../components/Banner'
import FullBodyCheckupList from '../components/FullBodyCheckupList'

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Services /> */}
      {/* <SpecialProgram/> */}
      <FullBodyCheckupList />
    </div>
  )
}

export default Home