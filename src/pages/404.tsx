import Link from "next/link";

const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-xl text-center">
      <img
        className="object-contain w-auto h-64 mb-8"
        src="/images/illustration.svg"
        alt="svg"
      />
      <h1 className="text-6xl text-slate-700 mb-4">404</h1>

      <div className="mb-4 text-center text-gray-900 dark:text-white">
      Niestety, poszukiwana strona nie istnieje.
      </div>
      <div className="flex w-full flex-wrap">
        <Link href="/">
          <a className="w-full m-2 px-6 py-3 text-base font-bold text-white uppercase bg-slate-700 rounded-lg hover:bg-slate-500 duration-500">
            Strona główna</a>
        </Link>
        <Link href="/information-support">
        <a className="w-full m-2 px-6 py-3 text-base text-slate-700 font-bold text-white uppercase border-2 border-slate-300 bg-slate-100 rounded-lg hover:bg-slate-300 duration-500">
            Pomoc</a>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
