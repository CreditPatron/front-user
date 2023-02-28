import Question from "./question";
import items from "json/startup-faq/startup-faq-section-1.json";

const FaqSection1: React.FC = () => {
  return (
    <div className="w-full space-y-2 divide-y divide-gray-100 dark:divide-gray-800">
      {items.map((item, i) => (
        <Question key={i} {...item} />
      ))}
    </div>
  );
};
export default FaqSection1;
