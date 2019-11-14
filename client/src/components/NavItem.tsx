import React from "react"
import "./NavItem.css"

type NavItemProps = {
  id: number,
  current: number,
  select: ((id: number) => void)
}

const NavItem = (props: NavItemProps) => {
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
