import {React,useRef, useEffect} from 'react';
import { useSpring, animated } from 'react-spring'
import ScrollMagic from 'scrollmagic';
import v from '../../assets/Magnolia.mp4';

const ParallaxPage = () => {
    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
    const parallax = useRef(null);

    useEffect(() => {
        const a = document.querySelector('.title');
        const video = document.querySelector('#v');
        const controller = new ScrollMagic.Controller();
        const scene = new ScrollMagic.Scene({
            duration: 6000,
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
            video.currentTime = scrollpos;
        },33.3)

      });
    
  return (
    <div>
        <div className='title'>
            <h2 style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)', color:'white'}}>Exploring scroll Effect with scrollmagic.</h2>
            <video id='v' style={{width:'100%',height:'100%',objectFit:'cover'}} src={v}></video>
        </div>
        <section style={{height:'10vh',display:"flex",justifyContent:"center"}}>
            <p >Video by adege from Pixabay </p>
        </section>
    </div>
  )
}

export default ParallaxPage;
