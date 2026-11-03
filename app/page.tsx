"use client";
import Image from "next/image";
import Logo from "../public/images/logo.png"
import cohort from "../public/images/cohort.jpg"
import NavBar from "@/components/NavBar";
import GradientBox from "@/components/GradientBox";
import BlinkingDot from "@/components/ui/BlinkingDot";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBars , faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {ArrowUpRightIcon , BroadcastIcon} from "@phosphor-icons/react";

export default function Loader(){

 

  return (
    <>
      {/* <Image src={Logo} className="" alt="{}"></Image> */}
        <GradientBox className="-mx-5 xl:-mx-10 px-5 xl:px-10 h-full">
      <NavBar/>

       <div className="top-box -mx-5 xl:-mx-10 px-5 xl:px-10 mt-5 py-2 flex justify-between items-center">
  <div className="flex gap-4 items-center">
    <div className="flex gap-1 items-center">
      <BlinkingDot height="h-2" width="w-2" color="bg-orange" />
      <p className="text-xss text-orange font-semibold">COHORT 08 APPLICATIONS OPEN</p>
    </div>
    <p className="text-xss text-gray-two hidden md:block">Next Curated Gathering London Oct 24</p>
  </div>
  <div className="hidden md:flex items-center gap-5">
    <p className="text-xss text-gray-two">CURATION RATE: 7.2%</p>
    <p className="text-xss text-gray-two">EST. 2026</p>
  </div>
</div>

    
      

     
       
         <section className="hero mt-5">
         <div className="flex flex-col xl:flex-row items-center justify-between">
            <div className="w-full xl:w-3/5 ">
             <div className="flex items-center gap-2">
              <div className="border border-gray-400 rounded-full p-2 font-montserrat-alt text-xss font-bold">
                CULTURAL SALON AND VENTURE INCUBATOR

              </div>
              <div>
                <p className="text-xss  text-gray-two">GLOBAL CHAPTER NETWORK</p>
              </div>
             </div>
                    <h1 className="xl:text-7xl text-2xl font-montserrat-alt uppercase font-extrabold mt-5">where creative culture meets collective ambition</h1>
        <p className=" mt-2 text-gray-two">Rendezvous is a curated lunchpad of 200+ managers, creatives and visionary founders across global industries. We turn social serendipity into ventures , creative works , and purposful growth.</p>

        <div className="flex gap-4 items-center mt-5">
 <Link href={'/'} className="px-5 py-2 link-primary rounded-full text-xss md:text-xs font-bold">JOIN 200+ MEMBERS</Link>
  <Link href={'/'} className="px-5 py-2 link-secondary rounded-full font-bold flex items-center gap-1  text-xss md:text-xs">EXPLORE CALENDER  <ArrowUpRightIcon size={10} /></Link>
        </div>
            </div>
             <div className="w-full xl:w-2/5 h-screen flex flex-col items-center xl:justify-center">
  <div className="hero-banner w-70 h-80 py-4 px-2 mt-10 xl:mt-0">
    <div className="flex items-center justify-end">
      <div className="rounded-full text-xss py-2 px-3 border bg-black opacity-80 font-bold">VOL.IV / SALON 19</div>
    </div>

     <div className="w-full h-65 flex flex-col justify-end">
       <p className="mt-5 font-extrabold text-xss text-gray-two ">NEXT ASSEMBLAGE</p>
     
       <div className="flex items-center justify-between">

           <p className="font-montserrat-alt font-bold">The Sound & Form Salon</p>

            <BroadcastIcon size={20} />

       </div>


    </div>

   
  </div>

  <div className="mt-5 bg-black-two border border-gray-500  w-70 py-3 px-3 flex justify-between items-center">

    <div className="flex items-center gap-0">
      <div className="rounded-full p-2 h-6 w-6 flex items-center justify-center text-xss font-bold border bg-black-three border-gray-600">
         NY
      </div>
        <div className="-mx-2 rounded-full p-2 h-6 w-6 flex items-center justify-center text-xss font-bold border bg-black-three border-gray-600">
         LDN
      </div>
         <div className="-mx-1 rounded-full p-2 h-6 w-6 flex items-center justify-center text-xss font-bold border bg-black-three border-gray-600">
         BER
      </div>
        <div className="-mx-2 rounded-full p-2 h-6 w-6 flex items-center justify-center text-xss font-bold border bg-black-three text-orange border-orange-400">
         TYO
      </div>
    </div>
    
    <p className="text-xss font-semibold text-gray-two">GLOBAL GUILD CHAPTERS</p></div>
</div>

          
            
         </div>
       
     
       

      </section>
       </GradientBox>
    </>
  );
}