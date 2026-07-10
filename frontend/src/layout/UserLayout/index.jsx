import NavBarComponent from '@/components/Navbar'
import React from 'react'

function UserLayout({children}) {
  return (
    <div>
      <NavBarComponent />
      <div>{children}</div>
    </div>
  )
}

export default UserLayout
