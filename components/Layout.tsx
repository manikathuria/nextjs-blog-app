import React, { Children } from 'react'
import Header from './Header'

const Layout = (props: {children:any,}) => {
  return (
    <>
      <Header></Header>
      {props.children}
    </>
  )
}

export default Layout