import background from './backgrounds/img_0047.jpg'
import profile from './backgrounds/profile.jpg'
import Signature from './Vectors'
import Container from '@mui/material/Container'
import ScrollingPaper from './ScrollingPaper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import home_content from './content/home.json'
import './HomePage.css'

export default function HomePage({menu}) {
    return (
      <>
      <Container sx={{
          backgroundImage: `url(${background})`, 
          backgroundSize: 'auto 85vh',
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat', 
          height: '100vh', 
          minWidth: '100vw',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          position: 'fixed',
        }}
        >
        <Signature className='signature' />
      </Container>
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
      </>
    )
}