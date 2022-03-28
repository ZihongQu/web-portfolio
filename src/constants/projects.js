import mn from '../assets/projectCover/mn.png';
import scrollImg from '../assets/projectCover/scrollImg.png';

export const projects = [
    {
        id: 1,
        name: 'Scroll Effect',
        content: 'Inspired by the visual effects on Apple website. I wanted to recreate the scroll effect using scrollmagic',
        img: scrollImg,
        tags: ['ScrollMagic'],
        url: 'http://localhost:3000/project3'
    },
    {
        id:2,
        offset: 2.2,
        margin: '37.5%',
        speed: -0.1,
        name: 'Movie Nights App',
        content: 'Movie-Nights is a full stack application that allows users to post their recommendations/thoughts about movies. Users can create their own posts or like/comment on other people\'s posts.',
        img: mn,
        tags: ['MongoDB','Node','Express','React', 'React-Redux'],
        url: 'https://movie-nights.netlify.app'
    }
]