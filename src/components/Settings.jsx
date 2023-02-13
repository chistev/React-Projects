import Sidebar from './Sidebar'
import '../css/settings.css'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settings-wrapper">
        <div className="settings-title">
            <span className="settings-update-title">Update Your Account</span>
            <span className="settings-delete-title">Delete Your Account</span>
        </div>
        <form className="settings-form">
            <label>Profile Picture</label>
            <div className="settings-profile-picture">
                <img src='https://th.bing.com/th/id/OIP.xdmvl8uAdtjyIaTtkiyZ2AHaLH?pid=ImgDet&rs=1'></img>
                <label htmlFor='file-input'>
                     <i class="fa-solid fa-user"></i>
                </label>
                <input type='file' id='file-input' style={{display:'none'}}></input>
            </div>
            <label>Username</label>
            <input type='text' placeholder='Stephen'></input>

            <label>Email</label>
            <input type='email' placeholder='stephen@gmail.com'></input>

            <label>Password</label>
            <input type='password' placeholder='enter password'></input>

            <button className='settings-submit'>Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
