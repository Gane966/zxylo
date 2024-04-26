import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header'
import ExploreMenu from '../../components/exploreMenu/exploreMenu'



const Home = () => {

  const [category, setCatagory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category ={category} setCatagory={setCatagory}/>
    </div>
  )
}

export default Home
