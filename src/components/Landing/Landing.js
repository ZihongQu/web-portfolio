import React, { useRef,useEffect } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { Button ,Card, ButtonBase,CardContent,CardMedia,Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import gsap from 'gsap';
import './styles.css'; 
import {projects} from '../../constants/projects.js';
import clouds from '../../../src/assets/clouds.jpg';



const Landing = () => {

  // useEffect(() => {
  //   gsap.from(
  //     ".title", {
  //       opacity: 0,
  //       delay: 1,
  //       duration: 3,
  //       ease: "power3.easeOut"
  //     }
  //  )
  //},[])
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
        </ParallaxLayer>
{/* 
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={"url('../../a.jpg')"} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={"url('../../a.jpg')"} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={4.5}
          speed={-0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={big} style={{ width: '60%' }} />
        </ParallaxLayer> */}

        <div className='buttonGroup'>
          <Button><LinkedInIcon className='iconBtn' fontSize="large"></LinkedInIcon></Button>
          <Button className='btn' onClick={() => parallax.current.scrollTo(1)}>Projects</Button>  
          <Button className='btn' onClick={() => parallax.current.scrollTo(3)}>Technologies</Button>  
          <Button className='btn' onClick={() => parallax.current.scrollTo(4)}>About Me</Button>  
          <Button className='btn' onClick={() => parallax.current.scrollTo(4)}>Contact</Button>  
        </div>
      
      {/*  ---------------------------- page 2 & 3--------------------------- */}

        <ParallaxLayer offset={1} speed={0.1} style={{display:'flex',justifyContent:'center',color:'rgb(61, 58, 58)'}}>
           <div>PROJECTS</div>
        </ParallaxLayer>

        {projects.map((p) => (
          <ParallaxLayer offset={p.offset} speed={p.speed} style={{marginLeft:p.margin}}>
          <Card className='card' squere ='true' raised elevation={6}>
              <ButtonBase className='cardLayout' onClick={() => console.log('open blog triggered')}>
                <CardMedia image={p.img} title={p.name}></CardMedia>
                  <div>
                      <Typography variant='h6'>{p.name}</Typography>
                  </div>
                  <Typography variant='body2' color='textSecondary'>{p.tags?.map(t => `#${t}`)}</Typography>
                  <CardContent>
                      <Typography variant='body2' component='p'>{p.content}</Typography>
                  </CardContent>
                </ButtonBase>
            </Card> 
          </ParallaxLayer>
        ))}

        {/*-------------------------------page 4 ------------------------------  */}
        <ParallaxLayer offset={3} speed={0.1} style={{display:'flex',justifyContent:'center',color:'rgb(61, 58, 58)'}}>
           <div>Technologies</div>
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
