import Router from "next/router";
import items from "json/open-funding-items.json";
import React, {useEffect, useState} from "react";
import {Campaign, CampaignItem} from "../components/funders/open-funding";
import SectionTitle from "../components/section-title";
import StarRating from "../components/star-rating";
import {formatCurrency} from "../functions/numbers";
import {ProgressBarWithText} from "../components/progress-bars";
import {Badge} from "../components/badges";
import {AiOutlineDownCircle} from "react-icons/ai";

const Index: React.FC = () => {
  const searchQueryString = process.browser ? ( Router?.query?.search ?? '' ) : '';
  const [ searchQuery, setSearchQuery ] = useState( searchQueryString );
  const [ result, setResult ] = useState([]);

  useEffect( () => {
    /**
     * If the query params is set, set the searchQuery in the in
     * 1. Set the search input value to that query.
     * 2. Call fetchPosts to get the results as per the query string from query params.
     */
    if ( searchQueryString ) {
      setSearchQuery( searchQueryString );
      setResult(items.filter(item => item.title.toLowerCase().includes(searchQueryString.toLowerCase())
          || item.description.toLowerCase().includes(searchQueryString.toLowerCase())))
    }

  }, [ searchQueryString ] );


  const Rows: React.FC = () => {
    return (
        <div className="w-full space-y-4">
          {result.map((item, i) => (
              <Campaign key={i} {...item}/>
          ))}
        </div>
    );
  };
  
  const renderTextWithHighlight = (text: string, searchPhrase: string) => {
    const highlightedText = text.replace(
        new RegExp(`(${searchPhrase})`, 'gi'),
        '<mark style="background-color: yellow">$1</mark>'
    );
    return <p dangerouslySetInnerHTML={{ __html: highlightedText }} />;
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
                                              img,
                                              progress,
                                              topics
                                            }) => {
    const [hidden, setHidden] = useState<boolean>(true);
    return (
        <div key={id} className="w-full space-y-2 flex ... min-w-[1000px]">
          <div className='border-2 border-slate-300 border-2 rounded-lg p-1 grow'>
            <div className="flex items-center justify-start pt-5 px-2 truncate space-x-4">
              <a href={`/campaigns/${id}`}>
                <div className="shrink-0 w-16">
                  <img src={img} alt="media" className={`h-16 w-full shadow-lg rounded-full shadow-lg`}/>
                </div>
              </a>
              <div className="flex flex-col w-full min-w-0">
                <div className="text-sm font-bold" aria-disabled>
                  <a href={`/campaigns/${id}`}>
                    {renderTextWithHighlight(title, searchQuery)}
                  </a>
                  <span className='pl-5'>
                  <StarRating initialRating={stars} numberOfStars={5} />
                </span>
                </div>
                <div className="text-sm">Category: {category}</div>
                <div className="text-sm truncate">{renderTextWithHighlight(description, searchQuery)}</div>
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

            <div className="flex ... pt-1">
              <div className="flex-none h-10 ... ">
                <div>
                  <div className="text-xl font-bold">
                    <div className='px-3'>
                      <button onClick={() => setHidden(!hidden)} className="px-2 py-2 text-xs font-bold text-blue-900 uppercase rounded-lg bg-transparent border border-blue-900 hover:text-blue-700 hover:border-blue-700">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow h-10 px-3 py-2">
                <ProgressBarWithText width={progress} color={`${progress < 75 ? "bg-green-500" : "bg-blue-500"}`}/>
              </div>
              <div className="flex-none h-10 ... pr-2">
                <div className="text-xl font-bold">
                  <button className="px-2 py-1 text-base font-bold text-white uppercase rounded-lg bg-blue-900 hover:bg-blue-600  duration-500">
                    Invest
                  </button>
                </div>
              </div>
            </div>

            <div className={`prose prose-sm max-w-none py-3 px-2 w-full text-gray-900 dark:text-white ${
                hidden ? "hidden" : "block"
            }`}>
              <b>Topics:</b>
              <div className="flex flex-row items-center justify-start space-x-1 pt-1">
                {topics.map((topic, i) => (
                    <div key={i} className="flex flex-wrap items-start justify-start">
                      <Badge
                          size='sm'
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
              <div className="flex flex-row items-center justify-start space-x-1 pt-1 gap-1">
                <a href={`/campaigns/${id}`}>
                  <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-900 rounded-lg hover:bg-blue-600 duration-500 min-w-[100px]">
                    Full Proposal
                  </button>
                </a>
                <a href={`/campaigns/${id}`}>
                  <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-900 rounded-lg hover:bg-blue-600 duration-500 min-w-[100px]">
                    Comments
                  </button>
                </a>
                <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-900 rounded-lg hover:bg-blue-600 duration-500 min-w-[100px]">
                  PDF
                </button>
                <button className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-900 rounded-lg hover:bg-blue-600 duration-500 min-w-[100px]">
                  Share
                </button>
              </div>
            </div>
          </div>
          <div className="flex-none ... pl-2 pt-10 items-center justify-center">
            <button
                onClick={() => setHidden(!hidden)}
                className="flex flex-row w-full text-slate-300 bg-transparent dark:text-white text-left">
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

  return (
      <>
        <SectionTitle title="" subtitle={`Search result for query { ${searchQuery} }`} />
        <div className="flex flex-row items-center justify-center space-x-1 sm:col-span-1 pb-2">
          <div className="font-bold sm:col-span-5">{result.length} Startups founded</div>
        </div>

        <Rows />
      </>
  );
};

export default Index;