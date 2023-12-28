import React from 'react'
import { Box, Typography, Fade } from '@mui/material'
import CardDrawer from './CardDrawer'
import './backgrounds.css'

export default function ContentPage({header, menu, cards, meta}) {
  const [loaded, setLoaded] = React.useState(false)
  const backgroundRef = React.useRef()

  React.useEffect(() => {
    backgroundRef.current.onload = () => {
      setLoaded(true)
    }
  }, [])

  return (
    <Box sx={{
      position: 'fixed',
      overflowX: 'hidden',
      height: '100vh',
      width: '100vw'
    }}>
      <Fade in={loaded} timeout={1000}>
        <Box
          component='img'
          ref={backgroundRef}
          src={meta.background.path}
          className='background'
          id={meta.background.class}
        />
      </Fade>
      <Box 
        width='100%'
      >
        <Fade in={loaded} timeout={1000} style={{transitionDelay: 500}}>
          <Typography
            fontFamily='bebas-neue'
            right={0}
            color='red'
            textAlign='right'
            fontSize='60px'
            zIndex={5}
            position='absolute'
            marginRight={5}
            marginTop={3}
          >
            {header}
          </Typography>
        </Fade>
      </Box>
      {menu}
      <CardDrawer
        color={meta.menu_color}
        cards={cards}
        openDelay={2000}
      />
    </Box>
  )
}