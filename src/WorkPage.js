import Container from '@mui/material/Container'
import background from './backgrounds/img_0099.jpg'
import { Box, Typography } from '@mui/material'
import './ProjectPage.css'

export default function WorkPage({menu}) {
  return (
    <Container sx={{
      overflowX: 'hidden',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center -1vw',
      backgroundRepeat: 'no-repeat',
      position: 'fixed',
      height: '100vh',
      minWidth: '100vw'
    }}>
      <Box className='header'>
        <Typography fontFamily='bebas-neue' right={0} color='red' fontSize='60px' textAlign='right'>
          Work Experience
        </Typography>
      </Box>
      {menu}
    </Container>
  )
}