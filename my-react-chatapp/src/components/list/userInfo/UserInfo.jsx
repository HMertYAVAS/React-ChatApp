import React from 'react'
import './UserInfo.css'

export default function UserInfo() {
  return (
    <div className='userInfo'>
      <div className='user'>
        <img src="avatar.png" alt="" />
        <h2>H. Mert YAVAS</h2>
      </div>
      <div className='icons'>
        <img src="video.png" alt="" />
        <img src="edit.png" alt="" />
        <img src="more.png" alt="" />
      </div>
    </div>
  )
}
