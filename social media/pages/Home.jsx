import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Rightbar from '../components/Rightbar'
import '../css/home.css'


const Home = ({profile}) => {
    return (

        <>
            <Topbar/>
            <div className="home-container">
                <Sidebar/>
                <Feed />
                <Rightbar/>
            </div>
            
        </>
        
    )
}

export default Home