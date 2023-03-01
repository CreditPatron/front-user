import {useAppSelector} from "store";

const Text: React.FC = () => {
  const config = useAppSelector((state) => state.config);
  const {name} = config;
  return (
    <div className="flex flex-col pb-80">
      {/* <p className="mb-4 text-3xl text-slate-800 font-bold">Witaj w {name}!</p>
      <p className="text-lg  text-slate-700 font-thin">
      Przystępny kredyt, bezpieczna inwestycja.
      </p> */}
      {/* <h2 className="m-2 text-2xl text-slate-800 lg:text-3xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn ">
          Przystępny <span className="text-sky-600">kredyt,</span> <br />
          bezpieczna <span className="text-teal-600">inwestycja.</span>
      </h2> */}
    </div>
  );
};
export default Text;
