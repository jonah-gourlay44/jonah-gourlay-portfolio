import { Box, Typography } from '@mui/material'
import CardDrawer from './CardDrawer'
import './backgrounds.css'

export default function ContentPage({header, menu, cards, meta}) {
  return (
    <Box sx={{
      position: 'fixed',
      overflowX: 'hidden',
      height: '100vh',
      width: '100vw'
    }}>
      <Box
        component='img'
        src={meta.background.path}
        className='background'
        id={meta.background.class}
      />
      <Box 
        width='100%'
      >
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
      </Box>
      {menu}
      <CardDrawer
        color={meta.menu_color}
        cards={cards}
      />
    </Box>
  )
}