import React from "react";

export default props => (
  <>
    <div class="container">
      <h2>Contact Us</h2>
      <p>Swing by for a cup of coffee, or leave us a message:</p>
    </div>
    <form action="MAILTO:email@email.com">
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />
      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />
      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." />
      <input type="submit" value="Submit" />
    </form>
  </>
);
