/* 
  File name: layout.jsx
  Student’s Name: Sumanth Koppinadi
  StudentID: 301371023
  Date: January 28, 2024
*/
import React from 'react';
import { Link } from 'react-router-dom';
import football1 from '../src/assets/football1.jfif';
export default function Layout() {
 return (
 <>
<div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={football1} alt="football" className="football" style={{ width: '150px', height: '150px' }}/>
  <h1 style={{ margin: 0, paddingLeft: '550px', textAlign: 'center' }}>Sumanth Koppinadi Portfolio</h1>
</div>  

 <nav>
 <Link to="/">Home</Link> |<Link to="/about">About Me</Link> | <Link to="/Services">Services</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
<hr style={{ width: '100%', margin: '0 auto' }} />

 </>
 
 );
}