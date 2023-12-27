import background from './backgrounds/IMG_5871.jpg'
import ContentPage from './ContentPage'
import PortfolioItemCard from './PortfolioItemCard'
import InfoPage from './InfoPage'

export default function SchoolPage({menu, meta}) {
  const school_meta = {
    'background': {
      'path': background,
      'class': 'boating-background'
    },
    'menu_color': 'white'
  }
  
  const icon_folder = `${process.env.PUBLIC_URL}/icons`

  return (
    <ContentPage
      header='Coursework'
      menu={menu}
      meta={school_meta}
      cards={
        meta.map((project, idx) => (
          <PortfolioItemCard
            header={project.title}
            subheader={project.course}
            icon={`${icon_folder}/${project.icon}`}
            dates={project.dates}
            tags={project.tags}
            github={project.github}
            website={project.website}
            overview={project.description}
            key={idx}
          >
            <InfoPage
              header={project.title}
              subheader={project.course}
              icon={`${icon_folder}/${project.icon}`}
              dates={project.dates}
              description={project.info.description}
              roles={project.info.roles}
              samples={project.info.samples}
            />
          </PortfolioItemCard>
        ))
      }
    />
  )
}