"use client"
import React from 'react'
import styles from './navLink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const NavLink = ({item}) => {
    const pathname=usePathname()
  return (
    
      <Link className={`${styles.container} ${pathname===item.path && styles.active}`} href={item.path}>{item.title }</Link>

  )
}

export default NavLink
