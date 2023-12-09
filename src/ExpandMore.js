import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'

export default function ExpandMore(props) {
    const { expand, ...other } = props
    const theme = useTheme()

    return (
        <IconButton {...other} sx={{
            transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest
            })
        }} />
    )
}