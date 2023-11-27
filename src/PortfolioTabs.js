import PortfolioItem from './PortfolioItem'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function PortfolioTabs({ items }) {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' padding={3}>
      <Grid container spacing={2} direction='row' alignItems='center' justifyContent='center' maxWidth='70%'>
        {
          items.map((item) => (
            <Grid item md>
              <PortfolioItem
                icon={item.icon}
                title={item.title}
              />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}