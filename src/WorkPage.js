import background from './backgrounds/img_0099.jpg'
import ContentPage from './ContentPage'
import PortfolioItemCard from './PortfolioItemCard'
import InfoPage from './InfoPage'

export default function WorkPage({menu, meta}) {
  const work_meta = {
    'background': {
      'path': background,
      'class': 'notredame-background'
    },
    'menu_color': 'white'
  }

  const icon_folder = `${process.env.PUBLIC_URL}/icons`

  return (
    <ContentPage
      header='Work Experience'
      menu={menu}
      meta={work_meta}
      cards={
        meta.map((experience, idx) => (
          <PortfolioItemCard
            header={experience.company}
            subheader={experience.title}
            icon={`${icon_folder}/${experience.logo}`}
            dates={experience.dates}
            tags={experience.tags}
            website={experience.website}
            key={idx}
            overview={experience.description}
          >
            <InfoPage
              header={experience.company}
              subheader={experience.title}
              icon={`${icon_folder}/${experience.logo}`}
              dates={experience.dates}
              description={experience.info.description}
              roles={experience.info.roles}
              samples={experience.info.samples}
            />
          </PortfolioItemCard>
        ))
      }
    />
  )
}