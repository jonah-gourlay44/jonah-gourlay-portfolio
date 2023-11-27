import Container from '@mui/material/Container'

export default function ProjectPage({menu}) {
    return (
        <Container sx={{
            minWidth: '100vw',
            minHeight: '100vh'
        }}>
            {menu}
        </Container>
    )
}