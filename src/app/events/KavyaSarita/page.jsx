import { eventData } from '@council/constants'
import SecBranchHome from '@council/components/helper/SecHomePage'

const KavyaSarita = () => {
  const { img, content } = eventData.kavyaSarita
  return <SecBranchHome content={content} img={img} />
}

export default KavyaSarita
