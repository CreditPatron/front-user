import Head from "next/head";
import {useAppSelector} from "store";
import Navbar1 from "components/navbar";
import LeftSidebar from "components/left-sidebar";
import RightSidebar from "components/right-sidebar";

export type Layout1Props = {
  children: React.ReactNode;
};

const DefaultLayout: React.FC<Layout1Props> = ({children}) => {
  const config = useAppSelector((state) => state.config);
  const {background, layout, collapsed} = config;

  return (
    <>
      <Head>
        <title>Login Credit Patron</title>
        <link rel="shortcut icon" href="/icons/favicon.png"/>
      </Head>
      <div
        data-layout={layout}
        data-collapsed={collapsed}
        data-background={background}
        className={`font-sans antialiased text-sm disable-scrollbars ${
          background === "dark" ? "dark" : ""
        }`}>
        <RightSidebar />
        <div className="wrapper">
          <LeftSidebar />
          <div className="main w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
            <Navbar1 />
            <div className="w-full min-h-screen p-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DefaultLayout;
