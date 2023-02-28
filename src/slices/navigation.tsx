import {createSlice} from "@reduxjs/toolkit";
import {
  FiStar,
  FiHelpCircle,
  FiShoppingCart,
  FiInbox,
} from "react-icons/fi";
import { BsBagCheck, BsDoorOpen, BsQuestionCircle } from "react-icons/bs";
import { MdOutlineUnsubscribe, MdOutlinePolicy } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { RiFundsLine, RiTeamLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { TbFileInvoice } from "react-icons/tb";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { GrDocumentVerified } from "react-icons/gr";
import {AiOutlinePlayCircle, AiOutlineDashboard} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export type NavigationState = {
  title: string;
  url?: string | undefined;
  items: NavigationState[];
  icon?: React.ReactNode;
  badge?: {
    color: string;
    text: string | number;
  };
};

const initialState: NavigationState[] = [
  {
    title: "Platforma",
    items: [
      {
        url: "/platform-apply",
        icon: <RiTeamLine size={20} />,
        title: "Zawnioskuj o kredyt",
        items: [],
      },      
      {
        url: "/platform-opened",
        icon: <BsDoorOpen size={20} />,
        title: "Opened Fundings",
        items: [],
      },
      {
        url: "/platform-closed",
        icon: <BsBagCheck size={20}/>,
        title: "Closed Fundings",
        items: [],
      },
      {
        url: "/platform-how-apply",
        icon: <GrDocumentVerified size={20} />,
        title: "How to apply for funding?",
        items: [],
      },    
      {
        url: "/platform-how-fund",
        icon: <AiOutlinePlayCircle size={20} />,
        title: "How to fund startup?",
        items: [],
      },        
      {
        url: "/platform-faq",
        icon: <BsQuestionCircle size={20} />,
        title: "FAQ",
        items: [],
      },
      {
        url: "/platform-social-feed",
        icon: <RiTeamLine size={20} />,
        title: "Social feed",
        items: [],
      },       
    ]
  },
  {
    title: "(after login) Profile",
    items: [
      {
        url: "/",
        icon: <FiStar size={20} />,
        title: "Your Startups",
        items: [
          {
            url: "/profile-startup-opened",
            // icon: <FiActivity size={20} />,
            title: "Opened applications",
            items: [],
          },
          {
            url: "/profile-startup-completed",
            title: "Completed applications",
            items: [],
          },
          {
            url: "/profile-startup-incompleted",
            title: "Incompleted applications",
            items: [],
          },          
        ],
      },
      {
        url: "/",
        icon: <FiShoppingCart size={20} />,
        title: "Your Fundings",
        items: [
          {
            url: "/profile-funding-opened",
            title: "Opened fundings",
            items: [],
          },
          {
            url: "/profile-funding-completed",
            title: "Completed fundings",
            items: [],
          },
          {
            url: "/profile-funding-incompleted",
            title: "Incompleted fundings",
            items: [],
          }, 
        ],
      },
      {
        url: "/profile-invoices",
        icon: <TbFileInvoice size={20} />,
        title: "Your invoices",
        items: [],
      },
      {
        url: "/profile-inbox",
        icon: <FiInbox size={20} />,
        title: "Inbox",
        items: [],
      },
      {
        url: "/profile-info",
        icon: <CgProfile size={20} />,
        title: "Profile",
        items: [],
      },      
      
    ]
  },
  {
    title: "Information",
    items: [
      {
        url: "/information-contact",
        icon: <GrContact size={20} />,
        title: "Contact",
        items: [],
      },
      {
        url: "/information-support",
        icon: <BiSupport size={20} />,
        title: "Support",
        items: [],
      },
      {
        url: "/information-terms-of-service",
        icon: <HiOutlineDocumentDuplicate size={20} />,
        title: "Terms of service",
        items: [],
      },
      {
        url: "/information-privacy-policy",
        icon: <MdOutlinePolicy size={20} />,
        title: "Privacy Policy",
        items: [],
      },
      {
        url: "https://evigalfa.pl/",
        icon: <RiFundsLine size={20} />,
        title: "Evig Alpha",
        items: [],
      },

    ]
  },
  {
    title: "(to refactor) Admin",
    items: [
      {
        url: "/admin-business",
        icon: <AiOutlineDashboard size={20} />,
        title: "Business dashboard",
        items: [],
      },
      {
        url: "/admin-manage",
        icon: <GrDocumentVerified size={20} />,
        title: "Manage applications",
        items: [],
      }, 
    ]
  }
];

// Define the initial state using that type

export const navigationSlice = createSlice({
  name: "navigation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export default navigationSlice.reducer;
