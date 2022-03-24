import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import { useHomeContext } from '../Homecontext'
function DivShadow() {
  const { isopen, setisopen, wordtraduction } = useHomeContext()
  return (
    <>
      {isopen &&


        <div className='cardparent'>
          <div className='divShadow'>

            <div className='lignediv'>
              <a className="return" onClick={() => setisopen(false)}>
                <MdOutlineArrowBack className='mdk' />
              </a>
            </div>
            <div>
              <h2>word translation :</h2>
              <p>{wordtraduction}
              </p>

            </div>
          </div>

        </div>
      }
    </>
  )

}

export default DivShadow;