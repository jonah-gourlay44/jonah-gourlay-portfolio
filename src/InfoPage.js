import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Box, Typography, Divider, Avatar, Paper, Grid, ImageList, ImageListItem } from '@mui/material'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreRounded'
import MediaDisplayButton from './MediaDisplayButton'

export default function InfoPage({header, subheader, icon, dates, description, roles, samples}) {
  const large_screen = useMediaQuery('(min-width: 600px)')
  const [wrapped, setWrapped] = React.useState(false)
  const titleRef = React.useRef()

  React.useEffect(() => {
    const element = titleRef.current
    if (element) {
      const originalHeight = element.clientHeight
      element.style.whiteSpace = "nowrap"
      const nowrapHeight = element.clientHeight
      element.style.whiteSpace = ""

      setWrapped(originalHeight > nowrapHeight)
    }
  }, [])
  
  return (
    <Box width='100%' display='flex' justifyContent='center'>
      <Box width='65vw' sx={{paddingTop: '40px'}}>
        <Box display={large_screen ? 'flex' : 'block'}>
          <Box display={wrapped && !large_screen ? 'block' : 'flex'}>
            <Typography ref={titleRef} variant={wrapped ? 'h2' : 'h1'} fontFamily='bebas-neue' lineHeight='80%' paddingRight={large_screen ? '40px' : '30px'}>
              {header}
            </Typography>
            <Avatar component={Paper} elevation={1} src={icon} sx={{width: '70px', height: '70px', marginBottom: '10px', marginTop: 'auto'}}/>
          </Box>
          <Typography width='100%' variant='h6' textAlign={large_screen ? 'right' : 'left'} fontFamily='bebas-neue' color='grey.main' marginTop='auto' marginBottom={0}>
            {subheader}
          </Typography>
        </Box>
        <Divider orientation='horizontal' variant='fullWidth' />
        <Typography variant='body1' fontFamily='bebas-neue' width='100%' textAlign='right'>
          {`${dates.start.month} ${dates.start.year} - ${dates.end.present ? 'Present' : `${dates.end.month} ${dates.end.year}`}`}
        </Typography>
        <Grid container paddingTop='40px' spacing={2}>
          <Grid item sm={12} lg={5}>
            <Typography variant='h4' fontFamily='bebas-neue' color='grey.dark'>
              Description
            </Typography>
            <Typography variant='body2' color='grey.main'>
              {description} 
            </Typography>
          </Grid>
          <Grid item sm={12} lg={7}>
            <Typography variant='h4' fontFamily='bebas-neue' color='grey.dark'>
              Key Roles
            </Typography>
            {
              roles.map((role, idx) => (
                <Accordion key={idx}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant='body1' color='grey.main'>
                      {role.summary}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant='body2' color='grey.main'>
                      {role.details}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            }
          </Grid>
        </Grid>
        <Typography variant='h4' fontFamily='bebas-neue' color='grey.dark' paddingTop='20px'>
          {samples.length === 0 ? '' : 'Work Samples'}
        </Typography>
        <ImageList variant='masonry' cols={3} gap={8}>
          {
            samples.map((sample, idx) => (
              <ImageListItem key={idx}>
                <MediaDisplayButton 
                  media={`${process.env.PUBLIC_URL}/media/${sample.media}`}
                  title={sample.title}
                  thumbnail={`${process.env.PUBLIC_URL}/media/${sample.thumbnail}`}
                  type={sample.type}
                />
              </ImageListItem>
            ))
          }
        </ImageList>
        <Box height='100px'/>
      </Box>
    </Box>
  ) 
}