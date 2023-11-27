import background from './backgrounds/img_0047.jpg'
import Signature from './Vectors'
import Container from '@mui/material/Container'

export default function HomePage({menu}) {
    return (
        <Container sx={{
            backgroundImage: `url(${background})`, 
            backgroundSize: 'auto 85vh',
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            minHeight: '100vh', 
            minWidth: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex'}}
          >
            <Signature width='10vw'/>
            {menu}
          </Container>
    )
}