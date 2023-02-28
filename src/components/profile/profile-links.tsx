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
      url: "/profile-fundings",
      icon: <AiOutlineAppstoreAdd size={20} />,
      name: "Funding's",
    },
    {
      url: "/profile-invoices",
      icon: <TbFileInvoice size={20} />,
      name: "Invoices",
    },
    {
      url: "/profile-inbox",
      icon: <FiInbox size={20} />,
      name: "Inbox",
      badge: {
        number: 2,
        color: "bg-red-500 text-white",
      },
    },
    {
      url: "/profile-info",
      icon: <CgProfile size={20} />,
      name: "Profile",
    },
    {
      url: "/profile-registration",
      icon: <FiLogIn size={20} className="stroke-current" />,
      name: "Registration",
    },
    {
      url: "/profile-login",
      icon: <FiLogIn size={20} className="stroke-current" />,
      name: "Login",
    },
    {
      url: "/profile-logout",
      icon: <FiLogOut size={20} className="stroke-current" />,
      name: "Logout",
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
