import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer({name}) {
  return (
    <Box width='100%' display='flex' alignItems='center' justifyContent='center' paddingTop='100px'>
      <Typography variant='body2' textAlign='center' color='grey.main'>
        {`© 2023 ${name}`}
      </Typography>
    </Box>
  )
}