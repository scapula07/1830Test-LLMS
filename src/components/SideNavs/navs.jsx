import {AiFillHome,AiFillSetting} from "react-icons/ai"
import {BsPersonFill} from "react-icons/bs"
import {MdPeople,MdEvent,MdGroups2,MdMessage} from "react-icons/md"
import {RiShoppingBagFill} from "react-icons/ri"
import {FaGraduationCap} from "react-icons/fa"
import {RiLogoutBoxRLine} from "react-icons/ri"

export const navs=[
    {
      icon:<AiFillHome />,
      navName:"Home",
      link:"/home"
     },
     {
        icon:<BsPersonFill />,
        navName:"My Profile",
        link:"/profile"
     },
     {
        icon:<MdPeople />,
        navName:"Connections",
        link:"/connections"
      },
      {
        icon:<MdEvent />,
        navName:"Events",
        link:"/events"
      },
      {
        icon:<MdEvent />,
        navName:"Calander",
        link:"/calander"
       },
       {
        icon:<MdGroups2 />,
        navName:"Groups",
        link:"/groups"
       },
       {
        icon:<RiShoppingBagFill />,
        navName:"Marketplace",
        link:"/marketplace"
       },
       {
        icon:<FaGraduationCap />,
        navName:"Courses",
        link:"/courses"
       },
       {
        icon:<MdMessage />,
        navName:"Messages",
        link:"/messages"
       },
       {
        icon:<AiFillSetting />,
        navName:"Settings",
        link:"/settings"
       },
       {
        icon:<RiLogoutBoxRLine />,
        navName:"Logout",
        link:"/logout"
       }
  ]