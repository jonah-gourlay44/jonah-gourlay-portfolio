import { Card, CardContent, CardActionArea, Typography } from '@mui/material'

export default function ProjectCard(props) {
    return (
        <Card>
            <CardActionArea href={props.link} target="_blank" rel="noopener noreferrer">
                <CardContent>
                    <Typography variant='h4' color='grey.dark'>
                        {props.title}
                    </Typography>
                    <Typography variant='body2' color='grey.main'>
                        {props.children}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}