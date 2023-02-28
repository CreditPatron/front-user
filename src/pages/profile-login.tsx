import {useAppSelector} from "store";
import Link from "next/link";
import Login from "components/login/login";
import Text from "components/login/text";
import Logo from "components/login/logo";
import Footer from "components/login/footer";

const Index: React.FC = () => {
  const config = useAppSelector((state) => state.config);
  const {name} = config;
  return (
      <>
        <div className="flex flex-row w-full h-screen overflow-hidden">
          <div className="relative items-start justify-between hidden w-1/2 p-8 text-white lg:flex lg:flex-col bg-login-2">
            <Logo />
            <Text />
            <Footer />
          </div>
          <div className="flex flex-col items-start justify-center w-full p-8 text-gray-900 bg-white dark:bg-gray-900 dark:text-white lg:w-1/2 lg:p-24">
            <p className="mb-2 text-2xl font-bold text-slate-700">
              Zaloguj do {name}
            </p>
            <Login />
            <div className="flex flex-row w-full mt-8">
              <span>
              <Link href="/create-account">
                <a className="text-slate-500 hover:text-slate-700">Zarejestruj się</a>
              </Link>
            </span>

            </div>
            <div className="flex flex-row w-full mt-2">
            <span>
              <Link href="/forgot-password">
                <a className="text-slate-500 hover:text-slate-700">Przypomnij hasło</a>
              </Link>
            </span>
            </div>
          </div>
        </div>
      </>
  );
};

export default Index;
