import {AiFillHome,AiFillSetting} from "react-icons/ai"
import {BsPersonFill} from "react-icons/bs"
import {MdPeople,MdEvent,MdGroups2,MdMessage} from "react-icons/md"
import {RiShoppingBagFill} from "react-icons/ri"
import {FaGraduationCap} from "react-icons/fa"
import {RiLogoutBoxRLine} from "react-icons/ri"

export const navs=[
    {
      icon:<AiFillHome />,
      navName:"Home"
     },
     {
        icon:<BsPersonFill />,
        navName:"My Profile"
     },
     {
        icon:<MdPeople />,
        navName:"Connections"
      },
      {
        icon:<MdEvent />,
        navName:"Events"
      },
      {
        icon:<MdEvent />,
        navName:"Calander"
       },
       {
        icon:<MdGroups2 />,
        navName:"Groups"
       },
       {
        icon:<RiShoppingBagFill />,
        navName:"Marketplace"
       },
       {
        icon:<FaGraduationCap />,
        navName:"Courses"
       },
       {
        icon:<MdMessage />,
        navName:"Messages"
       },
       {
        icon:<AiFillSetting />,
        navName:"Settings"
       },
       {
        icon:<RiLogoutBoxRLine />,
        navName:"Logout"
       }
  ]