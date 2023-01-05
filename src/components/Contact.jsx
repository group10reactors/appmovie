import './Contact.css';
export default function Contact() {
    return <div> <form class="contactpage" method="post" action="http://localhost:3003/messages">
        
    <label for="email_btn">Email: </label><input type="email" id="email_btn" name="email" />
    <label class="subject" for="subject_btn">Subject: </label><input type="text" id="subject_btn" name="subject"/>
    <label class="content" for="content">Content: </label><textarea name="content" rows="10" class="message_content" placeholder="Enter the message content"></textarea>
    <input class="submitcontact" placeholder="send" type="submit"   />
</form>
</div>;
  }
  