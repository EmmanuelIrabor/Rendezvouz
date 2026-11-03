

"use client";
import Image from "next/image"
import Link from "next/link"
import Logo from "../public/images/logo.png"
import NavbarItem from "./ui/NavBarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faBars,faGripLines,faEquals,faAngleRight,} from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./MobileMenu";

export default function NavBar() {

    return(

        <div className="flex justify-between mt-5 items-center">

            <div><Link href={'../'}><Image src={Logo} className="w-10 h-8" alt="{}"></Image></Link></div>
            <div className="hidden xl:flex gap-10 text-xs font-light ">
             
             <NavbarItem link="/about" title="About" />
            <NavbarItem link="/the-link-up" title="The-link-up" />
            <NavbarItem link="/community" title="Community" />
            <NavbarItem link="/event-calender" title="Event Calender" />
            </div>
            <div className="hidden xl:block">
                <Link href={'../'} className="link-primary text-xs py-2 px-4 font-bold rounded-full ">JOIN 200+ MEMBERS</Link>
            </div>

            <div className="xl:hidden block">
                <MobileMenu/>
            </div>

        </div>
    );
}