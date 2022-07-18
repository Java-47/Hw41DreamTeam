import React from 'react'
import '../css_modules/constact.module.css';
import Species from './Species';

const Contact = () => {
  return (
    <div>
      <div className="container">
  <form action="action_page.php">

    <label >First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label >Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label >Space</label>

    <Species/>


    <label >Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Submit"/>

  </form>
</div>
    </div>
  )
}

export default Contact