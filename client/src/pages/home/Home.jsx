import React from 'react'
import Header from '../../components /header /Header'
import Posts from '../../components /posts/Posts'
import Sidebar from '../../components /sidebar/sidebar'
function Home() {
  return (
    <>
        <Header />
        <div className=' flex '>
            <Posts />
            <Sidebar />
        </div>
    </>
  )
}

export default Home