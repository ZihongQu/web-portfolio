import React, { useRef,useEffect } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { Button ,Card, ButtonBase,CardContent,CardMedia,Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './styles.css'; 
import {projects} from '../../constants/projects.js';
import clouds from '../../../src/assets/cloud2.jpg';



const Landing = () => {
  const navigate = useNavigate();
  const parallax = useRef(null)
  return (
    <>
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>
      <Parallax ref={parallax} pages={5}>
        <ParallaxLayer offset={1} factor={3} speed={1} style={{ backgroundColor: '#87BCDE' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#805E73' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5}
          style={{
            backgroundImage: `url(${clouds})`,
            backgroundSize: 'cover',
            opacity:'0.5',
          }}
          >
            <figcaption style={{marginLeft:'80'}}>Photo by Oleg Magni from Pexels</figcaption>
        </ParallaxLayer>

        <div className='buttonGroup'>
          <Button><LinkedInIcon className='iconBtn' fontSize="large"></LinkedInIcon></Button>
          <Button className='btn' onClick={() => parallax.current.scrollTo(1)}>Projects</Button>  
          <Button className='btn' onClick={() => parallax.current.scrollTo(3)}>About Me</Button>  
          <Button className='btn' onClick={() => parallax.current.scrollTo(4)}>Contact</Button>  
          <Button className='btn' onClick={() => parallax.current.scrollTo(4)}>Others</Button>  
        </div>
      
      {/*  ---------------------------- page 2 & 3--------------------------- */}

        <ParallaxLayer offset={1} speed={0.1} style={{display:'flex',justifyContent:'center',color:'rgb(61, 58, 58)'}}>
           <div>PROJECTS</div>
        </ParallaxLayer>

        {projects.map((p) => (
          <ParallaxLayer offset={p.offset} speed={p.speed} style={{marginLeft:p.margin}}>
          <Card className='card' squere ='true' raised elevation={6}>
              <ButtonBase className='cardLayout' onClick={() => navigate(`/project${p.id}`)}>
                <CardMedia style={{marginTop:'5%'}} image={p.img} title={p.name}></CardMedia>
                  <div>
                      <Typography variant='h6'>{p.name}</Typography>
                  </div>
       
                  <CardContent>
                      <Typography variant='body2' component='p'>{p.content}</Typography>
                  </CardContent>
                  <div className='tag'>
                    {p.tags?.map(t => (
                      <span>{t}</span>
                    ))}
                  </div>
                </ButtonBase>
            </Card> 
          </ParallaxLayer>
        ))}

        {/*-------------------------------page 4 ------------------------------  */}
        <ParallaxLayer offset={3} speed={-0.1} style={{display:'flex',justifyContent:'center',color:'rgb(61, 58, 58)'}}>
            <Typography variant='h5'>ABOUT ME</Typography>
        </ParallaxLayer>

        <ParallaxLayer offset={3.1} speed={0.2} style={{display:'flex',justifyContent:'center'}}>
          <Typography variant='body1' component='p'>
                  Having graduated from the University of South Australia in Dec 2020, I now work as a full
                  stack developer at PwC Acceleration Center.
            </Typography>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={-0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <div className='title'>Hello, I am ZIHONG QU</div>           
        </ParallaxLayer>
      
      </Parallax>
    </div>
    </>
  )
}

export default Landing
