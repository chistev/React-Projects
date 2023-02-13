import '../css/topbar.css'

export default function Topbar() {
  return (
    <div className='top'>
        <div className='top-left'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
        </div>
        <div className='top-center'>
            <ul className='top-list'>
                <li className='top-list-item'>HOME</li>
                <li className='top-list-item'>ABOUT</li>
                <li className='top-list-item'>CONTACT</li>
                <li className='top-list-item'>WRITE</li>
                <li className='top-list-item'>LOGOUT</li>
            </ul>
        </div>
        <div className='top-right'>
            <img className='top-image' src='https://th.bing.com/th/id/OIP.J5F1X2UWHwJ-ZDmNye8-fwHaKf?pid=ImgDet&rs=1'></img>
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
