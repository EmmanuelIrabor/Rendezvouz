

"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faBars,faGripLines,faEquals,faAngleRight,} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NavbarItem from "./ui/NavBarItem";

export default function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button className="text-white" variant="link"><FontAwesomeIcon icon={faEquals} /></Button>} />
      <DropdownMenuContent  className="bg-black border border-orange-400 text-white w-full py-5 px-5 xl:hidden z-50">
        {/* <DropdownMenuGroup>
          <DropdownMenuItem> <NavbarItem link="/about" title="About" /></DropdownMenuItem>
          <DropdownMenuItem><NavbarItem link="/the-link-up" title="The-link-up" /></DropdownMenuItem>
          <DropdownMenuItem><NavbarItem link="/community" title="Community" /></DropdownMenuItem>
            <DropdownMenuItem><NavbarItem link="/event-calender" title="Event Calender" /></DropdownMenuItem>
        </DropdownMenuGroup> */}
        <ul>
              
             <li><Link className="" href={''}>About</Link></li>
             <li><Link className="mt-1" href={''}>The-Link-up</Link></li>
             <li><Link className="mt-1" href={''}>Community</Link></li>
             <li><Link className="mt-1" href={''}>Event Calender</Link></li>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
