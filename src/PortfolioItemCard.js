import React from 'react'
import ReactDOM from 'react-dom'
import { Card, CardContent, CardHeader, CardActions, CardActionArea } from '@mui/material'
import { IconButton, Typography, Collapse, Chip, Grid, Avatar, Box, Paper, Grow, Divider } from '@mui/material'
import ExpandMore from './ExpandMore'
import PublicIcon from '@mui/icons-material/Public'
import GitHubIcon from '@mui/icons-material/GitHub'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CloseIcon from '@mui/icons-material/CloseRounded'

function Popup({children}) {
  return ReactDOM.createPortal(
    children,
    document.body
  )
}

export default function PortfolioItemCard({header, subheader, dates, tags, icon, website, github, overview, children}) {
  const [expanded, setExpanded] = React.useState(false)
  const [opened, setOpened] = React.useState(false)
  const [transformOrigin, setTransformOrigin] = React.useState('0 0')
  const [wrapped, setWrapped] = React.useState(false)
  const cardRef = React.useRef()
  const titleRef = React.useRef()

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleOpenClick = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const origin = `${rect.left + rect.width / 2}px ${rect.top + rect.height / 2}px`
      setTransformOrigin(origin)
    }
    setOpened(!opened)
  }

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
    <Card ref={cardRef} elevation={2}>
      <CardActionArea onClick={handleOpenClick}>
        <CardHeader
          title={
            !wrapped ?
            <Box display='flex'>
              <Typography ref={titleRef} fontFamily='bebas-neue' fontSize='30px' paddingRight={1}>{header}</Typography>
              <Divider orientation='vertical' variant='middle' color='grey.dark' flexItem />
              <Typography variant='h7' maxWidth='150px' paddingLeft={1} paddingTop={0.5} lineHeight={1.2} color='grey.main'>{subheader}</Typography>
            </Box> :
            <Box>
              <Typography ref={titleRef} fontFamily='bebas-neue' lineHeight='40px' fontSize='30px'>{header}</Typography>
              <Typography varient='h7' color='grey.main'>{subheader}</Typography>
            </Box>
          }
          subheader={
            <Typography variant='body1'>
              {`${dates.start.month} ${dates.start.year} - ${dates.end.present ? 'Present' : `${dates.end.month} ${dates.end.year}`}`}
            </Typography>
          }
          avatar={<Avatar component={Paper} elevation={1} src={icon}/>}
        />
        <CardContent>
          <Grid container direction='row' spacing={0.5} >
            {
              tags.map((tag, idx) => (
                <Grid item key={idx}>
                  <Chip label={tag} />
                </Grid>
              ))
            }
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{backgroundColor: 'grey.dark'}}>
        {website && website !== '' && 
        <IconButton href={website} target="_blank" rel="noopener noreferrer">
          <PublicIcon color='white' />
        </IconButton>}
        {github && github !== '' && 
        <IconButton href={github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon color='white' />
        </IconButton>}
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
            {overview}
          </Typography>
        </CardContent>
      </Collapse>
      <Popup >
      <Grow in={opened} style={{transformOrigin: transformOrigin}}>
        <Paper
          sx={{
            position: 'fixed',
            top: '0',
            right: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '5000',
            overflowY: 'scroll'
          }}
        >
          <IconButton
            onClick={handleOpenClick} 
            sx={{
              position: 'fixed', 
              top: '0', 
              left: '0',
              marginTop: '10px',
              marginLeft: '10px'
            }}
          >
            <CloseIcon />
          </IconButton>
          {children}
        </Paper>
      </Grow>
      </Popup>
    </Card>
  )
}