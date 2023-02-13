import '../css/styles.css'

const container = {
    height: '60px',
}

const wrapper = {
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
}

const left = {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
}

const language = {
    fontSize: '14',
    cursor: 'pointer',
}

const searchContainier = {
    border: '0.5px solid tan',
    marginLeft: '25px',
    padding: '5px',
    display: 'flex',
}

const input = {
    border: 'none',
}

const center = {
    flex: '1',
    textAlign: 'center',
}

const logo = {
    fontWeight: 'bold',
}

const right = {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
}

const menuItem = {
    fontSize: '14px',
    cursor: 'pointer',
    marginLeft: '25px',
}



const Navbar = () => {
    return (
        <div style={container}>
            <div style={wrapper}>
                <div style={left}>
                    <div style={language}>En</div>
                    <div style={searchContainier}>
                        <input style={input}></input>
                        <div style={{color:'black', fontSize: '16px', cursor: 'pointer'}}>Search</div>
                    </div>
                    
                </div>
                <div style={center}>
                    <h1 style={logo}>CHISTEV</h1>
                </div>
                <div style={right}>
                    <div style={menuItem}>REGISTER</div>
                    <div style={menuItem}>SIGN IN</div>
                    <div style={menuItem}>0</div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar