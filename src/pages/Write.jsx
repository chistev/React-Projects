import '../css/write.css'

export default function Write() {
  return (
    <div className='write'>
        <img className='write-image' src='https://th.bing.com/th/id/R.e9cac015b0f27556db4f25134769a68f?rik=h8CzsWyTJm5r7A&pid=ImgRaw&r=0'></img>
      <form className='write-form'>
        <div className='write-form-group'>
            <label htmlFor='file-input'>
                <i className='fa-solid fa-plus'></i>
            </label>
            <input type='file' id='file-input' style={{display:'none'}}></input>  
            <input type='text' placeholder='Title' className='write-input' autoFocus={true}></input>  
        </div>
        <div className="write-form-group">
            <textarea placeholder="What's on your mind?" type='text' className='write-input write-text'></textarea>
        </div>
        <div className='submit-wrapper'>
            <button className='write-submit'>Publish</button>
        </div>
           
      </form>
    </div>
  )
}
