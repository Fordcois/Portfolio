'use client'

import React from 'react';
import '@/app/style.css'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => { 
    
const [state, handleSubmit] = useForm("mpzvknvz");

return (     

<div className="container">

    <span className="SectionHeaderBox-Pink">CONTACT ME...</span>
    
    <div className='Content' > 
    {!state.succeeded? 
        <form onSubmit={handleSubmit} className='ContactForm'>

            <label htmlFor="name" className='FormLabel'>Name</label>
            <input id="name" name="name" />
            <ValidationError prefix="name" field="name" errors={state.errors}/>
            

            <label htmlFor="email" className='FormLabel'>Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError prefix="Email" field="email" errors={state.errors}/>

            <label htmlFor="subject" className='FormLabel'>Subject </label>
            <input id="subject" name="subject" />
            <ValidationError prefix="subject" field="subject" errors={state.errors}/>

            <label htmlFor="message" className='FormLabel'>Message </label>
            <textarea id="message" rows="9" name="message" />
            <ValidationError prefix="Message" field="message" errors={state.errors}/>
            
            <button  type="submit" className='FormButton' disabled={state.submitting}>
                Submit
            </button>
            
            
            </form>
            :
            // After Form Has been Submitted
            <div className='FormSubmitted'> 
            <p>Message Sent</p>
            </div>
            }
    </div>
</div>

);};
export default Contact;