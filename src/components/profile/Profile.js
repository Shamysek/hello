import React from "react";
import ava from '../../img/elon.jpg'
import ava_min from '../../img/elon_mini.jpg'
import './Profile.css'

function Profile() {
    return(
      <div className='profile'>
      <div className="me">
        <img src = {ava} alt = "profile mini photo"/>
        <p>Elon Mask</p>
      </div>
      <div className="posts">
        <input placeholder = 'enter the post'/>
        <button>Add post</button>
        <div className="post">
            <img src = {ava_min} alt = "profile mini photo"/>
            <span>Elon Mask</span>
            <p>LALALA</p>
        </div>
      </div>
      </div>
    )
}

export default Profile








//Добавить в описание профиля статус, город проживания.

