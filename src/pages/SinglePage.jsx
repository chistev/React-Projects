import Sidebar from '../components/Sidebar'
import SinglePost from '../components/SinglePost'
import '../css/singlepage.css'

export default function SinglePage() {
  return (
    <div className='single-page'>
      <SinglePost/>
      <Sidebar/>
    </div>
  )
}
