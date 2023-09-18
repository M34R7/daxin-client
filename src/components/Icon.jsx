import { IconContext } from 'react-icons'

export default function Icon({ color, size, image }) {
  return (
    <IconContext.Provider value={{ color: color, size: size }}>
      {image}
    </IconContext.Provider>
  )
}
