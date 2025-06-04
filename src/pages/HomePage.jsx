import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import WhatWeProvide from '../components/WhatWeProvide'
import NewArrival from '../components/NewArrival'
import Offer from '../components/Offer'
import BestSeller from '../components/BestSeller'
import Gateway from '../components/Gateway'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <WhatWeProvide/>
      <NewArrival/>
      <Offer/>
      <BestSeller/>
      <Gateway/>
      <Footer/>
    </>
  )
}

export default HomePage