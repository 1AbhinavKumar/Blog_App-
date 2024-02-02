import React from 'react'

function Write() {
  return (
    <div>
        <img src='' alt='' />
        <form>
            <div>
                <label>
                    write icon 
                </label>
                <input type='file' />
                <input placeholder='Title' type=' text' autoFocus={true} />
            </div>
        </form>
    </div>
  )
}

export default Write