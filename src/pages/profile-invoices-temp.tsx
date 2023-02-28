import SectionTitle from "components/section-title";
import Widget from "components/widget";
import countries from "json/countries.json";
import {formatNumber} from "functions/numbers";

export type CountriesProps = {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  region: string;
  subregion: string;
  population: string | number;
  nativeName: string;
};

const fields: Record<string, string>[] = [
  {
    name: "Date",
    key: "alpha3Code",
  },
  {
    name: "Startup",
    key: "name",
  },
  {
    name: "Country Origin",
    key: "nativeName",
  },
  {
    name: "Capital",
    key: "capital",
  },
  {
    name: "$ Invoice",
    key: "population",
  },
];

const DefaultTables: React.FC = () => {
  const items: Pick<
      CountriesProps,
      "alpha3Code" | "name" | "nativeName" | "capital" | "population"
      >[] = countries
  .filter((country) => country.region === "Europe")
  .map((country) => {
    return {...country, population: formatNumber(country["population"])};
  });
  return (
      <>
        <SectionTitle title="" subtitle="Your invoices" />

        <Widget
            title="Striped tables"
            description={
              <span>Use the following examples for striped tables</span>
            }>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left table-auto no-border striped">
              <thead>
              <tr>
                {fields.map((field, i) => (
                    <th
                        key={i}
                        className="px-3 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 dark:border-gray-800 leading-4">
                      {field.name}
                    </th>
                ))}
              </tr>
              </thead>
              <tbody>
              {items.slice(0, 8).map((country, i) => (
                  <tr key={i} className="odd:bg-gray-100 dark:odd:bg-gray-800">
                    <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                      {country["alpha3Code"]}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                      {country["name"]}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                      {country["nativeName"]}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                      {country["capital"]}
                    </td>
                    <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                      {country["population"]}
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </Widget>
      </>
  );
};
export default DefaultTables;