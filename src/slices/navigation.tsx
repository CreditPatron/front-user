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
        title: "Aktywne wnioski",
        items: [],
      },
      {
        url: "/platform-closed",
        icon: <BsBagCheck size={20}/>,
        title: "Zamknięte wnioski",
        items: [],
      },
      {
        url: "/platform-how-apply",
        icon: <GrDocumentVerified size={20} />,
        title: "Jak otrzymać kredyt?",
        items: [],
      },    
      {
        url: "/platform-how-fund",
        icon: <AiOutlinePlayCircle size={20} />,
        title: "Jak inwestować?",
        items: [],
      },        
      {
        url: "/platform-faq",
        icon: <BsQuestionCircle size={20} />,
        title: "Pytania",
        items: [],
      },     
    ]
  },
  {
    title: "(po zalogowaniu) Profil",
    items: [
      {
        url: "/",
        icon: <FiStar size={20} />,
        title: "Twoje wnioski",
        items: [
          {
            url: "/profile-startup-opened",
            // icon: <FiActivity size={20} />,
            title: "Otwarte wnioski",
            items: [],
          },
          {
            url: "/profile-startup-completed",
            title: "Zamknięte wnioski",
            items: [],
          },
          {
            url: "/profile-startup-incompleted",
            title: "Udzielone kredyty",
            items: [],
          },          
        ],
      },
      {
        url: "/",
        icon: <FiShoppingCart size={20} />,
        title: "Twoje inwestycje",
        items: [
          {
            url: "/profile-funding-opened",
            title: "Otwarte inwestycje",
            items: [],
          },
          {
            url: "/profile-funding-completed",
            title: "Zamknięte inwestycje",
            items: [],
          },
          {
            url: "/profile-invoices",
            title: "Twoje przychody",
            items: [],
          },
        ],
      },
      {
        url: "/profile-inbox",
        icon: <FiInbox size={20} />,
        title: "Wiadomości",
        items: [],
      },
      {
        url: "/profile-info",
        icon: <CgProfile size={20} />,
        title: "Profil",
        items: [],
      },      
      
    ]
  },
  {
    title: "Informacja",
    items: [
      {
        url: "/information-contact",
        icon: <GrContact size={20} />,
        title: "Kontakt",
        items: [],
      },
      {
        url: "/information-support",
        icon: <BiSupport size={20} />,
        title: "Pomoc",
        items: [],
      },
      {
        url: "/information-terms-of-service",
        icon: <HiOutlineDocumentDuplicate size={20} />,
        title: "Zasady użytkowania",
        items: [],
      },
      {
        url: "/information-privacy-policy",
        icon: <MdOutlinePolicy size={20} />,
        title: "Polityka prywatności",
        items: [],
      },
      {
        url: "https://creditpatron.pl/",
        icon: <RiFundsLine size={20} />,
        title: "Credit Patron",
        items: [],
      },

    ]
  },
];

// Define the initial state using that type

export const navigationSlice = createSlice({
  name: "navigation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export default navigationSlice.reducer;
