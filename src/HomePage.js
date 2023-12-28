import React from 'react'
import background from './backgrounds/img_0047.jpg'
import profile from './backgrounds/profile.jpg'
import Signature from './Vectors'
import ScrollingPaper from './ScrollingPaper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import home_content from './content/home.json'
import Fade from '@mui/material/Fade'
import './HomePage.css'

export default function HomePage({menu}) {
  const [loaded, setLoaded] = React.useState(false)
  const backgroundRef = React.useRef()

  React.useEffect(() => {
    backgroundRef.current.onload = () => {
      setLoaded(true)
    }
  }, [])

  return (
    <Box
      height='100vh'
      width='100vw'
    >
      <Box
        width='100vw'
        height='100vh'
        position='fixed'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Fade in={loaded} timeout={1000} >
          <Box 
            component='img'
            ref={backgroundRef}
            src={background}
            height='85vh'
            zIndex={1}
            position='relative'
          />
        </Fade>
        <Fade in={loaded} timeout={1000} style={{transitionDelay: 500}}>
        <Signature className='signature'/>
        </Fade>
      </Box>
      {menu}
      <ScrollingPaper>
        <Box width='100%' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box width='70%' sx={{display: 'block', marginTop: '10%'}}>
            <Box
              width='30%'
              component='img' 
              src={profile}
              alt='Author'
              padding={2}
              className='profile'
            />
            <Typography variant='h2' padding={1} color='grey.main' fontFamily='bebas-neue'>
              A Bit About Me
            </Typography>
            <Typography variant='body1' color='grey.main' marginRight={2} marginBottom={10}>
              {home_content.about_me}
            </Typography>
          </Box>
        </Box>
      </ScrollingPaper>
    </Box>
  )
}