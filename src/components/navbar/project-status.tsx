import {ProgressBar} from "components/progress-bars";

export type ItemProps = {
  title: string;
  percent: number;
  color: string;
};

const ProjectStatus: React.FC = () => {
  const items: ItemProps[] = [
    {
      title: "Your Cool Company",
      percent: 33,
      color: "bg-green-500",
    },
    {
      title: "Awesome Startup",
      percent: 80,
      color: "bg-blue-800",
    },
    {
      title: "Great Enterprise",
      percent: 66,
      color: "bg-blue-800",
    },
  ];
  return (
    <>
      <div className="text-gray-900 dark:text-white bg-white dark:bg-gray-800 w-full p-2 text-xs font-bold tracking-wider uppercase">
        Startup funding
      </div>
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col p-2 text-gray-900 bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-bold">{item.title}</div>
              <div className="text-xs whitespace-nowrap">{item.percent}%</div>
            </div>
            <ProgressBar width={item.percent} color={item.color} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectStatus;
