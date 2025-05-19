import BriefInfo from '../components/briefInfo'
import { computers } from '../data'

export default function Home() {


  return (
    <div>
      {Object.values(computers).map((item, index) => {
        return(
          <BriefInfo key={item.name} img={item.images[0]} title={item.name} />
        )
      })}
    </div>
  )
}
