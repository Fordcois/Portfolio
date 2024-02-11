import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Socials = () => {
return (
    <div style={{ textAlign: 'right', alignItems:'bottom'}}>
    <a href='https://github.com/Fordcois'><FaGithub className="ReactIcons" /></a>
    <a href='https://www.linkedin.com/in/samueljford/'><FaLinkedin className="ReactIcons" /></a>
    <a href='mailto:samueljamesford@googlemail.com'><MdEmail className="ReactIcons" /></a>
    </div>
);
};

export default Socials;