import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './Portfolio.css'
import MenuDrawer from './MenuDrawer'
import HomeIcon from '@mui/icons-material/Home'
import ScienceIcon from '@mui/icons-material/Science'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'

import HomePage from './HomePage'
import SchoolPage from './SchoolPage'
import WorkPage from './WorkPage'
import ProjectPage from './ProjectPage'

import projects from './content/projects.json'

const theme = createTheme({
  palette: {
    grey: {
      main: '#545353',
      dark: '#403f3f'
    },
    white: {
      main: '#FFFFFF'
    }
  }
})

function App() {
  const portfolio_items = [
    {
      page: 'Home',
      icon: <HomeIcon />,
      link: '/',
      component: HomePage
    },
    {
      page: 'Coursework',
      icon: <SchoolIcon />,
      link: '/coursework',
      component: SchoolPage,
      menu_color: 'white'
    },
    {
      page: 'Personal Projects',
      icon: <ScienceIcon />,
      link: '/projects',
      component: ProjectPage,
      menu_color: 'white',
      meta: projects
    },
    {
      page: 'Work Experience',
      icon: <WorkIcon />,
      link: '/experience',
      component: WorkPage,
      menu_color: 'white'
    }
  ]

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme} >
        <Router>
          <Routes>
            {
              portfolio_items.map((item, idx) => (
                <Route key={idx} path={item.link} element={<item.component meta={item.meta} menu={<MenuDrawer items={portfolio_items} color={item.menu_color}/>} />} />
              ))
            }
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;