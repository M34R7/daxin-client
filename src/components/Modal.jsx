//Import styles
import 'styles/modal.scss'

export default function Modal({ active, setActive, children }) {
  return active ? (
    <div
      className='modal'
      onClick={() => setActive(false)}
    >
      <div
        className='content'
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  ) : null
}
