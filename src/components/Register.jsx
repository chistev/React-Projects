import '../css/register.css'


export default function Register() {
  return (
    <div className='register'>
        <span className="register-title">REGISTER</span>
      <form className='register-form'>

      <label>Username</label>
        <input type="text" placeholder='username' />

        <label>Email</label>
        <input type="email" placeholder='email' />

        <label>Password</label>
        <input type="password" placeholder='password' />

        <label>Password</label>
        <input type="password" placeholder='re-enter password' />

        <button className="register-button">REGISTER</button>
        <button className="login-button">LOGIN</button>
      </form>
    </div>
  )
}
