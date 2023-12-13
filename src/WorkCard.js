import React from 'react'
import { Card, CardContent, CardHeader, CardActions, CardActionArea } from '@mui/material'
import { IconButton, Typography, Collapse, Chip, Grid, Avatar, Box } from '@mui/material'
import ExpandMore from './ExpandMore'
import PublicIcon from '@mui/icons-material/Public'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function WorkCard({company, title, dates, tags, logo, website, children}) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  
  return (
    <Card elevation={2}>
      <CardActionArea>
        <CardHeader
          title={
            <Box display='flex'>
              <Typography fontFamily='bebas-neue' fontSize='30px'>{company}|</Typography>
              <Typography variant='h7' maxWidth='150px'>{title}</Typography>
            </Box>
          }
          subheader={
            <Typography variant='body1'>
              {`${dates.start.month} ${dates.start.year} - ${dates.end.present ? 'Present' : `${dates.end.month} ${dates.end.year}`}`}
            </Typography>
          }
          avatar={<Avatar src={logo}/>}
        />
        <CardContent>
          <Grid container direction='row' spacing={0.5} >
            {
              tags.map((tag, idx) => (
                <Grid item >
                  <Chip label={tag} key={idx} />
                </Grid>
              ))
            }
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{backgroundColor: 'grey.dark'}}>
        <IconButton href={website} target="_blank" rel="noopener noreferrer">
          <PublicIcon color='white' />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon color='white' />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent sx={{backgroundColor: 'grey.dark'}}>
          <Typography variant='h6' color='white.main' fontFamily='bebas-neue'>
            Overview
          </Typography>
          <Typography variant='body2' color='white.main'>
            {children}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}