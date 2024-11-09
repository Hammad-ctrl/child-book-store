import React from 'react'

const Image = ({url}) => {
  return (
    <>
        <img
                    src={url}
                    className='absolute w-56 top-[.5rem]'
                    alt="Avatar step"
                />
    </>
  )
}

export default Image