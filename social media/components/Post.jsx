import { MoreVert } from '@mui/icons-material'
import { Users } from '../dummyData'
import '../css/post.css'
import { useState } from 'react'

export default function Post({post}) {
  const [currentLike, setCurrentLike] = useState(post.like)
  const [alreadyLiked, setAlreadyLiked] = useState(false)

  const handleClick = () => {
    setCurrentLike(alreadyLiked ? currentLike-1 : currentLike+1)
    setAlreadyLiked(!alreadyLiked)
  }

  return (
    <div className='post'>
      <div className="post-wrapper">
        <div className="post-top">
            <div className="post-top-left">
                <img src={Users.filter((user) => user.id === post.userId)[0].profilePicture}/>
                <span className='post-username'>{Users.filter((user) => user.id === post.userId)[0].username}</span>
                <span className='post-date'>{post.date}</span>
            </div>
            <div className="post-top-right">
                <MoreVert/>
            </div>
        </div>
        <div className="post-center">
            <span className="post-text">{post.desc}</span>
            <img className='post-image' src={post.photo} alt="" />
        </div>
        <div className="post-bottom">
            <div className="post-bottom-left">
                <img className='like-icon' onClick={handleClick} src="https://th.bing.com/th/id/R.a41a3f8055380dfe10d4381f4b2d09ce?rik=njZC3%2b%2bKfEA9rg&riu=http%3a%2f%2fclipart.info%2fimages%2fccovers%2f1499793245facebook-like.png&ehk=2tsNsYF3GUAxJgikcX8FvM3qF5ShOt68SeoYOVbO3WU%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <img className='like-icon' onClick={handleClick} src="https://th.bing.com/th/id/R.e7df3c2459a4af0e9f816d811262fc36?rik=owDmGjhssKSvIQ&riu=http%3a%2f%2fwww.vectorico.com%2fdownload%2femoticon%2fFacebook-Heart.jpg&ehk=J0oKPZMruSkyWGidwnWjbp%2bve%2b3iX63jw27l5CM%2bv8M%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <span className="like-counter">{currentLike} people liked it</span>
            </div>
            <div className="post-bottom-right">
                <span className="post-comment-text">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
