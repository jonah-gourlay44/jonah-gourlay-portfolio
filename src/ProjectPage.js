import Container from '@mui/material/Container'
import CardDrawer from './CardDrawer'
import background from './backgrounds/zermatt_img_0034.jpg'
import ProjectCard from './ProjectCard'
import './ProjectPage.css'
import { useMediaQuery } from '@mui/material'

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
      {menu}
      <CardDrawer 
        color='white'
        cards={
          meta.map((project) => (
            <ProjectCard title={project.title} link={project.link}>
              {project.description}
            </ProjectCard>
          ))
        }
      />
    </Container>
  )
}