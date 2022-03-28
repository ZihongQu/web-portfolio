import React, { useRef,useEffect } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { Button ,Card, ButtonBase,CardContent,CardMedia,Typography, Paper, Divider, Grid, ButtonGroup, IconButton, Stepper, Step, StepLabel, StepContent} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate } from 'react-router-dom';
import {gsap,Power3} from 'gsap';
import './styles.css'; 
import {projects} from '../../constants/projects.js';
import bg from '../../assets/me.jpg';

const steps = [
  {
    label: 'PwC Acceleration Center ( Oct 2021 - present )',
    info: 'Junior Software Engineer',
    description: `Participate in the front-end & back-end development of multiple 
    projects as a full-stack developer. Support team task delivery with React,Nodejs and SQL skills. Develop with agile methodology and proper version control.
    Maintain delivered system and bug fixing.`,
  },
  {
    label: `Kersen Tech ( Jan 2021 - Sep 2021 )`,
    info: 'Software Developer Associate',
    description:
      `Participated in the development of digital image processing software with Qt, C++ & OpenCV.
      Implemented modules such as image dilation/erosion, image filter with customizable kernel, customized image view with RGB display etc. 
      `,
  },
  {
    label: 'University of South Australia ( Jan 2018 - Dec 2020 )',
    info: 'Bachelor of Infomation Technology - Software Development',
    description: `Graduated with a GPA of 6.45.`,
  },
];

const Landing = () => {
  const navigate = useNavigate();
  const parallax = useRef(null)

  useEffect(() => {
    var tl = gsap.timeline();

    tl.fromTo(".t1",{opacity:0}, {opacity:1,ease: Power3.easeIn,duration:1});
    tl.fromTo(".t2",{opacity:0}, {opacity:1,ease: Power3.easeIn,duration:1},"-=0.2");
    tl.fromTo(".subtitle",{opacity:0}, {opacity:1,ease: Power3.easeIn,duration:1},"-=0.2");
  },[])
  return (
    <div style={{margin:'3%'}}>
      <div className='bg'>
        <div style={{display:'flex',justifyContent:'end',width:'100%'}}>
          <div style={{marginTop:'2%',marginRight:'5%'}}>
            <IconButton onClick={() => window.open('https://github.com/ZihongQu')}><GitHubIcon style={{fill: 'white'}}></GitHubIcon></IconButton>
            <IconButton onClick={() => window.open('https://www.linkedin.com/in/zihong-qu-a180ab202/')}><LinkedInIcon style={{fill: 'white'}}></LinkedInIcon></IconButton>
          </div>
        </div>
        <div className='container'>
          <div className='titleSection'>
            <h2 className='t1'>Hi there, I am Zihong Qu</h2>
            <h2 className='t2'>A full stack web developer</h2>
          </div>
          <Divider style={{ margin: '20px 0', borderColor:'white'}}></Divider>
          <h4 className='subtitle'>I craft web applications </h4>
        </div>
      </div>
      <div className='row'>
        <div className="column about-me">
          <h2 style={{marginLeft:'10%'}}>About Me</h2>
          <p style={{marginRight: '10%',fontSize:'large', marginLeft:'10%'}}>I am a junior software engineer who is passionate about web development and its technologies.
          I believe in continuous self-learning and I am always on the journey of learing something new! 
          </p>
          <Stepper style={{marginLeft:'5%', marginRight:'10%',marginBottom:'5%'}} activeStep={3} orientation="vertical">
          {steps.map((step,index) => (
            <Step active = {true} key={step.label}>
              <StepLabel 
                  icon={index === 2 ? <MenuBookIcon/> :<WorkIcon/>}
                  optional={<div>{step.info}</div>}
                >{step.label}</StepLabel
                >
                <StepContent>

                <Typography variant='body1'>{step.description}</Typography>
                </StepContent>
            </Step>
          ))}
          </Stepper>
        </div>

        <div className="column pic">
          <img src={bg} style={{width:'100%'}}></img>
        </div>
      </div>

      <div className='projectSection'>
        <div className='container margin font'>
          <h1 gutterBottom style={{color:'white'}}>Personal Projects</h1>
          <Typography variant='h6' style={{color:'#dbbd7f',marginLeft:'20%',marginRight:'20%',marginTop:'3%',marginBottom:'3%'}}>I like exploring and playing around with new stuff, and have built a few personal projects in my free time</Typography>
          <Grid className='gridContainer' container spacing={1}>
            {projects.map(p => (
              <Grid item xs={12} sm={6} md={6}>
              <Card square style={{padding:'1%',height:'100%', marginLeft:'10%',marginRight:'10%'}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
                <CardMedia image={p.img} className='media' title={p.name}></CardMedia>
                <Typography style={{marginBottom:'5%'}} variant='h6'>{p.name}</Typography>  
                <Typography style={{marginBottom:'5%',marginLeft:'7%',marginRight:'7%'}}  color='textSecondary' variant='body1'>{p.content}</Typography>  
                <div style={{display:'flex',justifyContent:'space-evenly'}}>
                  {p.tags.map(t => (
                    <Typography variant='body2' color='textSecondary'>{t}</Typography>
                  ))}
                </div>
                <Button 
                  fullWidth 
                  style={{backgroundColor:'#dbbd7f', marginTop:'5%',color:"#214261"}}
                  onClick={() => window.open(p.url)}
                  >View Detail</Button>
                </div>
              </Card>        
            </Grid>
            ))}
        </Grid>
        </div>     
      </div>
      <div className='row'>
        <div className='column contactSection'>
          <div className='contact'>
            <h2 style={{padding:'2%'}}>Contact Me</h2>
              <div className='btnAlignment'>
                  <MailOutlineIcon />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;zihongqu@outlook.com</span>
              </div>  
              <div className='btnAlignment'>
                  <PhoneAndroidIcon />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;+86 18052506126</span>
              </div>
          </div>
        </div>
        <div className='column other'>
          <span>I mean, I don't bite ...</span>
        </div>
      </div>

    </div>
  )
}

export default Landing
