import BBG from '../src/assets/BBG.jfif';
import ux from '../src/assets/ux.png';
import web from '../src/assets/web.png';
import app from '../src/assets/app.png';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';

import '../src/index.css'
import '../src/about.css'
import resume from '../src/assets/Sumanth updated resume.pdf';
export default function About() {
     return <>
     
     <section id="skill">
     <span className="skillTitle">About Myself</span>
     <img src={BBG} alt="profile" className="bbg" width="400" height="600" align="right" />
         <br>
         
         </br> 
        
          <span className="skillDesc">I'm <b><i>Sumanth Koppinadi</i></b>, hailing from Hyderabad, India. My academic journey in the field of technology began with a degree in Computer Science and Engineering from KL University in Vaddeswaram. Post-graduation, my adeptness in database management caught the attention of Broadridge Financial Solutions, a leading FinTech company. There, I honed my skills, managing products and their databases for two years. Eager to further specialize in Artificial Intelligence, I pursued the opportunity to study abroad and successfully enrolled in the Advanced Diploma program for Artificial Intelligence at Centennial College in Toronto, Canada. Currently, I am deepening my expertise in web development while progressing through my studies.</span> 
     
          <div className="skillBar">
               <img src={ux} alt="UIDesign" className="skillBarImg" />
               <div className="skillBarText">
               <h2>Want to know more about me</h2>
               <p>Here is my resume.</p>
               <a href={resume} download="Sumanth_Koppinadi_Resume.pdf">
            Download My Resume
          </a>
               </div>

          </div>
          
     
          
                  
     </section>
    

     </>
    }
    