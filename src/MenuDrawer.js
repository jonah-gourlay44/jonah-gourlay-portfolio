import React from 'react'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Link } from 'react-router-dom'

export default function MenuDrawer({ items, color }) {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return
        }
        setIsDrawerOpen(open)
    }

    const list = (
        <Box 
            role='presentation' 
            onClick={toggleDrawer(false)} 
            onKeyDown={toggleDrawer(false)} 
            sx={{
                width: 250
            }}
        >
            <List>
                {items.map((item) => (
                    <ListItem key={item.page} disablePadding>
                        <ListItemButton LinkComponent={Link} to={item.link}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.page} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <Box sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 2,
            paddingLeft: 2,
            zIndex: 200
          }}>
            <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon color={color}/>
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {list}
            </Drawer>
        </Box>
    )
}