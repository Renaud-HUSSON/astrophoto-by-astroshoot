import { useState } from 'react'
import PrimaryNav from '../Nav/PrimaryNav'
import SecondaryNav from '../Nav/SecondaryNav'
import { useCallback } from 'react'

const Nav = () => {
  //States
  const [nav, setNav] = useState(false)
  const [primaryNav, setPrimaryNav] = useState(false)
  
  //Closes or opens the secondary nav based on the previous nav state
  const handleNav = useCallback(() => {
    setNav(nav => !nav)
  }, [setNav])
  
  //Closes both primary (on small devices) and secondary nav 
  const closeNav = () => {
    setNav(false)
    setPrimaryNav(false)
  }

  return <nav>
    <PrimaryNav handleNav={handleNav} primaryNav={primaryNav} setPrimaryNav={setPrimaryNav} closeNav={closeNav}/>
    <SecondaryNav nav={nav} handleNav={handleNav} closeNav={closeNav}/>
  </nav>
}

export default Nav