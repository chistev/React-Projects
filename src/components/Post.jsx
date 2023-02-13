import '../css/post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className='post-image' src='https://th.bing.com/th/id/OIP.co5ys87GyGRBioqKPb-zDgHaE8?pid=ImgDet&rs=1'></img>
        <div className="post-info">
            <div className="post-categories">
                <span className="post-category">Music</span>
                <span className="post-category">Life</span>
            </div>
            <span className="post-title">Lorem ipsum dolor sit amet.</span>
            <hr></hr>
            <span className="post-date">1 hour ago</span>
        </div>
        <p className='post-description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod officiis error sit maxime reprehenderit
             tempore numquam nostrum aut explicabo, incidunt ex, corporis assumenda quasi eos enim eaque sed dolores 
             delectus!
        </p>
    </div>
  )
}
