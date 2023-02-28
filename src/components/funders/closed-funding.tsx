import React, {useState} from "react";
import StarRating from "components/star-rating";
import items from "json/closed-funding-items.json";
import {formatCurrency} from "functions/numbers";
import {FiChevronsLeft, FiChevronsRight} from "react-icons/fi";
import {AiOutlineDownCircle} from "react-icons/ai";

export type CampaignItem = {
  id: number,
  title: string,
  stars: number,
  description: string,
  fullDescription: string,
  category: string,
  sum: number,
  dueDate: string,
  img: string
}

const Campaign: React.FC<CampaignItem> = ({
                                            id,
                                            title,
                                            stars,
                                            description,
                                            fullDescription,
                                            category,
                                            sum,
                                            dueDate,
                                            img
                                          }) => {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
      <div className="w-full space-y-2 flex ... min-w-[1000px]">
        <div className='border-2 border-slate-400 rounded-lg p-1 grow'>
          <div className="flex items-center justify-start pt-2 px-2 truncate space-x-4">
            <a href={`/campaigns/${id}`}>
              <div className="shrink-0 w-16">
                <img src={img} alt="media" className={`h-16 w-full shadow-lg rounded-full shadow-lg`}/>
              </div>
            </a>
            <div className="flex flex-col w-full min-w-0">
              <div className="text-sm font-bold" aria-disabled>
                <a href={`/campaigns/${id}`}>
                  {title}
                </a>
                <span className='pl-5'>
                  <StarRating initialRating={stars} numberOfStars={5} />
                </span>
              </div>
              <div className="text-sm">Category: {category}</div>
              <div className="text-sm truncate">{description}</div>
            </div>
            <div className="shrink-0">
              <div className="text-xl flex items-end justify-end">
                <div className="text-sm"><b>Due date:</b> {dueDate}</div>
              </div>
              <div className="text-xl flex items-end justify-end">
                <div className="text-sm"><b>Funded:</b> {formatCurrency(sum)}</div>
              </div>
              <div className="text-xl flex items-end justify-end">
                <div className="text-sm"><b>Requested:</b> {formatCurrency(sum)}</div>
              </div>
            </div>
          </div>

          <div className={`prose prose-sm max-w-none py-3 px-2 w-full text-gray-900 dark:text-white ${
              hidden ? "hidden" : "block"
          }`}>
            <div className='pt-2'>
              {fullDescription}
            </div>
          </div>
        </div>
        <div className="flex-none ... pl-2 pt-5 items-center justify-center">
          <button
              onClick={() => setHidden(!hidden)}
              className="flex flex-row w-full text-slate-400 bg-transparent dark:text-white text-left">
            <AiOutlineDownCircle size={30}
                                 className={`stroke-current transition ease-in-out duration-500 transform ${
                                     hidden ? "rotate-0" : "-rotate-180"
                                 }`}
            />
          </button>
        </div>
      </div>
  );
}

const Numbers: React.FC = () => (
    <>
      {Array.from(Array(4).keys()).map((i) => {
        if (i === 2) {
          return (
              <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-white uppercase bg-blue-500 rounded-full hover:bg-blue-600 ">
                {i + 1}
              </button>
          );
        }
        return (
            <button className="inline-flex items-center justify-center w-8 h-8 p-0 text-xs font-bold text-gray-900 uppercase rounded-full dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 ">
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

const OpenFunding: React.FC = () => {

  return (
      <>
        <div className="flex flex-row items-center justify-center space-x-1 sm:col-span-1 pb-2">
          <div className="font-bold sm:col-span-5">{items.length} Funded Startups</div>
        </div>

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

export default OpenFunding;
