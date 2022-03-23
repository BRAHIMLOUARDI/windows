import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'

function DivShadow(props) {
  const { setisopen, word, targetlanguge } = props
  return (
    <div className='cardparent'>
      <div className='divShadow'>

        <div className='lignediv'>
          <a className="return" onClick={() => setisopen(false)}>
            <MdOutlineArrowBack className='mdk' />
          </a>
        </div>
        <div>
        </div>
      </div>

    </div>
  )

}

export default DivShadow;