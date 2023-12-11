import background from './backgrounds/zermatt_img_0034.jpg'
import ProjectCard from './ProjectCard'
import ContentPage from './ContentPage'

export default function ProjectPage({menu, meta}) {
  const project_meta = {
    'background': {
      'path': background,
      'class': 'matterhorn-background'
    },
    'menu_color': 'white'
  }

  return (
    <ContentPage
      header='Personal Projects'
      menu={menu}
      meta={project_meta}
      cards={
        meta.map((project, idx) => (
          <ProjectCard
            title={project.title}
            link={project.link}
            icon={`${process.env.PUBLIC_URL}/icons/${project.icon}`}
            tags={project.tags}
            key={idx}
          >
            {project.description}
          </ProjectCard>
        ))
      }
    />
  )
}