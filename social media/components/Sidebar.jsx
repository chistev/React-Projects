import { Bookmark, Cases, Chat, Event, Group, QuestionMarkSharp, RssFeed, School, VideoLabel } from '@mui/icons-material'
import '../css/sidebar.css'
import { Users } from '../dummyData'
import Closefriend from './Closefriend'


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <RssFeed className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Feed</span>
          </li>

          <li className="sidebar-list-item">
            <Chat className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Chats</span>
          </li>

          <li className="sidebar-list-item">
            <VideoLabel className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Videos</span>
          </li>

          <li className="sidebar-list-item">
            <Group className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Groups</span>
          </li>

          <li className="sidebar-list-item">
            <Bookmark className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Bookmarks</span>
          </li>

          <li className="sidebar-list-item">
            <QuestionMarkSharp className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Questions</span>
          </li>

          <li className="sidebar-list-item">
            <Cases className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Jobs</span>
          </li>

          <li className="sidebar-list-item">
            <Event className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Events</span>
          </li>

          <li className="sidebar-list-item">
            <School className='sidebar-icon'/>
            <span className="sidebar-list-item-text">Courses</span>
          </li>
        </ul>
        <button className='sidebar-button'>Show More</button>
        <hr/>
        <ul className="sidebar-friendlist">
            {Users.map(user=>(
              <Closefriend key={user.id} user={user}/>
            ))}
        </ul>
      </div>
    </div>
  )
}
