import React from "react"
import "./Nav.css"

import NavItem from "./NavItem"

type NavProps = {
  numberItems: number,
  current: number,
  setCurrentItem: ((n: number) => void)
}

const Nav = (props: NavProps) => {
  const navItems = []
  for (let i = 0; i < props.numberItems; i++) {
    navItems.push(
      <NavItem
        key={i}
        id={i}
        current={props.current}
        select={(n: number) => props.setCurrentItem(n)}
      />
    )
  }

  return (
    <div className="Nav">{navItems}</div>
  )
}

export default Nav
