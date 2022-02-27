import { Container, Switch, Typography } from '@mui/material';
import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom';
import {projects} from '../../constants/projects';
import ProjectTwo from '../ProjectTwo/ProjectTwo';

function useQuery(){
    return new URLSearchParams(useLocation().search)
}
const CommonSection = () => {
    const query = useQuery();
    const projectId = query.get('project') || 1; 
    const project = projects[projectId-1];

  return (
      <Container maxWidth='xl'>
          <Typography variant='h2'>{project.name}</Typography>
          {projectId === 2 ? <ProjectTwo/> 
          : <ProjectTwo/>}
          
      </Container>
  )
}

export default CommonSection
