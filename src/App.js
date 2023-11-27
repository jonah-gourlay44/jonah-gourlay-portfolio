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
        link: '/jonah-gourlay-portfolio'
      },
      {
        page: 'Coursework',
        icon: <SchoolIcon />,
        link: '/jonah-gourlay-portfolio/coursework'
      },
      {
        page: 'Personal Projects',
        icon: <ScienceIcon />,
        link: '/jonah-gourlay-portfolio/projects'
      },
      {
        page: 'Work Experience',
        icon: <WorkIcon />,
        link: '/jonah-gourlay-portfolio/experience'
      }
    ]} />

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme} >
        <Router>
          <Routes>
            <Route path='/jonah-gourlay-portfolio' element={<HomePage menu={menu} />} />
            <Route path='/jonah-gourlay-portfolio/coursework' element={<SchoolPage menu={menu} />} />
            <Route path='/jonah-gourlay-portfolio/projects' element={<ProjectPage menu={menu} />} />
            <Route path='/jonah-gourlay-portfolio/experience' element={<WorkPage menu={menu} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;