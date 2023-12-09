import background from './backgrounds/img_0047.jpg'
import profile from './backgrounds/profile.jpg'
import Signature from './Vectors'
import Container from '@mui/material/Container'
import ScrollingPaper from './ScrollingPaper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
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
              There is no such thing as a brontosaurus. Or at least there wasn’t until 2015, when new evidence finally proved their existence. For many years, however, it was believed that the iconic brontosaurus was actually another long-necked sauropod called apatosaurus. Unforgivably, this was my favourite fact as a child. I was completely and utterly obsessed with dinosaurs. I had an entire categorized rolodex of names and facts stored in my head, just about every book on prehistoric science a kid could ever want, and a love of museums that burned deep holes in my parents pockets. This wasn’t my first strong interest, nor was it my last. Before dinosaurs, it was construction equipment and trains, after it was cars, then birds, then physics. Somewhere in between it was music and photography and many more that I won’t name here; and now it’s software. Some of these–let’s call them fascinations–were fleeting, while others stuck around. I got my degree in Engineering Physics at UBC, during which I did some gearbox design for the Formula Electric racing team, I can still name most birds you would find in a Canadian backyard (the Steller’s Jay is my personal favourite), and after school I decided to pursue a career as a software developer. This website is a tribute to my fascinations. I wrote the code by hand, all of the photographs are my own, and it heavily features the work I’ve completed during school and in my career so far. The journey from curious child to dedicated professional has been an incredible one, full of discovery and sharing. So thank you, for letting me share with you what I have been sharing since I was a kid, lecturing anyone who would listen on the “fallacy” of the brontosaurus: my love of learning.
            </Typography>
          </Box>
        </Box>
      </ScrollingPaper>
      </>
    )
}