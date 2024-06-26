import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Socials = () => {
return (

<div className='Socials-Container'>
  <a href="https://github.com/Fordcois"><FaGithub className="ReactIcons" title='GitHub'/></a>
  <span style={{width:'5%'}}/>
  <a href="https://www.linkedin.com/in/samueljford/"><FaLinkedin className="ReactIcons" title='Linkedin'/></a>
  <span style={{width:'5%'}}/>
  <a href="mailto:business@frdmedia.co.uk"><MdEmail className="ReactIcons" title='Email'/></a> 
</div>

);
};

export default Socials;