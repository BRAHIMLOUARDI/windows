import React from 'react'
import { MdOutlineArrowBack } from 'react-icons/md'
import { useHomeContext } from '../Homecontext'
function DivShadow() {
  const { isopen, setisopen, wordtraduction, contents } = useHomeContext()
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
            <div className='word-def-con' >
              <div className='traduction' >
                <h3>translation :</h3>
                <p> {wordtraduction} </p>
              </div>
              <div className='ligne-wiki'></div>
              <h2>Definition : <br /></h2>
              <div className='wiki' dangerouslySetInnerHTML={{ __html: contents }} />


            </div>
          </div>

        </div>
      }
    </>
  )

}

export default DivShadow;