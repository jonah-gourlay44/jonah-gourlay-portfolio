import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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

const theme = createTheme({
  palette: {
    grey: {
      main: '#545353',
    },
  }
})

function App() {
  const menu = 
    <MenuDrawer items={[
      {
        page: 'Home',
        icon: <HomeIcon />,
        link: '/jonah-portfolio'
      },
      {
        page: 'Coursework',
        icon: <SchoolIcon />,
        link: '/jonah-portfolio/coursework'
      },
      {
        page: 'Personal Projects',
        icon: <ScienceIcon />,
        link: '/jonah-portfolio/projects'
      },
      {
        page: 'Work Experience',
        icon: <WorkIcon />,
        link: '/jonah-portfolio/experience'
      }
    ]} />

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme} >
        <Router>
          <Routes>
            <Route path='/jonah-portfolio' element={<HomePage menu={menu} />} />
            <Route path='/jonah-portfolio/coursework' element={<SchoolPage menu={menu} />} />
            <Route path='/jonah-portfolio/projects' element={<ProjectPage menu={menu} />} />
            <Route path='/jonah-portfolio/experience' element={<WorkPage menu={menu} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;