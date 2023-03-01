import {FiBox} from "react-icons/fi";
import {useAppSelector} from "store";
import Link from "next/link";

const Logo: React.FC = () => {
  const config = useAppSelector((state) => state.config);
  const {name} = config;
  return (
    <div className="uppercase font-bold text-base tracking-wider flex flex-row items-center justify-start w-full whitespace-nowrap text-white">
      {/* <Link href="/">
        <a className="flex flex-row items-center justify-start space-x-2">
          <FiBox size={28} />
          <span>{name}</span>
        </a>
      </Link> */}
      <Link href="/">
          <a className="flex flex-row items-center justify-start space-x-2"><img src="/logos/logo_dark.png" alt="site logo" width={255} height={10}/></a>
      </Link>
      
    </div>
  );
};

export default Logo;
