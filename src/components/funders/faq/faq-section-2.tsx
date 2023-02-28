import Question from "./question";
import items from "json/funding-faq/funding-faq-section-2.json";

const FaqSection2: React.FC = () => {
  return (
    <div className="w-full space-y-2 divide-y divide-gray-100 dark:divide-gray-800">
      {items.map((item, i) => (
        <Question key={i} {...item} />
      ))}
    </div>
  );
};
export default FaqSection2;
