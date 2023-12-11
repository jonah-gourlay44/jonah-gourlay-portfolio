import background from './backgrounds/img_0099.jpg'
import ContentPage from './ContentPage'

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
        []
      }
    />
  )
}