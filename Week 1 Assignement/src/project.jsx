import project1 from '../src/assets/project1.png';
import project2 from '../src/assets/project2.jpg';
import project3 from '../src/assets/project3.jpg';
import project4 from '../src/assets/project4.jpg';
import project5 from '../src/assets/project5.jpg';
import project6 from '../src/assets/project6.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import '../src/project.css'
export default function Project() {
     return <>
     
     <section id="works">
         
          <h2 className="worksTitle">Want to know more about my Projects</h2>
          <span className="worksDesc">
I have completed a variety of compelling projects. The "Berlogging Game" was my initial venture, a card game rooted in strategic play. Following that, I focused on "Predicting Medical Insurance Costs," a project leveraging machine learning algorithms to estimate healthcare insurance costs. Additionally, I created the "Emotion Detector," a cutting-edge application designed to identify various facial emotions, including happiness, sadness, surprise, and anger.</span> 
          <div className="worksImgs">
                   
                  
                   <img src={project3} alt="project3" className="worksImg" />
                   <img src={project4} alt="project4" className="worksImg" />
                   <img src={project5} alt="project5" className="worksImg" />
                   
                  
               
               </div>
<h2>Berlogging Game</h2>
          <p>The "Berlogging Game" is an engaging card game where the objective is to win by accumulating the most cards. The game operates on specific rules, and my role involved writing the code to simulate these rules and accurately predict the winner. This project was developed using the C programming language, emphasizing strategic gameplay and algorithmic thinking.</p>
<h2>Predicting Medical Insurance Costs</h2>

<p>It is a project focused on utilizing machine learning algorithms to estimate healthcare insurance expenses accurately. The project leverages Python and various machine learning techniques, demonstrating a practical application of data science in the healthcare industry to predict costs based on diverse variables.</p>

   <h2>Emotion Detector</h2>     
   <p>The "Emotion Detector" project is an innovative application designed to identify human emotions through facial recognition. It determines if a face is displaying happiness, sadness, surprise, or anger. This project is built using Python and OpenCV, showcasing the integration of computer vision and emotion recognition technology for real-time analysis.</p>          
                  
     </section>
    

     </>
    }
    