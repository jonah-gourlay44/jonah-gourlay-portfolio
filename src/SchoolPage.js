import Container from '@mui/material/Container'
import background from './backgrounds/IMG_5871.jpg'
import { Box, Typography } from '@mui/material'

export default function SchoolPage({menu}) {
  return (
    <Container sx={{
      overflowX: 'hidden',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'fixed',
      height: '100vh',
      minWidth: '100vw'
    }}>
      <Box className='header'>
        <Typography fontFamily='bebas-neue' right={0} color='red' fontSize='60px' textAlign='right'>
          Coursework
        </Typography>
      </Box>
        {menu}
    </Container>
  )
}