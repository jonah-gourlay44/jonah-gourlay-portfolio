import React from 'react'
import { Card, CardContent, CardMedia, CardHeader, CardActions} from '@mui/material'
import { IconButton, Typography, Collapse, Chip, Stack } from '@mui/material'
import ExpandMore from './ExpandMore'
import GitHubIcon from '@mui/icons-material/GitHub'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function ProjectCard(props) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card elevation={2}>
      <CardMedia
        component='img'
        image={props.icon}
        sx={{width: '10%', float: 'right', padding: 2}}
      />
      <CardHeader
        title={<Typography fontFamily='bebas-neue' fontSize='30px'>{props.title}</Typography>}
        subheader={
          <Stack direction='row' spacing={0.5} paddingTop={0.5} >
            {
              props.tags.map((tag, idx) => (
                <Chip label={tag} key={idx} />
              ))
            }
          </Stack>
        }
      />
      <CardActions sx={{backgroundColor: 'grey.dark'}}>
        <IconButton href={props.link} target="_blank" rel="noopener noreferrer">
          <GitHubIcon color='white' />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
        >
          <ExpandMoreIcon color='white'/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent sx={{backgroundColor: 'grey.dark'}}>
          <Typography variant='h6' color='white.main' fontFamily='bebas-neue'>
            Overview
          </Typography>
          <Typography variant='body2' color='white.main'>
            {props.children}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}