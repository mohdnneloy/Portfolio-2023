import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Header from '../Components/Header'
import Collapsible from 'react-collapsible';
import emailjs from '@emailjs/browser';

/*CSS Content*/
import './Styles/home.css'
import './Styles/home-mobile.css'

/*Images*/
import myimage from '../Images/Neloy6.png'
import myimage2 from '../Images/Neloy5.jpg'
import hectic10 from '../Images/HECTIC10/Logo.jpg'
import choice from '../Images/Choice/Choice.png'
import spitrack from '../Images/Spitrack/Spitrack.jpg'
import cymed from '../Images/Cymed/Cymed.jpg'
import chipless_rfid from '../Images/Chipless_RFID/chipless_rfid.png'

/*Files*/
import CV from '../Files/Neloy - CV 2024.pdf'


/*Animations*/
import { TypeAnimation } from 'react-type-animation';
import Aos from "aos";
import 'aos/dist/aos.css';

/*Icons*/
import MonitorIcon from '@mui/icons-material/Monitor';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import BrushIcon from '@mui/icons-material/Brush';
import ArticleIcon from '@mui/icons-material/Article';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import ForkLeftIcon from '@mui/icons-material/ForkLeft';
import DesktopWindowsRoundedIcon from '@mui/icons-material/DesktopWindowsRounded';

/*Social Media Icons*/
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { SiBitbucket} from 'react-icons/si';
import { BsYoutube, BsFacebook} from 'react-icons/bs'; 
import { FaTiktok} from 'react-icons/fa';
import { RiInstagramFill} from 'react-icons/ri';

import PinterestIcon from '@mui/icons-material/Pinterest';


const Home = () => {

    /* Projects UseStates  */
    const [all, setAll] = useState(true);
    const [webapps, setWebapps] = useState(false);
    const [channels, setChannels] = useState(false);
    const [researches, setResearches] = useState(false);
    
    /* Contact Form Reference*/
    const form = useRef();

    /* Contact Form Function */
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
    
        emailjs.sendForm('service_4s89s8p', 'template_v6elcsd', form.current, '85CbgGPWCiWSVIi2C')
          .then((result) => {
              console.log(result.text);
              alert("Thank You! Your message has been sent!");
          }, (error) => {
              console.log(error.text);
              alert("Error! Please try again!");
          });
      };


    /*Use effect*/
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
        
            <div className="col-lg-12 col-md-12 col-sm-12">
                <Header />

                <div className="main" id='main'>


                    <div data-aos="fade-right" className="box details">
                        <h2>Welcome! I'm</h2>
                        <h2>Mohammad Nabiluzzaman Neloy</h2>

                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                1000,
                                'Gaming Video Creator',
                                2000,
                                () => {
                                    console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1.75em', display: 'inline-block', fontWeight: 500, color: '#ffff00' }}
                        />
                        <br />

                        <div className="social-media-links">
                            <a className='social-media-link-a' href="mailto: mohammadneloy11@gmail.com" target="_blank"><EmailIcon className='social-media-link' /></a>
                            <a className='social-media-link-a' href="https://www.linkedin.com/in/mohd-n-neloy/" target="_blank"><LinkedInIcon className='social-media-link' /></a>
                            <a className='social-media-link-a' href="https://github.com/mohdnneloy" target="_blank"><GitHubIcon className='social-media-link' /></a>
                            <a className='social-media-link-a' href="https://bitbucket.org/mohdnneloy/workspace/repositories" target="_blank"><SiBitbucket size={21} className='social-media-link' /></a>
                            <a className='social-media-link-a' href="https://www.pinterest.com/mohdnneloy11" target="_blank"><PinterestIcon className='social-media-link' /></a>
                        </div>

                        <a href={CV} download>
                            <button className='btn button button1' type="submit">Download CV</button>
                        </a>
                        <a href="#contact">
                        <button className='btn button button2'>Let's Talk</button>
                        </a>

                    </div>


                    <div className="box image">
                        <img data-aos="fade-up" className="right-image" src={myimage} alt="" />
                    </div>


                </div>



                <div className="about-me" id='about-me'>

                    <div data-aos="fade-up" className="box image2">
                        <img className="left-image" src={myimage2} alt="" />
                    </div>

                    <div data-aos="fade-right" className="box details2">
                        <h1 className="section-heading">About Me</h1>
                        <h4 className='section-sub-heading'>Working On A New Project? Hire Me or Let's Collaborate!</h4>
                        <p className='section-paragraph'>I'm an Software Engineer with a passion for technology and creativity. I enjoy solving complex problems and create innovative solutions through software.
                        Besides developing applications, I also like to design graphics, and make gaming, music and tutorial videos on youtube. If you have any project in mind for which my skills would be beneficial feel free to contact me.  
                        </p>
                    </div>

                </div>

                <div className="experience" id='experience'>

                    <h1 data-aos="fade-right" className='experience-heading'>Experience</h1>

                    <div data-aos="fade-up" className="experience-flex-container">

                        <div className="experience-container">
                            <MonitorIcon className="icon" />
                            <h4 className="title">Web Developer</h4>
                            <p className="information">I have an experience of 4+ years in developing dynamic web-applications and static websites. I can build both frontend and backend web-applications using React.js and Django. I can also build wordpress websites on demand.</p>
                            <a href="#projects" className='btn experience-button'>Checkout Projects</a>
                        </div>

                        <div className="experience-container video-creator">
                            <MovieCreationIcon className="icon" />
                            <h4 className="title">Video-Creator</h4>
                            <p className="information">I have an experience of 5+ years in creating youtube videos. I create gameplay and tutorial videos alongside shorts on my youtube channel. </p>
                            <a href="#projects" className='btn experience-button'>Checkout Projects</a>
                        </div>

                        <div className="experience-container graphics-designer">
                            <BrushIcon className="icon" />
                            <h4 className="title">Graphics Designer</h4>
                            <p className="information">I have an experience of 4+ years in designing logos, thumbnails, banners, business cards and websites. Checkout my designs on my pinterest profile for more details.</p>
                            <a href="#projects" className='btn experience-button'>Checkout Projects</a>
                        </div>

                        <div className="experience-container researcher">
                            <ArticleIcon className="icon" />
                            <h4 className="title">Researcher</h4>
                            <p className="information">I have an experience of 6 months working as a reasearch intern for the final year project. I have published two research papers focused on AI and Blockchain. Checkout my papers provided in the projects section.</p>
                            <a href="#projects" className='btn experience-button'>Checkout Projects</a>
                        </div>

                    </div>

                </div>

                <div className="skills experience" id='skills'>

                    <h1 data-aos="fade-right" className='skills-heading experience-heading'>Skills</h1>


                    <div data-aos="fade-up" className="skill-flex-container experience-flex-container">

                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><TerminalIcon className="technical-skill-icon" /> Technical Languages <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>


                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />HTML</h5>
                                        <p className="skill-level">Professional</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />CSS</h5>
                                        <p className="skill-level">Professional</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Javascript</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Python</h5>
                                        <p className="skill-level">Professional</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Java</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Perl</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Solidity</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />PHP</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                </div>
                            </Collapsible>
                        </div>

                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><ComputerIcon className="technical-skill-icon" /> Frontend <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>


                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />React JS</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Next JS</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Bootstrap</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Plack</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Grape JS</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>

                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><SettingsApplicationsIcon className="technical-skill-icon" /> Backend <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>


                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Django</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Flask</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />FastAPI</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Spring Boot</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Web3</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Langchain</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>

                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><SettingsApplicationsIcon className="technical-skill-icon" /> AWS Services <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>


                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />S3</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Bedrock</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />EC2</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />EMR</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Data Stream</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Firehose</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />SQS</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />SNS</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Glue</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Athena</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Lambda</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Cloudwatch</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Batch</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Even Bridge</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>

                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><StorageIcon className="technical-skill-icon" /> Database <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>


                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />MySQL</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />PostgreSQL</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />MongoDB</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />MariaDB</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />DynamoDB</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Open Search</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>

                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><DesktopWindowsRoundedIcon className="technical-skill-icon" /> Operating Systems <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>


                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Windows</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Linux</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>

                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><ForkLeftIcon className="technical-skill-icon" /> Version Control <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>


                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Git</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Github</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Gitlab</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Bitbucket</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                </div>
                            </Collapsible>
                        </div>

                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><ArticleIcon className="technical-skill-icon" /> Office Tools <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>

                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Word</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Powerpoint</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Excel</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Teams</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Jira</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Mendeley</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Zotero</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Draw IO</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                </div>
                            </Collapsible>
                        </div>

                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><BrushIcon className="technical-skill-icon" /> Graphics <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>

                                <div className="technical-skills">
                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Photoshop </h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>
                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Illustrator </h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>
                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Adobe XD </h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>


                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><LanguageIcon className="technical-skill-icon" /> Language <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>

                                <div className="technical-skills">
                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />English</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>
                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Bangla</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>
                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Hindi</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>
                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Spanish</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>


                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><MovieCreationIcon className="technical-skill-icon" /> Video Editing <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>

                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Premiere Pro </h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />After Effects </h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Filmora</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>
                                </div>
                            </Collapsible>
                        </div>


                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><LibraryMusicIcon className="technical-skill-icon" /> Music <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>

                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Guitar</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Vocals </h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Tabla</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Harmonium</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                </div>
                            </Collapsible>
                        </div>


                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title">Others <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>

                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Public Speaking</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Team Work</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Problem Solving</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                </div>
                            </Collapsible>
                        </div>

                    </div>

                </div>

                <div className="education experience" id='work-experience'>

                    <h1 data-aos="fade-right" className='education-heading experience-heading'>Work Experience</h1>

                    <div className="roadmap">

                        <div data-aos="fade-up" className="checkpoints e-box">
                            <div data-aos="fade-up" className="round"></div>
                            <div className="line"></div>
                            <div data-aos="fade-up" className="round"></div>
                            <div className="line"></div>
                            <div data-aos="fade-up" className="round"></div>
                        </div>

                        <div data-aos="fade-up" className="education-content e-box">
                            <div data-aos="fade-up" className="qualification">
                                <h5 className='qualification-title'>Jr. Software Engineer</h5>
                                <h6 className="qualification-school">Full-Time</h6>
                                <h6 className="qualification-school">W3 Engineers LTD, Dhaka, Bangladesh</h6>
                                <p className="qualification-date"><CalendarMonthIcon className="qualification-date-icon" /> August, 2023 - Present</p>
                            </div>
                            <div data-aos="fade-up" className="qualification">
                                <h5 className='qualification-title'>Intern - Software Engineer</h5>
                                <h6 className="qualification-school">Contract</h6>
                                <h6 className="qualification-school">W3 Engineers LTD, Dhaka, Bangladesh</h6>
                                <p className="qualification-date"><CalendarMonthIcon className="qualification-date-icon" /> March, 2023 - August, 2023</p>
                            </div>
                            <div data-aos="fade-up" className="qualification">
                                <h5 className='qualification-title'>Gaming Video Creator</h5>
                                <h6 className="qualification-school">Self-Employed</h6>
                                <h6 className="qualification-school">HECTIC10</h6>
                                <p className="qualification-date"><CalendarMonthIcon className="qualification-date-icon" /> November, 2018 - Present</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="education experience" id='education'>

                    <h1 data-aos="fade-right" className='education-heading experience-heading'>Education</h1>

                    <div className="roadmap">

                        <div data-aos="fade-up" className="checkpoints e-box">
                            <div data-aos="fade-up" className="round"></div>
                            <div className="line"></div>
                            <div data-aos="fade-up" className="round"></div>
                            <div className="line"></div>
                            <div data-aos="fade-up" className="round"></div>
                            <div className="line"></div>
                            <div data-aos="fade-up" className="round"></div>
                        </div>

                        <div data-aos="fade-up" className="education-content e-box">
                            <div className="qualification">
                                <h5 className='qualification-title'>B.SC Computer Science Engineering (CGPA 3.85/4.00)</h5>
                                <h6 className="qualification-school">North South University, Dhaka, Bangladesh</h6>
                                <p className="qualification-date"><CalendarMonthIcon className="qualification-date-icon" /> 2018-2023</p>
                            </div>
                            <div data-aos="fade-up" className="qualification">
                                <h5 className='qualification-title'>Senior Secondary Certificate (AISSCE 12th)</h5>
                                <h6 className="qualification-school">Daisy Dales Senior Secondary School, New Delhi, India</h6>
                                <p className="qualification-date"><CalendarMonthIcon className="qualification-date-icon" /> 2015-2017</p>
                            </div>
                            <div data-aos="fade-up" className="qualification">
                                <h5 className='qualification-title'>Secondary Certificate (AISSCE 10th)</h5>
                                <h6 className="qualification-school">Daisy Dales Senior Secondary School, New Delhi, India</h6>
                                <p className="qualification-date"><CalendarMonthIcon className="qualification-date-icon" /> 2013-2015</p>
                            </div>
                            <div data-aos="fade-up" className="qualification">
                                <h5 className='qualification-title'>Middle School</h5>
                                <h6 className="qualification-school">Colegio San Antonio, Madrid, Spain</h6>
                                <p className="qualification-date"><CalendarMonthIcon className="qualification-date-icon" /> 2005-2008</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="projects experience" id="projects">
                    <h1 data-aos="fade-right" className='experience-heading'>Projects</h1>
                    
                    <div data-aos="fade-down" className="project-selector">
                        <button className={`project-button btn ${all ? "selected" : ""}`} onClick={() => { setAll(true); setWebapps(false); setChannels(false); setResearches(false)}}>All</button>
                        <button className={`project-button btn ${webapps ? "selected" : ""}`} onClick={() => { setAll(false); setWebapps(true); setChannels(false); setResearches(false)}}>Web Apps</button>
                        <button className={`project-button btn ${channels ? "selected" : ""}`} onClick={() => { setAll(false); setWebapps(false); setChannels(true); setResearches(false)}}>Channels</button>
                        <button className={`project-button btn ${researches ? "selected" : ""}`} onClick={() => { setAll(false); setWebapps(false); setChannels(false); setResearches(true)}}>Researches</button>
                    </div>

                    <div data-aos="fade-up" className="project-container container">

                        { (all == true || channels == true) &&

                        <div class="card project">
                            <img class="project-image" src={hectic10} alt="Project Image"/>
                            <div class="card-body">
                                <h5 class="card-title">HECTIC10</h5>
                                <p class="card-text">Hectic10 is a channel that focuses on gaming related content like gameplay videos, tutorials for game related problems and funny clips. This channel have an overall of 1M+ views and about 1.3K+ subscribers.</p>
                                <div className="project-social-media-links">
                                    <a className='social-media-link-a' href="https://www.youtube.com/@HECTIC10" target="_blank"><BsYoutube size={18}  className='social-media-link' /></a>
                                    <a className='social-media-link-a' href="https://www.facebook.com/thehectic10" target="_blank"><BsFacebook size={16}  className='social-media-link' /></a>
                                    <a className='social-media-link-a' href="https://www.instagram.com/thehectic10/" target="_blank"><RiInstagramFill size={18}  className='social-media-link' /></a>
                                    <a className='social-media-link-a' href="https://www.tiktok.com/@thehectic10" target="_blank"><FaTiktok size={16} className='social-media-link' /></a>
                                </div>
                            </div>
                        </div>
                        }

                        { (all == true || webapps == true || researches == true) &&

                        <div class="card project">
                            <img class="project-image" src={choice} alt="Project Image"/>
                            <div class="card-body">
                                <h5 class="card-title">Choice</h5>
                                <p class="card-text">Choice is a remote voting system web-application based on biometric authentication, blockchain and smart contracts. The implementation paper of this project has over 700+ downloads and it is the top most downloaded paper of IET Blockchain in 2023.</p>
                                <div className="project-social-media-links">
                                    <a className='social-media-link-a' href="https://ietresearch.onlinelibrary.wiley.com/doi/10.1049/blc2.12021" target="_blank"><ArticleIcon size={14}  className='social-media-link' /></a>
                                    <a className='social-media-link-a' href="https://scholar.google.com/citations?user=aNSGbYgAAAAJ&hl=en" target="_blank"><SchoolIcon size={14} className='social-media-link' /></a>
                                </div>
                            </div>
                        </div>
                        }

                        { (all == true || webapps == true || researches == true) &&

                        <div class="card project">
                            <img class="project-image" src={chipless_rfid} alt="Project Image"/>
                            <div class="card-body">
                                <h5 class="card-title">Chipless RFID</h5>
                                <p class="card-text">This study conducts a thorough investigation of multiple deep learning techniques to enhance the detection capability of deep learning-based chipless RFID tags. It offers valuable insights for advancing chipless RFID technology.</p>
                                <div className="project-social-media-links">
                                    <a className='social-media-link-a' href="https://www.tandfonline.com/doi/full/10.1080/24751839.2023.2300223" target="_blank"><ArticleIcon size={14}  className='social-media-link' /></a>
                                    <a className='social-media-link-a' href="https://scholar.google.com/citations?user=aNSGbYgAAAAJ&hl=en" target="_blank"><SchoolIcon size={14} className='social-media-link' /></a>
                                </div>
                            </div>
                        </div>
                        }

                        { (all == true || webapps == true) &&

                        <div class="card project">
                            <img class="project-image" src={spitrack} alt="Project Image"/>
                            <div class="card-body">
                                <h5 class="card-title">Spitrack</h5>
                                <p class="card-text">Spitrack is a web-based search engine employing crawling and scraping methods to extract specific content from a cluster of URLs. It aims to streamline research strategies for researchers.</p>
                                <div className="project-social-media-links">
                                <a className='social-media-link-a' href="https://github.com/mohdnneloy/Spitrack/blob/master/Documents/CSE299_Project%20Update%205%20(Final)_Eccentrics.pdf" target="_blank"><ArticleIcon size={14}  className='social-media-link' /></a>
                                    <a className='social-media-link-a' href="https://github.com/mohdnneloy/Spitrack" target="_blank"><GitHubIcon size={14} className='social-media-link' /></a>
                                </div>
                            </div>
                        </div>
                        }

                        { (all == true || webapps == true) &&

                        <div class="card project">
                            <img class="project-image" src={cymed} alt="Project Image"/>
                            <div class="card-body">
                                <h5 class="card-title">Cymed</h5>
                                <p class="card-text">Cymed streamlines healthcare processes with appointment scheduling, online prescriptions, and lifetime record management for patients and providers.</p>
                                <div className="project-social-media-links">
                                <a className='social-media-link-a' href="https://github.com/mohdnneloy/Cymed/blob/master/Documents/CSE482L.2_Group%207_Team%20Eccentrics_Project%20Report%20Presentation.pdf" target="_blank"><ArticleIcon size={16}  className='social-media-link' /></a>
                                    <a className='social-media-link-a' href="https://github.com/mohdnneloy/Cymed" target="_blank"><GitHubIcon size={16} className='social-media-link' /></a>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                    

                </div>

                <div className="contact experience" id="contact">
                    <h1 data-aos="fade-right" className='experience-heading'>Contact Me!</h1>
                    <form data-aos="fade-up" className='container contact-form' ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Full Name" name="user_name" required/>
                        <input type= "email" placeholder="Email" name="user_email" required/>
                        <input type= "contact" placeholder="Mobile Number" name="user_contact" required/>
                        <input type="text" placeholder="Email Subject" name="user_subject" required/>
                        <textarea rows="8" placeholder="Your Message" name="user_message" required></textarea>
                        <button className='btn button contact-button' type="submit">Send Message</button>
                    </form>            
                </div>

                
            </div>                
        </>
    )
}

export default Home