export type ItemProps = {
  title: string;
  subtitle: string;
};

const items: ItemProps[] = [
  {
    title: "Potwierdzona inwestycja",
    subtitle: "Twoja inwestycja we wniosek nr 00673999 została zaksięgowana.",
  },
  {
    title: "Potwierdzona inwestycja",
    subtitle: "Twoja inwestycja we wniosek nr 23867328 została zaksięgowana.",
  },
  {
    title: "Publikacja wniosku",
    subtitle: "Twój wniosek o numerze 345434 został opublikowany dla inwestorów.",
  },
];


const List2: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap">
      {items.map((item, i) => (
        <div
          key={i}
          className="w-full text-gray-900 bg-white dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
          <div className="flex items-center justify-start p-2" key={i}>
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

export default List2;
