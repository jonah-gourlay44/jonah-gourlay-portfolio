import './App.css'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'

export default function ScrollingPaper(props) {
    return (
        <Box className='scrolling-container' >
            <Paper className='scrolling-paper' elevation={10}>
                {props.children}
            </Paper>
        </Box>
    )
}