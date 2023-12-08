import React from 'react'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import UpIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import DownIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import Grid from '@mui/material/Grid'
import './CardDrawer.css'

export default function CardDrawer({ color, cards }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true)
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setIsDrawerOpen(open)
  }

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
          top: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'center',
          paddingTop: 1
        }}>
          <IconButton onClick={toggleDrawer(false)}>
            <DownIcon />
          </IconButton>
        </Box>
        <Grid padding={2} spacing={2} container sx={{height: '100%'}}>
          {
            cards.map((card) => (
              <Grid item sm={6} md={4} lg={3} sx={{minHeight: '10vw'}}>
                {card}
              </Grid>
            ))
          }
        </Grid>
      </Drawer>
    </Box>
  )
}