import React from "react"
import "./NavItem.css"

const NavItem = props => {
  return (
    <button
      disabled={props.current === props.id}
      className={"NavItem"}
      onClick={() => props.select(props.id)}
    >
      Part {props.id + 1}
    </button>
  )
}

export default NavItem
