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

/*Files*/
import CV from '../Files/Neloy - CV 2023.pdf'


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
    const [designs, setDesigns] = useState(false);
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
                            <p className="information">I have an experience of 2+ years in developing dynamic web-applications and static websites. I can build both frontend and backend web-applications using React.js and Django. I can also build wordpress websites on demand.</p>
                            <a href="#projects" className='btn experience-button'>Checkout Projects</a>
                        </div>

                        <div className="experience-container video-creator">
                            <MovieCreationIcon className="icon" />
                            <h4 className="title">Video-Creator</h4>
                            <p className="information">I have an experience of 3+ years in creating youtube videos. I create gameplay and tutorial videos alongside with shorts on my youtube channel. </p>
                            <a href="#projects" className='btn experience-button'>Checkout Projects</a>
                        </div>

                        <div className="experience-container graphics-designer">
                            <BrushIcon className="icon" />
                            <h4 className="title">Graphics Designer</h4>
                            <p className="information">I have an experience of 3+ years in designing logos, thumbnails, banners, business cards and websites. Checkout my designs on my pinterest profile for more details.</p>
                            <a href="#projects" className='btn experience-button'>Checkout Projects</a>
                        </div>

                        <div className="experience-container researcher">
                            <ArticleIcon className="icon" />
                            <h4 className="title">Researcher</h4>
                            <p className="information">I have an experience of 6 months working as a reasearch intern. I have published a research paper in IET Blockchain on the last year of my Bachelor's Degree. Checkout my paper provided in the projects section.</p>
                            <a href="#projects" className='btn experience-button'>Checkout Projects</a>
                        </div>

                    </div>

                </div>

                <div className="skills experience" id='skills'>

                    <h1 data-aos="fade-right" className='skills-heading experience-heading'>Skills</h1>


                    <div data-aos="fade-up" className="skill-flex-container experience-flex-container">

                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><ComputerIcon className="technical-skill-icon" /> Web (Frontend) <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>


                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />HTML</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />CSS</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Bootstrap</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Javascript</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />React.js</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Wordpress</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                </div>
                            </Collapsible>
                        </div>

                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><SettingsApplicationsIcon className="technical-skill-icon" /> Web (Backend) <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>

                                <div className="technical-skills">

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />MySQL</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Mongo</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Python</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Django</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Flask</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Perl</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Plack</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Java</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Spring</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />REST API</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Blockchain</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Solidity</h5>
                                        <p className="skill-level">Beginner</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />PHP</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Git</h5>
                                        <p className="skill-level">Professional</p>
                                    </div>

                                </div>
                            </Collapsible>
                        </div>


                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><ArticleIcon className="technical-skill-icon" /> Research / MS Office <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>

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
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Mendeley</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                    <div className="skill">
                                        <h5 className="skill-title"> <VerifiedRoundedIcon className="skill-icon" />Zotero</h5>
                                        <p className="skill-level">Intermediate</p>
                                    </div>

                                </div>
                            </Collapsible>
                        </div>


                        <div className="technical-skills-containter">
                            <Collapsible trigger={<h4 className="technical-skills-title title"><BrushIcon className="technical-skill-icon" /> Graphics (UI/UX) <ArrowDropDownCircleIcon className="dropdown-icon"/></h4>}>

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
                        <button className={`project-button btn ${all ? "selected" : ""}`} onClick={() => { setAll(true); setWebapps(false); setChannels(false); setDesigns(false); setResearches(false)}}>All</button>
                        <button className={`project-button btn ${webapps ? "selected" : ""}`} onClick={() => { setAll(false); setWebapps(true); setChannels(false); setDesigns(false); setResearches(false)}}>Web Apps</button>
                        <button className={`project-button btn ${channels ? "selected" : ""}`} onClick={() => { setAll(false); setWebapps(false); setChannels(true); setDesigns(false); setResearches(false)}}>Channels</button>
                        <button className={`project-button btn ${designs ? "selected" : ""}`} onClick={() => { setAll(false); setWebapps(false); setChannels(false); setDesigns(true); setResearches(false)}}>Designs</button>
                        <button className={`project-button btn ${researches ? "selected" : ""}`} onClick={() => { setAll(false); setWebapps(false); setChannels(false); setDesigns(false); setResearches(true)}}>Researches</button>
                    </div>

                    <div data-aos="fade-up" className="project-container container">

                        { (all == true || channels == true) &&

                        <div class="card project">
                            <img class="project-image" src={hectic10} alt="Project Image"/>
                            <div class="card-body">
                                <h5 class="card-title">HECTIC10</h5>
                                <p class="card-text">Hectic10 is a channel that focuses on gaming related content like gameplay videos, tutorials for game related problems and funny clips. This channel have an overall of 200K+ views and about 400+ subscribers.</p>
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
                                    <a className='social-media-link-a' href="https://github.com/mohdnneloy/Choice" target="_blank"><GitHubIcon size={14} className='social-media-link' /></a>
                                </div>
                            </div>
                        </div>
                        }

                        { (all == true || webapps == true) &&

                        <div class="card project">
                            <img class="project-image" src={spitrack} alt="Project Image"/>
                            <div class="card-body">
                                <h5 class="card-title">Spitrack</h5>
                                <p class="card-text">Spitrack is a web based search engine that uses crawling and scraping strategies to search some specific content out of a given cluster of URLs (Unified Resource Locator). The application is mainly focused on simplifying research strategies for researchers.</p>
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
                                <p class="card-text">Cymed is a medical service providing, web-application, that facilitates the process of scheduling appointments, generating online prescriptions, and keeping lifetime prescription records.</p>
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