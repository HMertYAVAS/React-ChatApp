import React,{useState} from 'react'
import './ChatList.css'

export default function ChatList() {
  const [addMode,setAddMode] = useState(false)
  return (
    <div className='chatList'>
      <div className='search'>
      <div className='searchBar'>
        <img src="search.png" alt="" />
        <input type="text" placeholder='Search' />
      </div>
      <img 
      className='add' 
      onClick={() => setAddMode((prev) => !prev)} 
      src={addMode ? "minus.png" : "plus.png"} />
      </div>
      
      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Mert YAVAS</span>
          <p>text</p>
        </div>
      </div>
      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Mert YAVAS</span>
          <p>text</p>
        </div>
      </div>
      <div className="item">
        <img src="avatar.png" alt="" />
        <div className="texts">
          <span>Mert YAVAS</span>
          <p>text</p>
        </div>
      </div>
    


    </div>
  )
}
