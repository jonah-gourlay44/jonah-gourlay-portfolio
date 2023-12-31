import React from 'react'
import { styled } from '@mui/material/styles'
import { Box, ButtonBase, Typography, Backdrop } from '@mui/material'

export default function MediaDisplayButton({thumbnail, media, title, type, description}) {
  const [opened, setOpened] = React.useState(false)

  const handleOpen = () => {
    setOpened(true)
  }

  const handleClose = () => {
    setOpened(false)
  }

  const media_types = {
    'image': 'img',
    'video': 'video',
    'file': 'iframe'
  }

  const MediaButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: '100%',
    width: '100%',
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.4
      },
      '& .MuiTypography-root': {
        opacity: 1.0
      }
    }
  }))

  const MediaBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.0,
    transition: theme.transitions.create('opacity')
  }))

  const MediaText = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    opacity: 0.0,
    zIndex: 2,
    transition: theme.transitions.create('opacity')
  }))

  const PageBackdrop = styled(Backdrop)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  }))

  return (
    <Box>
      <MediaButton
        focusRipple
        onClick={handleOpen}
      >
        <Box width='100%' component='img' src={thumbnail} />
        <MediaBackdrop className='MuiImageBackdrop-root' />
        <MediaText className='MuiTypography-root'>
          <Typography variant='h7'>
            {title}
          </Typography>
        </MediaText>
      </MediaButton>
      <PageBackdrop open={opened} onClick={handleClose}>
        <Box width='100%' height='100%' sx={{overflowY: 'scroll'}}>
          <Typography paddingTop={3} fontFamily='bebas-neue' textAlign='center' variant='h2' color='white.main'>
            {title}
          </Typography>
          <Box 
            width='65%' 
            minHeight='100px' 
            onClick={(event) => { event.stopPropagation() }}
            left={0}
            right={0}
            marginLeft='auto'
            marginRight='auto'
          >
            <Box width='100%' zIndex={1000} component={media_types[type]} src={media} controls/>
            <Typography variant='h5' fontFamily='bebas-neue' textAlign='left' color='white.main' paddingTop='10px'>
              Description
            </Typography>
            <Typography variant='body2' textAlign='left' color='white.main' paddingBottom='100px'>
              {description}
            </Typography>
          </Box>
        </Box>
      </PageBackdrop>
    </Box>
  )
}