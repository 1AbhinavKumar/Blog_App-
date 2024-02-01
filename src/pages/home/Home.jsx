import React from 'react'
import Header from '../../header /Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/sidebar'
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