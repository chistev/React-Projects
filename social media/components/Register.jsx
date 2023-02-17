import '../css/register.css'

export default function Register() {
  return (
    <div className='login'>
      <div className="login-wrapper">
        <div className="login-left">
            <h3 className="login-logo">Chistev</h3>
            <span className="login-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, veritatis.
            </span>
        </div>
        <div className="login-right">
            <div className="login-box">
                <input type="email" className="login-input" placeholder='username' />
                <input type="email" className="login-input" placeholder='email' />
                <input type="password" className="login-input" placeholder='password' />
                <input type="password" className="login-input" placeholder='password again' />
                <button className="login-button">Sign Up</button>
                <button className="login-register-button">Log into your account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
