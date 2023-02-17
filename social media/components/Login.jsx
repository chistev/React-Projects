import '../css/login.css'

export default function Login() {
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
                <input type="email" className="login-input" placeholder='email' />
                <input type="password" className="login-input" placeholder='password' />
                <button className="login-button">Log In</button>
                <span className="login-forgot">Forgot Password</span>
                <button className="login-register-button">Create an account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
