'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathName = usePathname();

  return (
    <div className="navbar">
      <Link href="/" className="logo">Apple-forum</Link>
      <Link href="/list" className={pathName === '/list' ? 'active' : ''}>List</Link>
      <Link href="/write">write</Link>
    </div>
  )
}