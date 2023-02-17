import '../css/feed.css'
import Post from './Post'
import Share from './Share'
import { Posts } from '../dummyData'

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Share/>
        {Posts.map(post=>(
          <Post key={post.id} post={post}/>
        ))}
        
      </div>
    </div>
  )
}
