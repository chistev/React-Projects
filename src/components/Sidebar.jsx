import '../css/sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-item">
        <span className='sidebar-title'>ABOUT ME</span>
        <img src='https://th.bing.com/th/id/OIP.TxSqreeTVPIRoeAPz_07wwHaGE?pid=ImgDet&rs=1'></img>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quos nostrum culpa ad.</p>
      </div>
      <div className='sidebar-item'>
        <span className='sidebar-title'>CATEGORIES</span>
        <ul className="sidebar-list">
            <li className="sidebar-list-item">Life</li>
            <li className="sidebar-list-item">Music</li>
            <li className="sidebar-list-item">Style</li>
            <li className="sidebar-list-item">Sport</li>
            <li className="sidebar-list-item">Tech</li>
            <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className='sidebar-title'>FOLLOW US</span>
        <div className="sidebar-social">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>

        </div>
      </div>
    </div>
  )
}
