import React from 'react'
import Post from '../post/post'


function posts({posts}) {
  return (
    <div className=' flex-9 flex flex-wrap m-5 justify-center'>
      {posts.map((post)=>(
        <Post post={post}/>
      ))}
    
    </div>
  )
}

export default posts