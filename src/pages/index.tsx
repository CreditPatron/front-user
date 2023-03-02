import Widget from "components/widget";
import ApplicationsOpen from "components/applications/open";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import SectionTitle from "../components/section-title";
import Title from "components/support/title";

const CounterUp = ({ count, time }) => {
  return (
      <>
        {/* {/ <CountUp end={count} duration={3}/> /} */}
        <CountUp end={count} duration={time}>
          {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef}>count</span>
              </VisibilitySensor>
          )}
        </CountUp>
      </>
  );
}

const Index: React.FC = () => {
  return (
      <>
        <SectionTitle title="" subtitle="" />
        <Widget>
          <section className="pb-0" id="stats">
          <Title
            title="Aktywne wnioski kredytowe"
            description="Wybierz lub wyszukaj otwarty wniosek i zainwestuj"
            />
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 flex justify-center">
                <div className="hover-up-5 flex py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                  <div className="shrink-0 flex justify-center items-center bg-slate-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20 ">
                    <svg className="w-8 h-8" fill="none" stroke="#273370" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>

                  <div className="sm:py-2 sm:ml-6">
                    <span className="sm:text-2xl font-bold font-heading count">+ </span>
                    <span className="sm:text-2xl font-bold font-heading count"><CounterUp count={100} time={1} />
                                    </span>
                    {/* <span className="sm:text-2xl font-bold font-heading count">%</span> */}
                    <p className="text-xs sm:text-base text-slate-800">Otwartych wniosków</p>
                  </div>
                </div>
                <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                  <div className="shrink-0 flex justify-center items-center bg-slate-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20 ">
                    <svg className="w-8 h-8" fill="none" stroke="#273370" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z">
                      </path>
                    </svg>
                  </div>
                  <div className="sm:py-2 sm:ml-6">
                    <span className="sm:text-2xl font-bold font-heading count">+ </span>
                    <span className="sm:text-2xl font-bold font-heading count"><CounterUp count={100} time={1} />
                                    </span>
                    <span className="sm:text-2xl font-bold font-heading count"> mln PLN</span>
                    <p className="text-xs sm:text-base text-slate-800">Wartość wniosków</p>
                  </div>
                </div>
                <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                  <div className="shrink-0 flex justify-center items-center bg-slate-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20 ">
                    <svg className="w-8 h-8" fill="none" stroke="#273370" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <div className="sm:py-2 sm:ml-6">
                    <span className="sm:text-2xl font-bold font-heading count">+ </span>
                    <span className="sm:text-2xl font-bold font-heading count"><CounterUp count={100} time={1} />
                                    </span>
                    <span className="sm:text-2xl font-bold font-heading count">% </span>
                    <p className="text-xs sm:text-base text-slate-800">Zabespieczonia BFG</p>
                  </div>
                </div>                
                <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                  <div className="shrink-0 flex justify-center items-center bg-slate-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20 ">
                    <svg className="w-8 h-8" fill="none" stroke="#273370" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <div className="sm:py-2 sm:ml-6">
                    <span className="sm:text-2xl font-bold font-heading count">+ </span>
                    <span className="sm:text-2xl font-bold font-heading count"><CounterUp count={100} time={1} />
                                    </span>
                    <span className="sm:text-2xl font-bold font-heading count">% </span>
                    <p className="text-xs sm:text-base text-slate-800">Weryfikacji bankowych</p>
                  </div>
                </div>  
              </div>
            </div>
          </section>
        </Widget>
        <Widget>
          <div className="w-full">
            <ApplicationsOpen />
          </div>
        </Widget>
      </>
  );
};
export default Index;