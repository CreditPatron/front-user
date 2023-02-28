import Widget from "components/widget";
import fundingItems from "json/open-funding-items.json";
import Campaign from "../../components/campaigns/campaign";
import TopInfo from "../../components/campaigns/top-info";
import StarRating from "../../components/star-rating";
import React from "react";

export const getStaticPaths = async() => {
  const paths = fundingItems.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async({ params: { id } }) => {
  return {
    props: { campaign: fundingItems[id - 1]}
  }
}


export type ListProps = {
  title: string;
  sentence: string;
  number: number;
  img: string;
  description: string;
  timeago: string;
};

const Details = ({campaign}) => {
  return (
      <>
        <Widget>
          <div className="w-full">
            <TopInfo campaign={campaign}/>
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap">
            <div className="w-full lg:w-3/4">
              <Campaign campaign={campaign}/>
            </div>
            <div className="w-full lg:w-1/4">
              {/*<Friends />*/}
              <div className="text-xl font-bold pb-5" aria-disabled>{campaign.title}</div>
              <div className='pb-2'>
                <StarRating initialRating={campaign.stars} numberOfStars={5} />
              </div>
              <div className="text-sm"><b>Category:</b> {campaign.category}</div>
              <div className="text-sm"><b>Due date:</b> {campaign.dueDate}</div>
            </div>
          </div>
        </Widget>
      </>
  );
};
export default Details;

