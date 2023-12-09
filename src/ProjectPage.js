import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CardDrawer from './CardDrawer'
import background from './backgrounds/zermatt_img_0034.jpg'
import ProjectCard from './ProjectCard'
import './ProjectPage.css'
import { useMediaQuery } from '@mui/material'
import Typography from '@mui/material/Typography'

export default function ProjectPage({menu, meta}) {
    const phone = useMediaQuery('(max-width: 500px)')
    const background_pos = phone ? '-10vw' : 'center'

  return (
    <Container sx={{
      overflowX: 'hidden',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: {background_pos},
      backgroundRepeat: 'no-repeat',
      position: 'fixed',
      height: '100vh',
      minWidth: '100vw'
    }}>
      <Box className='header'>
        <Typography fontFamily='bebas-neue' right={0} color='red' fontSize='60px' textAlign='right'>
          Personal Projects
        </Typography>
      </Box>
      {menu}
      <CardDrawer 
        color='white'
        cards={
          meta.map((project) => (
            <ProjectCard 
              title={project.title} 
              link={project.link} 
              icon={`${process.env.PUBLIC_URL}/icons/${project.icon}`}
              tags={project.tags}
            >
              {project.description}
            </ProjectCard>
          ))
        }
      />
    </Container>
  )
}