import React from 'react'
import homewallpaper from "../assets/wallpaperflaper (4).jpg"
function Header() {
  return (
    <div className=' mt-40'>
       <div className=' flex flex-col items-center font-lora'>
            <span className=' absolute top-18 text-xl'> React & Node</span>
            <span className=' absolute top-20 text-8xl'> Blog </span>
       </div>
       <img className=" w-full mt-20 object-cover" src={homewallpaper} alt='' />
    </div>
  )
}

export default Header