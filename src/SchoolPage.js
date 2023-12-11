import background from './backgrounds/IMG_5871.jpg'
import ContentPage from './ContentPage'

export default function SchoolPage({menu, meta}) {
  const school_meta = {
    'background': {
      'path': background,
      'class': 'boating-background'
    },
    'menu_color': 'white'
  }
  
  return (
    <ContentPage
      header='Coursework'
      menu={menu}
      meta={school_meta}
      cards={
        []
      }
    />
  )
}