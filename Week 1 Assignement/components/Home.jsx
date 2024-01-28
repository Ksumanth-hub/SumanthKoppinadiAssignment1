/* 
  File name: Home.jsx
  Student’s Name: Sumanth Koppinadi
  StudentID: 301371023
  Date: January 28, 2024
*/

import BBG from '../src/assets/BBG.jfif';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import backgroundImage from '../src/assets/background.jpg';


export default function Home() {
     return <>
     
     <section id="intro">
          <div className="introContent">
          <h4 style={{ margin: 0, paddingLeft: '550px'}}>"Innovative Designs for the Modern Web"</h4>
          <span className="hello">Hello, Welcome to my Portfolio</span><br/>
          <span className="introText">I am <span className="introName">Sumanth Koppinadi</span> 
          <img src={BBG} alt="profile" className="bbg" width="400" height="600" align="right" />
          <br/>A Professional Website Designer</span>
          <p className="introPara">I am a seasoned Web Developer dedicated to crafting online experiences that stand out for their creativity and usability. With a solid foundation in both front-end and back-end technologies, I excel in creating responsive websites and applications that not only perform seamlessly across all devices but also adhere to the best practices and latest trends in web development.</p>
         <br>
         </br>
         <p className="introPara">I am passionate about learning new technologies and continuously improving my skill set. Whether working on a dynamic web application or an e-commerce platform, my goal is always to provide an exceptional user experience while meeting the strategic objectives of the business.</p>
          <p><b>My Mission is to </b>create innovative, user-centric digital experiences that blend form and function. I strive to deliver aesthetically compelling designs that offer intuitive navigation and encourage engagement, ensuring every website I craft not only meets but exceeds the expectations of both the client and their audience. </p>
          
          </div>
          
     </section>
    

     </>
     }
    