import React, {useState} from "react";
import StarRating from "components/star-rating";
import items from "json/applications-open.json";
import {formatCurrency} from "functions/numbers";
import {FiChevronsLeft, FiChevronsRight} from "react-icons/fi";
import {ProgressBarWithText} from "../progress-bars";
import {AiOutlineDownCircle} from "react-icons/ai";
import {Badge} from "../badges";

const formatPolish = (value) => {
  return formatCurrency(value.toLocaleString("pl-PL", {
    style: "currency",
    currency: "PLN",
  }));
};
// const formattedValue = formatCurrency(value.toLocaleString("pl-PL", {
//   style: "currency",
//   currency: "PLN",
// }));

export type CampaignItem = {
  id: number,
  title: string,
  stars: number,
  description: string,
  fullDescription: string,
  category: string,
  sum: number,
  dueDate: string,
  img: string,
  progress: number
  topics: string[]
}

const Campaign: React.FC<CampaignItem> = ({
                                            id,
                                            application_id,
                                            application_date_start,
                                            application_date_end,
                                            application_days_left,
                                            patron_score,
                                            household_monthly_income_gross,
                                            household_monthly_income_nett,
                                            household_nr_people,
                                            household_credits_value_open,
                                            household_credits_value_paid,
                                            household_monthly_cost,
                                            mortgage_value,
                                            mortgage_place,
                                            mortgage_province,
                                            mortgage_city,
                                            mortgage_details,
                                            mortgage_type,
                                            credit_target,
                                            credit_value,
                                            credit_collected,
                                            credit_term,
                                            credit_equity,
                                            credit_rates,
                                            credit_rate_estimated,
                                            user_proffession,
                                            user_education,
                                            user_civilstatus,
                                            title,
                                            description,
                                            fullDescription,
                                            category,
                                            sum,
                                            dueDate,
                                            img,
                                            progress,
                                            topics
                                          }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  return (


      <div key={id} className="w-full flex flex-col justify-center gap-4">
        
        <div className="p-4 pt-4 gap-3 flex flex-wrap max-w-[1400px] rounded-lg bg-transparent shadow-lg border-2 border-slate-200 justify-center">

          <div className="lg:flex-shrink rounded-lg bg-slate-50 ">
              <div className="p-4 m-2 w-20 lg:w-32 h-22 lg:h-36 w-full rounded-lg ">
                <img src={img} alt="media" className=""/>
              </div>
          </div>

          <div className="shrink-0 lg:flex-none text-left truncate text-sm lg:text-base text-slate-800">
          <p className="pb-1 text-base text-slate-900 lg:text-base">Id wniosku: <b>{application_id}</b></p>

            <p className="pb-1 text-sm text-slate-700 lg:text-base font-bold">{mortgage_type}</p>
            <p>{mortgage_details}</p>
            <p>{mortgage_place}</p>
            <p>{mortgage_city}, {mortgage_province}</p>
          </div>

          <div className="shrink-0 lg:flex-1 bg-white  border-lg">
            <StarRating initialRating={patron_score} numberOfStars={5} />
            <p className="pb-1 text-sm text-slate-700 lg:text-base font-bold">Kredytobiorca:</p>
            <div className="shrink-0 lg:flex-1 flex flex-row  border-lg">
                <div className="pr-2 shrink-0 flex flex-col truncate text-right text-sm lg:text-base font-bold border-slate-200 border-r-2">
                  <p>{user_proffession}</p>
                  <p>{user_education}</p>
                  <p>{user_civilstatus}</p>
                </div>
                <div className="pl-2 shrink-0 flex flex-col rounded-lg truncate text-left text-sm lg:text-base text-slate-700">
                  <p>Zawód</p>
                  <p>Wykształcenie</p>
                  <p>Stan cywilny</p>
                </div>
            </div>
          </div>


          <div className="shrink-0 lg:flex-1 bg-white  border-lg">
            <ProgressBarWithText width={100-100*credit_equity/mortgage_value} color={`${progress < 75 ? "bg-sky-600" : "bg-sky-500"}`}/>
            <p className="pb-1 text-sm text-slate-700 lg:text-base font-bold">Kredyt:</p>
            <div className="shrink-0 lg:flex-1 flex flex-row  border-lg">
                <div className="pr-2 shrink-0 flex flex-col truncate text-right text-sm lg:text-base font-bold border-slate-200 border-r-2">
                  <p>{formatCurrency(mortgage_value).slice(1)} zł</p>
                  <p>{formatCurrency(credit_value).slice(1)} zł</p>
                  <p>{formatCurrency(credit_equity).slice(1)} zł</p>
                </div>
                <div className="pl-2 shrink-0 flex flex-col rounded-lg truncate text-left text-sm lg:text-base text-slate-700">
                  <p>Wartość hipoteki</p>
                  <p>Wartość kredytu</p>
                  <p>Wkład własny</p>
                </div>
            </div>
          </div>

          <div className="shrink-0 lg:flex-1 border-lg">
            <ProgressBarWithText width={100-100*credit_collected/credit_value} color={`${progress < 75 ? "bg-teal-600" : "bg-teal-500"}`}/>

            <p className="pb-1 text-sm text-slate-700 lg:text-base font-bold">Inwestycja:</p>
            <div className="shrink-0 lg:flex-1  flex flex-row  border-lg">
                <div className="pr-2 shrink-0 flex flex-col truncate text-right text-sm lg:text-base font-bold border-slate-200 border-r-2">
                  <p>{formatCurrency(credit_collected).slice(1)} zł</p>
                  <p>{credit_term} lat</p>
                  <p>{credit_rates}</p>
                  <p>{credit_rate_estimated}%</p>
                </div>
                <div className="pl-2 shrink-0 flex flex-col truncate text-left text-sm lg:text-base text-slate-700">
                  <p>Dostępna inwestycja</p>
                  <p>Czas kredytu</p>
                  <p>Oprocentowanie</p>
                  <p>Oczekiwane RRSO</p>
                </div>
            </div>
          </div>

          <div className="lg:flex-none  ">
          <p className="pb-1 text-sm text-slate-700 lg:text-base font-bold">Pozostało: <b>{application_days_left} dni</b></p>
            <div className="w-full text-sm lg:text-lg font-medium uppercase grid grid-cols-2 lg:grid-cols-1 flex">
              <a>
                <p className="m-2 p-2 text-slate-50 bg-teal-700 hover:bg-teal-500 rounded-lg duration-1000">
                ZAINWESTUJ
                </p>
              </a>
              <a onClick={() => setHidden(!hidden)}>
                <p className="m-2 p-2 text-slate-700 bg-slate-50 hover:bg-slate-200 border-2 border-slate-300 rounded-lg duration-1000" >
                  Szczegóły
                </p>
              </a>
            </div>
          </div>

          <div className={`prose prose-sm max-w-none py-3 px-2 w-full text-gray-900 dark:text-white ${hidden ? "hidden" : "block"}`}>
            <b>Szczegóły:</b>
            <div className="flex flex-wrap items-center justify-start space-x-1 pt-1">
              {topics.map((topic, i) => (
                  <div key={i} className=" flex flex-wrap items-start justify-start">
                    <Badge
                        size='lg'
                        color="bg-slate-50 m-1 text-slate-900"
                        rounded>
                      {topic}
                    </Badge>
                  </div>
              ))}
            </div>
            <div className='pt-2'>
            {fullDescription}
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-start space-x-1 pt-1 gap-1">
              <a href={`/campaigns/${id}`}>
                <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-sky-700 rounded-lg hover:bg-sky-600 duration-500 min-w-[100px]">
                Symulacja
                </button>
              </a>
              <a href={`/campaigns/${id}`}>
              <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-sky-700 rounded-lg hover:bg-sky-600 duration-500 min-w-[100px]">
                Komentarze
                </button>
              </a>
              <button className="p-2 text-xs font-bold text-white uppercase bg-sky-700 rounded-lg hover:bg-sky-600 duration-500 min-w-[100px]">
                Załączniki
              </button>
              <button className="p-2 text-sm font-bold text-white uppercase bg-sky-700 rounded-lg hover:bg-sky-600 duration-500 min-w-[100px]">
                Link2
              </button>
            </div>
            <div className="pt-4 flex flex-wrap items-center justify-end text-sm lg:text-lg font-medium uppercase">
              <a onClick={() => setHidden(!hidden)}>
                <div className="m-2 p-2 text-slate-700 bg-slate-50 hover:bg-slate-200 border-2 border-slate-300 rounded-lg duration-1000" >
                  Zamknij
                </div>
              </a>
            </div>
            
          </div>

        </div>

      </div>
  );
}

const Numbers: React.FC = () => (
    <>
      {Array.from(Array(4).keys()).map((i) => {
        if (i === 2) {
          return (
              <button key={i} className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-white uppercase bg-blue-900 rounded-full hover:bg-blue-600 ">
                {i + 1}
              </button>
          );
        }
        return (
            <button key={i} className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-gray-900 uppercase rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ">
              {i + 1}
            </button>
        );
      })}
    </>
);

const Rows: React.FC = () => {
  return (
    <div className="w-full space-y-4">
      {items.map((item, i) => (
          <Campaign key={i} {...item}/>
      ))}
    </div>
  );
};

const ApplicationsOpen: React.FC = () => {

  return (
    <>
      {/* <div className="flex flex-row items-center justify-center space-x-1 sm:col-span-1 pb-2">
        <div className="font-bold sm:col-span-5">{items.length} Wniosków</div>
      </div> */}

      <Rows />

      <div className="flex flex-row items-center justify-center space-x-1 sm:col-span-1 pt-5">
        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-gray-900 uppercase rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ">
          <FiChevronsLeft className="mr-2 stroke-current" />
        </button>
        <Numbers />
        <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-gray-900 uppercase rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ">
          <FiChevronsRight className="stroke-current" />
        </button>
      </div>
    </>
  );
};

export default ApplicationsOpen;
