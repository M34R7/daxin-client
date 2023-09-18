//Import components
import SlickSlider from 'react-slick'

//Import styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Slider({ items }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <SlickSlider {...settings}>
      {items.map((item, index) => (
        <img
          key={item + index}
          src={item}
          alt='image'
        />
      ))}
    </SlickSlider>
  )
}
