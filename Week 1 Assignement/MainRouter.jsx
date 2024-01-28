/* 
  File name: scripts.js
  Student’s Name: Sumanth Koppinadi
  StudentID: 301371023
  Date: January 28, 2024
*/
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Education from './src/Services'
import Project from './src/project'
import Layout from './components/layout'
import Services from './src/Services'
const MainRouter = () => {
 return (<div>
 <Layout/>
 <Routes>
 
<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/Services" element={<Services />} />
<Route exact path="/project" element={<Project />} />
<Route exact path="/contact" element={<Contact />} />
 
 </Routes>
 </div>
 )
}
export default MainRouter

