'use client'

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => { 
    
    const [state, handleSubmit] = useForm("mpzvknvz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;}



      return (     

<div className="ProjectDiv-Container">

<span className="SectionHeaderBox-Pink">CONTACT ME...</span>


<form onSubmit={handleSubmit}>

    <label htmlFor="name">Name</label>
    <input id="name" name="name" />
    <ValidationError prefix="name" field="name" errors={state.errors}/>
    

    <label htmlFor="email">Email Address</label>
    <input id="email" type="email" name="email" />
    <ValidationError prefix="Email" field="email" errors={state.errors}/>

    <label htmlFor="subject">Subject </label>
    <input id="subject" name="subject" />
    <ValidationError prefix="subject" field="subject" errors={state.errors}/>

    <label htmlFor="message">Message </label>
    <textarea id="message" name="message" />
    <ValidationError prefix="Message" field="message" errors={state.errors}/>
    
    <button type="submit" disabled={state.submitting}>
        Submit
    </button>
    </form>

</div>

);};
export default Contact;