import {React,useRef, useEffect} from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring'
import ScrollMagic from 'scrollmagic';
import clouds from '../../../src/assets/cloud2.jpg';
import { Typography } from '@mui/material';
import v from '../../assets/zi.mp4';

const ParallaxPage = () => {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    const parallax = useRef(null);

    useEffect(() => {
        const a = document.querySelector('.title');
        const video = document.querySelector('#v');
        console.log('v',video)
        const controller = new ScrollMagic.Controller();
        const scene = new ScrollMagic.Scene({
            duration: 9000,
            triggerElement: a,
            triggerHook: 0
        })
        .setPin(a)
        .addTo(controller);

        const acceleration = 0.2;
        let scrollpos = 0;
        let delay = 0;

        scene.on('update', e => {
            scrollpos = e.scrollPos/1000;
        })

        setInterval(() => {
            delay += (scrollpos-delay) * acceleration;
            video.currentTime = delay;
        },33.3)

      });
    
  return (
    <div>
        <div className='title'>
            <h2 style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)', color:'white'}}>Meet the crazy-smart women we asked.</h2>
            <video id='v' style={{width:'100%',height:'100%',objectFit:'cover'}} src={v}></video>
        </div>
        <section style={{height:'100vh'}}>
            <h2>sfdsdf</h2>
        </section>
        {/* <Parallax ref ={parallax} pages={3}>
            <ParallaxLayer offset={1} factor={1} speed={1} style={{ backgroundColor: '#87BCDE' }} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#805E73' }} />

            <ParallaxLayer
                offset={0}
                speed={0}
                factor={3}
                style={{
                    backgroundImage: `url(${clouds})`,
                    backgroundSize: 'cover',
                    opacity:'0.5',
                }}
            >
            </ParallaxLayer>

            <ParallaxLayer offset={0.3} speed={0.2} style={{display:'flex', justifyContent:'center'}}>
                <Typography variant='h2'>Parallax Effect</Typography>
            </ParallaxLayer>

            <ParallaxLayer offset={0.4} speed={-0.1} style={{display:'flex', justifyContent:'center'}}>
            <div>
                    <Typography variat='h6'>
                        A Journey To Learn
                    </Typography>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.5} speed={-0.1} style={{display:'flex', justifyContent:'center'}}>
                <div>
                    <Typography variat='body1' style={{marginLeft:'20%',marginRight:'20%', backgroundColor:'grey', padding:'5%'}}>
                        I have seen many cool websites using parallax effects and have always wondered how they did that.
                        So I decided to document my learning of this effect here. 
                        Parallax effect creates an illusion of depth by moving different elements at different speeds and directions.

                    </Typography>
                </div>
            </ParallaxLayer>
            <animated.div style={props}>I will fade in</animated.div>
        </Parallax> */}
    </div>
  )
}

export default ParallaxPage
