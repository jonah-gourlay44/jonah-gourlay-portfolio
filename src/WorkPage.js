import background from './backgrounds/img_0099.jpg'
import ContentPage from './ContentPage'
import WorkCard from './WorkCard'

export default function WorkPage({menu, meta}) {
  const work_meta = {
    'background': {
      'path': background,
      'class': 'notredame-background'
    },
    'menu_color': 'white'
  }

  return (
    <ContentPage
      header='Work Experience'
      menu={menu}
      meta={work_meta}
      cards={
        meta.map((experience, idx) => (
          <WorkCard
            company={experience.company}
            title={experience.title}
            logo={`${process.env.PUBLIC_URL}/icons/${experience.logo}`}
            dates={experience.dates}
            tags={experience.tags}
            website={experience.website}
            key={idx}
          >
            {experience.description}
          </WorkCard>
        ))
      }
    />
  )
}