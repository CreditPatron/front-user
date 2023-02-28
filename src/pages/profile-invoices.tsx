import SectionTitle from "components/section-title";
import Widget from "components/widget";
import invoices from "json/profile/invoices.json";
import { formatNumber } from "functions/numbers";

export type ItemsProps = {
  date: string;
  startup_name: string;
  startup_value: string | number;
  startup_country: string;
  invoice: string | number;
  tax: string | number;
};

const fields: Record<string, string>[] = [
  {
    name: "Date",
    key: "date",
  },
  {
    name: "Startup",
    key: "startup_name",
  },
  {
    name: "$ Capital",
    key: "startup_value",
  },
  {
    name: "Country",
    key: "startup_country",
  },
  {
    name: "$ Invoice",
    key: "invoice",
  },
  {
    name: "$ Tax",
    key: "tax",
  },
];

const DefaultTables: React.FC = () => {
  const items: ItemsProps[] = invoices.map((item) => ({
    date: item.date,
    startup_name: item.startup_name,
    startup_value: item.startup_value,
    startup_country: item.startup_country,
    invoice: item.invoice,
    tax: item.tax,
  }));

  return (
    <>
      <SectionTitle title="" subtitle="Your invoices" />

      <Widget
        title="All invoices"
        description={
          <span>Following invoices has been transferred to your account</span>
        }
      >
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left table-auto no-border striped">
            <thead>
              <tr>
                {fields.map((field, i) => (
                  <th
                    key={i}
                    className="px-3 py-2 text-xs font-medium tracking-wider text-gray-500 uppercase border-b border-gray-100 dark:border-gray-800 leading-4"
                  >
                    {field.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? "odd:bg-gray-100 dark:odd:bg-gray-800" : ""}>
                  <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                    {item.date}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                    {item.startup_name}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                    {item.startup_value}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                    {item.startup_country}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                    {item.invoice}
                  </td>
                  <td className="px-3 py-2 border-b border-gray-100 dark:border-gray-800 whitespace-nowrap">
                    {item.tax}
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
