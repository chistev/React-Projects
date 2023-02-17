import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import '../css/share.css'

export default function Share() {
  return (
    <div className='share'>
      <div className="share-wrapper">
        <div className="share-top">
            <img src='https://th.bing.com/th/id/OIP.GnQu58I9g6FgIk_C1BL-ogHaF0?pid=ImgDet&rs=1'/>
            <input placeholder="What's on your mind?" className='share-input'/>
        </div>
        <hr/>
        <div className="share-bottom">
            <div className="share-options">
                <div className="share-option">
                    <PermMedia htmlColor='paleturquoise' className='share-icon'/>
                    <span className='share-option-text'>Photo/Video</span>
                </div>

                <div className="share-option">
                    <Label htmlColor='mediumorchid' className='share-icon'/>
                    <span className='share-option-text'>Tag</span>
                </div>

                <div className="share-option">
                    <Room htmlColor='tan' className='share-icon'/>
                    <span className='share-option-text'>Location</span>
                </div>

                <div className="share-option">
                    <EmojiEmotions htmlColor='salmon' className='share-icon'/>
                    <span className='share-option-text'>Feelings</span>
                </div>
            </div>
            <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  )
}
