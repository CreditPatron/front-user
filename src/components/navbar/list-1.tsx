export type ItemProps = {
  title: string;
  subtitle: string;
  number: string | number;
};

const List1: React.FC = () => {
  const items: ItemProps[] = [
    {
      title: "Zawnioskuj o kredyt",
      subtitle: "Minima quasi sunt.",
      number: "01",
    },
    {
      title: "Otwarte inwestycje",
      subtitle: "Possimus non dolor.",
      number: "02",
    },
    {
      title: "Twoje wnioski kredytowe",
      subtitle: "Cupiditate aliquid magnam.",
      number: "03",
    },
    {
      title: "Twoje inwestycje",
      subtitle: "Doloribus modi cum.",
      number: "04",
    },
    {
      title: "Przychody",
      subtitle: "Voluptatum suscipit minima.",
      number: "05",
    },
  ];
  return (
    <div className="flex flex-row flex-wrap">
      {items.map((item, i) => (
        <div
          key={i}
          className="w-1/2 p-2 text-gray-900 bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="flex flex-row items-center justify-start">
            <div className="shrink-0 w-8">
              <span
                className={`h-8 w-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-display font-bold`}>
                {item.number}
              </span>
            </div>
            <div className="ml-2">
              <div className="text-sm font-bold">{item.title}</div>
              <div className="text-xs">{item.subtitle}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List1;
