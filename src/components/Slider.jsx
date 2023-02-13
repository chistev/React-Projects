import { useState } from 'react'
import '../css/styles.css'

const container = {
    width: '100%',
    height: '100vh',
    /*backgroundColor: 'mediumorchid',*/
    display: 'flex',
    position: 'relative',
    overflow: 'hidden'
}
const arrow = {
    width: '50px',
    height: '50px',
    backgroundColor: '#fff7f7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    left: '10px',
}

const wrapper = {
    height: '100%',
    display: 'flex',
    transform: 'translateX(-100vw)'
    
}

const slide = {
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
    height: '100vh', 
}

const imageContainer = {
    flex: '1',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
}

const image = {
    height: '80%'
}
const infoContainer = {
    flex: '1',
    padding: '50px'
}

const title = {
    fontSize: '70px'
}

const description = {
    margin: '50px 0',
    fontSize: '20',
    fontWeight: '500',
    letterSpacing: '3px'
}

const button = {
    padding: '10px',
    fontSize: '20px',
    backgroundColor: 'transparent',
    cursor: 'pointer'
}


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {

    }
    
    return (
        <div style={container}>
            <div style={arrow} onClick={() => handleClick('left')}>
                left
            </div>

            <div style={wrapper}>
                <div style={slide} className="yo">
                <div style={imageContainer}>
                    <img style={image} src='https://th.bing.com/th/id/OIP.QQox3xfdRQz_KCVochTqrgHaLJ?pid=ImgDet&rs=1'>
                        
                    </img>
                </div>
                <div style={infoContainer}>
                    <h1 style={title}>
                        Lorem, ipsum.
                    </h1>
                    <p style={description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus nesciunt.
                    </p>
                    <button style={button}>
                        Lorem, ipsum.
                    </button>
                </div>
                </div>

                <div style={slide}>
                <div style={imageContainer}>
                    <img style={image} src='https://th.bing.com/th/id/OIP.QQox3xfdRQz_KCVochTqrgHaLJ?pid=ImgDet&rs=1'>
                        
                    </img>
                </div>
                <div style={infoContainer}>
                    <h1 style={title}>
                        Lorem, ipsum.
                    </h1>
                    <p style={description}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, doloribus nesciunt.
                    </p>
                    <button style={button}>
                        Lorem, ipsum.
                    </button>
                </div>
                </div>
            </div>

            <div className='right' onClick={() => handleClick('right')}>
                right
            </div>
        </div>
    )
}

export default Slider