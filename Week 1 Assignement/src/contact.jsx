/* 
  File name: contact.jsx
  Student’s Name: Sumanth Koppinadi
  StudentID: 301371023
  Date: January 28, 2024
*/
import '../src/contact.css';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // This prevents the default form submission action
    navigate('/'); // This will navigate to the home page
  };

  return (
    <>
      <p>Contact Me</p>
      <h3 style={{ textAlign: "center" }}>Please leave your contact details here, I will reach out to you soon.</h3>
      <form id="ffp" onSubmit={handleSubmit}>
        <label htmlFor="myFName"> *First Name: </label>
        <input type="text" id="myFName" name="myFName" required autoFocus /> <br /> <br />
        
        <label htmlFor="myLName"> *Last Name: </label>
        <input type="text" id="myLName" name="myLName" required /> <br /> <br />
        
        <label htmlFor="myEmail"> *Email: </label>
        <input type="email" id="myEmail" name="myEmail" required /> <br /> <br />
        
        <input type="submit" className="submit" value="Submit" />
      </form> <br />
      <p><i>Call me on: <strong>+14375599852 </strong></i></p>
      <p><b>Linkdlin</b>:https://www.linkedin.com/in/sumanth-koppinadi-45a846168/</p>
      <p><b>Email:</b>Koppinadisumanth@gmail.com</p>
    </>
  );
}
