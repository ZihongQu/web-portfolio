import { Paper, Typography } from '@mui/material';
import React from 'react'
import {projects} from '../../constants/projects';
import bg from '../../assets/theatre.jpg';

const ProjectTwo = () => {
    const project = projects[1];

  return (
      <>
       <Paper variant="elevation">
        <div>
            <img src={bg} style={{width:'100%'}} title/>
            <figcaption style={{marginLeft:'85%'}}>Photo by Ryan from Pexels</figcaption>
        </div>
        <div style={{textAlign: 'center'}}>
            <Typography variant='h2'>Breakdown of {project.name}</Typography>
            <Typography style={{marginTop: '7%'}} variant='body1' component='p'>
                
            </Typography>
        </div>
        </Paper>
        </>
  )
}

export default ProjectTwo
