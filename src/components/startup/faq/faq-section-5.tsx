import Question from "./question";
import items from "json/startup-faq/startup-faq-section-5.json";

const FaqSection5: React.FC = () => {
  return (
      <div className="w-full space-y-2 divide-y divide-gray-100 dark:divide-gray-800">
        {items.map((item, i) => (
            <Question key={i} {...item} />
        ))}
      </div>
  );
};
export default FaqSection5;
