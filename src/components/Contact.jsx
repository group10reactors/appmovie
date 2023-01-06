import './Contact.css';
export default function Contact() {
  return <div> <h1 className='message'>Send us a message!</h1><form className="contactpage" method="post" action="http://localhost:3003/messages">
  <div className='form'>
<label className='mail' for="email_btn">Email: </label><input className='email' type="email" id="email_btn" name="email" />
<label className="subject" for="subject_btn">Subject: </label><input className='sub' type="text" id="subject_btn" name="subject"/>
<label className="content" for="content">Content: </label><textarea className="message_content" name="content" rows="10" placeholder="Enter the message content"></textarea>
<input className='subm' placeholder="send" type="submit"   />
</div>
</form>
</div>;
  }