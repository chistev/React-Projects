import '../css/topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className='topbar-container'>
      <div className="topbar-left">
        <span className="logo">Chistev</span>
      </div>
      <div className="topbar-center">
        <div className="searchbar">
            <Search className='search-icon'/>
        <input type="text" placeholder='search' className="search-input" />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
            <span className="topbar-link">Homepage</span>
            <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
            <div className="topbar-icon-item">
                <Person/>
                <span className="topbar-icon-badge">1</span>
            </div>
            <div className="topbar-icon-item">
                <Chat/>
                <span className="topbar-icon-badge">1</span>
            </div>

            <div className="topbar-icon-item">
                <Notifications/>
                <span className="topbar-icon-badge">1</span>
            </div>
        </div>
        <img src="https://th.bing.com/th/id/R.0292d5cbf86ee884acaa7e4e970080c2?rik=iGlKnTdlERIEXA&pid=ImgRaw&r=0"className="topbar-image" />
      </div>
    </div>
  )
}
