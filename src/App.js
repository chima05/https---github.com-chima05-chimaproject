import React from 'react'

import {Header, Footer, Banner, Leader, Value, CTA} from './containers'
import {  Feature, Navbar, Story } from './components'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='hex__bg'>
        <Navbar />
        <Header />
      </div>
      <Feature />
      <Story />
      <Banner />
      <Leader />
      <Value />
      <CTA />
      <Footer />

    </div>
  )
}

export default App
