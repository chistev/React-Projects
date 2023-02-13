import '../css/login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="login-title">LOGIN</span>
      <form className='login-form'>
        <label>Email</label>
        <input type="text" placeholder='email' />

        <label>Password</label>
        <input type="password" placeholder='password' />
        <button className="login-button">Login</button>
        <button className="register-button">REGISTER</button>
      </form>
    </div>
  )
}
