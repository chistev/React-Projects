import '../css/profile.css'
import Feed from './Feed'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Profile() {
  return (
    <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img className='profile-cover-image' src='https://th.bing.com/th/id/R.50b16ffe910e1be83e0e9a00c35d5922?rik=%2fHK%2bgOYNj1MNzA&pid=ImgRaw&r=0'/>
                            <img className='profile-user-image' src='https://th.bing.com/th/id/R.c0a5b35c121061ff0d49ead4c258a991?rik=6mh0kOwSXgv7fA&pid=ImgRaw&r=0'/>
                        </div>
                        <div className="profile-info">
                            <h4>Steve</h4>
                            <span className='profile-info-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur aliquam et nostrum recusandae deserunt sequi animi, adipisci perferendis a sint ea rerum. Eius eaque repellendus, nulla est odio eos.</span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
            
        </>
  )
}
