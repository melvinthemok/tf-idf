import React from "react"
import "./Nav.css"

import NavItem from "./NavItem"

const Nav = props => {
  const navItems = []
  for (let i = 0; i < props.numberItems; i++) {
    navItems.push(
      <NavItem
        key={i}
        id={i}
        current={props.current}
        select={(number) => props.setCurrentItem(number)}
      />
    )
  }

  return (
    <div className="Nav">{navItems}</div>
  )
}

export default Nav
