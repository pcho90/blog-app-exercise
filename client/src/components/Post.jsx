import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({title, user, content, createdAt, _id}) => (
  <div>
    <span className="title"><Link to={`/posts/${_id}`} >{title}</Link></span>
    <div className="content">{content}</div>
    <div className="user">{user}</div>
    <span className="createdAt">{createdAt}</span>
  </div>
)

export default Post
