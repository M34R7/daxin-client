//Import components
import { useDispatch, useSelector } from 'react-redux'
import { getTerms } from 'store/slices/terms'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

//Import styles
import 'styles/terms.scss'

export default function Terms() {
  //Initialization variables
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  //Initialization data from server
  const terms = useSelector(state => state.termsReducer.terms)

  //Request for get terms
  useEffect(() => {
    if (!terms) {
      dispatch(getTerms(i18n.language))
    }
  }, [terms, i18n.language])

  return (
    <section className='terms'>
      <h2>Terms</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: terms?.htmlStr,
        }}
      ></div>
    </section>
  )
}
