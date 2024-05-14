import {React} from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { IoMdPaperPlane } from "react-icons/io";

const Contact = ({contactRef}) => { 

const [state, handleSubmit] = useForm("mpzvknvz");

return (     
<div className='ContactBackground'>
<div className="container">
<div className="Section-Header-White" ref={contactRef}>Contact Me</div>   
<div className='Content'>




<form onSubmit={handleSubmit} className='ContactForm'>
    
        
            <label htmlFor="name" className='FormLabel'>Name</label>
            <input id="name" name="name" placeholder='Name'/>
            <ValidationError prefix="name" field="name" errors={state.errors}/>

            <label htmlFor="email" className='FormLabel'>Email Address</label>
            <input id="email" type="email" name="email" placeholder='Email'/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>

            <label htmlFor="subject" className='FormLabel'>Subject</label>
            <input id="subject" name="subject" placeholder='Subject'/>
            <ValidationError prefix="subject" field="subject" errors={state.errors}/>

            <label htmlFor="message" className='FormLabel'>Message</label>
            <textarea id="message" rows="9" name="message" placeholder='Hey there...'/>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
        {!state.succeeded ? (   
            <button type="submit" className='FormButton' disabled={state.submitting}>
                Submit
            </button>
        
    ) : (
        <div className='FormSubmitted'>
            <span className='FormSubmittedBigMessage'>Message Sent <IoMdPaperPlane/></span>
            <span className='FormSubmittedsmallMessage'>(Speak Soon!)</span >
        </div>
    )}
</form>
            


    <div className='FooterMessage'>Oh! and I made this website (Obviously).....</div>
    </div>
</div>
</div>
);};
export default Contact;