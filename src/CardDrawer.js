import React from 'react'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import UpIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import DownIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import Grid from '@mui/material/Grid'
import './CardDrawer.css'

export default function CardDrawer({ color, cards, openDelay }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setIsDrawerOpen(open)
  }

  if (openDelay === undefined) {
    openDelay = 0
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsDrawerOpen(true)
    }, openDelay)

    return () => clearTimeout(timer)
  }, [openDelay])

  return (
    <Box sx={{
      position: 'fixed',
      display: 'flex',
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      zIndex: 200
    }}>
      <IconButton onClick={toggleDrawer(true)}>
        <UpIcon color={color} />
      </IconButton>
      <Drawer variant='persistent' anchor='bottom' open={isDrawerOpen} onClose={toggleDrawer(false)} hideBackdrop PaperProps={{className: 'drawer-paper'}}>
        <Box sx={{
          display: 'flex',
          left: 0,
          right: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'center',
          paddingTop: '1px',
          position: 'fixed',
          zIndex: 200
        }}>
          <IconButton onClick={toggleDrawer(false)}>
            <DownIcon />
          </IconButton>
        </Box>
        <Grid padding={2} paddingTop={4} spacing={2} container sx={{height: '100%'}}>
          {
            cards.map((card, idx) => (
              <Grid item sm={6} md={4} lg={3} sx={{minHeight: '10vw'}} key={idx}>
                {card}
              </Grid>
            ))
          }
        </Grid>
      </Drawer>
    </Box>
  )
}