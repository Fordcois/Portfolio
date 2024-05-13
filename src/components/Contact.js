'use client'

import React from 'react';

import { useForm, ValidationError } from '@formspree/react';
import { IoMdPaperPlane } from "react-icons/io";

const Contact = () => { 
    
const [state, handleSubmit] = useForm("mpzvknvz");

return (     

<div className="container">

    <span className="SectionHeaderBox-Pink">CONTACT ME...</span>
    
    <div className='Content'> 
    
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
           
           {!state.succeeded?  
            <button  type="submit" className='FormButton' disabled={state.submitting}>
                Submit
            </button>
            :
            <div className='FormSubmitted'>
            Message Sent
            <IoMdPaperPlane style={{marginLeft:'15px'}}/>
             </div>}
            
            </form>
            


           
    </div>
</div>

);};
export default Contact;