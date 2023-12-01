import background from './backgrounds/img_0047.jpg'
import profile from './backgrounds/profile.jpg'
import Signature from './Vectors'
import Container from '@mui/material/Container'
import ScrollingPaper from './ScrollingPaper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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
        <Signature width='10vw'/>
      </Container>
      {menu}
      <ScrollingPaper>
        <Box width='100%' height='100%' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box width='70%' display='block' >
            <Box
                width='30%'
                component='img' 
                src={profile}
                alt='Author'
                padding={2}
                style={{float: 'right'}}
                />
            <Typography variant='h2' padding={1} color='grey.main'>
              A Bit About Me
            </Typography>
            <Typography variant='body1' color='grey.main' marginRight={2}>
              There is no such thing as a brontosaurus. Or at least there wasn’t until 2015, when new evidence proved their existence once and for all. For many years, however, it was believed that the brontosaurus was actually another long-necked sauropod called apatosaurus. Unforgivably, this was my favourite fact as a child. I was completely and utterly obsessed with dinosaurs. I had an entire categorized rolodex of names and facts stored in my head, just about every book on prehistoric science a kid could ever want, and a love of museums that burned deep holes in my parents pockets. This wasn’t my first strong interest, nor was it my last. Before dinosaurs, it was construction equipment and trains, after it was cars, then birds, then physics. Somewhere in between it was music and photography, and many more that I won’t name here; and now it’s software. Some of these–let’s call them fascinations–were fleeting, while others stuck around. I got my degree in Engineering Physics, during which I did some gearbox design for the Formula Electric racing team. I can still name most birds you would find in a Canadian backyard (the Steller’s Jay is my personal favourite), and after school I decided to pursue a career as a software developer. This website is an homage to my fascinations. A place where I can share the interests that keep me up at night, which have fueled my passion and imagination since I was a young boy, lecturing anyone who would listen on the “fallacy” of the brontosaurus.
            </Typography>
          </Box>
        </Box>
      </ScrollingPaper>
      </>
    )
}