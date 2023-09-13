import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import SignInBtn from './SignInBtn'



const Navbar = () => {

  return (
    <div className='flex sticky justify-between px-40 py-3'>
        {/* Icon */}
        <Logo color='white' margin={null}/>
        {/* Search Bar */}
        <SearchBar/>
        {/* Signin and option */}
        <SignInBtn/>
    </div>
  )
}

export default Navbar