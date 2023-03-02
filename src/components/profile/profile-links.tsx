import Link from "next/link";
import {FiMail, FiStar, FiUser, FiLogIn, FiInbox, FiLogOut} from "react-icons/fi";
import {AiOutlineAppstoreAdd} from "react-icons/ai";
import {TbFileInvoice} from "react-icons/tb";
import {CgProfile} from "react-icons/cg";

export type ItemProps = {
  url: string;
  icon: React.ReactNode;
  iconColor?: string;
  name: string;
  badge?: {
    number: number;
    color: string;
  };
};

const ProfileLinks: React.FC = () => {
  const items: ItemProps[] = [
    {
      url: "/profile-invoices",
      icon: <AiOutlineAppstoreAdd size={20} />,
      iconColor: "bg-sky-600",
      name: "Wnioski kredytowe",
      badge: {
        number: 1,
        color: "bg-sky-600 text-white",
      },      
    },
    {
      url: "/profile-invoices",
      icon: <TbFileInvoice size={20} />,
      name: "Inwestycje",
      badge: {
        number: 2,
        color: "bg-teal-600 text-white",
      },  
    },
    {
      url: "/profile-inbox",
      icon: <FiInbox size={20} />,
      name: "Wiadomości",
      badge: {
        number: 2,
        color: "bg-slate-500 text-white",
      },
    },
    {
      url: "/profile-info",
      icon: <CgProfile size={20} />,
      name: "Profil",
    },
    {
      url: "/profile-registration",
      icon: <FiLogIn size={20} className="stroke-current" />,
      name: "Rejestracja",
    },
    {
      url: "/profile-login",
      icon: <FiLogIn size={20} className="stroke-current" />,
      name: "Zaloguj",
    },
    {
      url: "/profile-logout",
      icon: <FiLogOut size={20} className="stroke-current" />,
      name: "Wyloguj",
    },
  ];

  return (
      <div className="flex flex-col w-full">
        <ul className="list-none">
          {items.map((item, i) => (
              <li key={i}>
                <Link href={item.url}>
                  <a className="flex flex-row items-center justify-start w-full h-10 px-2 text-gray-900 bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    {item.icon}
                    <span className="mx-2">{item.name}</span>
                    {item.badge && (
                        <span
                            className={`uppercase font-bold inline-flex text-center p-0 leading-none text-xs h-4 w-4 inline-flex items-center justify-center rounded-full ${item.badge.color} ml-auto`}>
                    {item.badge.number}
                  </span>
                    )}
                  </a>
                </Link>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default ProfileLinks;
