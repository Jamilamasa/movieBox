import React from 'react'

const HeroContainer = ({children}) => {
  return (
    <div className='h-[70vh] bg-showcaseImg bg-center bg-no-repeat bg-cover'>{children}</div>
  )
}

export default HeroContainer