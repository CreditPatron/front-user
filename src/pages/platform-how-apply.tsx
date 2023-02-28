import SectionTitle from "components/section-title";
import Widget from "components/widget";
import React, {useState} from "react";
import items from "json/how-to-fund-steps.json";

export type StepProps = {
  id: number,
  title: string;
  subtitle?: string;
  active: boolean;
  disabled: boolean;
  description: string
};

export type StepsProp = {
  changeStep: React.FC,
  steps: StepProps[]
};

const Index: React.FC = () => {
  const [currentItem, setCurrentItem] = useState<StepProps>(items[0]);
  const [steps] = useState<StepProps[]>(items);

  const changeStep = (index: number) => {
    steps.map((step) => step.active=false)
    steps[index].active = true
    setCurrentItem(items[index])
  }

  return (
      <>
        <SectionTitle title="" subtitle="How to apply for funding?" />
        <Widget title="Form steps" description={<span>Sample form step components</span>}>
          <Steps1 steps={steps} changeStep={changeStep}/>
          <Steps2 steps={steps} changeStep={changeStep}/>
          <Steps3 steps={steps} changeStep={changeStep}/>
        </Widget>
        <Widget description={<span>{currentItem.title}</span>}>
          <div>{currentItem.description}</div>
        </Widget>
      </>
  );
};

export const Steps1: React.FC<StepsProp> = ({steps, changeStep}) => {
  return (
      <div className="relative steps-1">
        <div className="flex flex-wrap flex-row w-full mb-8">
          {steps.map((step, index) => (
              <div
                  key={index}
                  className={`number flex w-1/4 items-center justify-center cursor-pointer ${
                      step.active ? "cursor-pointer" : "opacity-25"
                  }`}
                  onClick={() => changeStep(index)}>
            <span
                className={`h-8 w-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-display font-bold z-10`}>
              {index + 1}
            </span>
              </div>
          ))}
        </div>
      </div>
  );
};

export const Steps2: React.FC<StepsProp> = ({steps, changeStep}) => {
  return (
      <div className="flex flex-col w-full mb-8 lg:flex-wrap lg:flex-row">
        {steps.map((step, index) => (
            <div key={index}
                className={`flex items-center rounded-3xl justify-center w-full lg:w-1/4 p-2 cursor-pointer ${
                    step.active
                        ? "cursor-pointer bg-blue-500 text-white"
                        : "opacity-25"
                }`}
                onClick={() => changeStep(index)}>
              <div className="shrink-0 w-8">
                <span
                    className={`h-8 w-8 ${
                        step.active
                            ? "bg-blue-700 text-white"
                            : "bg-blue-200 text-gray-900"
                    } flex items-center justify-center rounded-full text-lg font-display font-bold`}>
                  {index + 1}
                </span>
              </div>
              <div className={`flex flex-col  w-full ml-4 ${
                       step.active
                           ? "bg-blue-500 text-white"
                           : "bg-white text-gray-900"
                   }`}>
                <div className="text-sm font-bold">{step.title}</div>
                <div className="text-sm">{step.subtitle}</div>
              </div>
            </div>
        ))}
      </div>
  );
};

export const Steps3: React.FC<StepsProp> = ({steps, changeStep}) => {
  return (
      <div className="flex flex-col w-full mb-8 lg:flex-wrap lg:flex-row">
        {steps.map((step, index) => (
            <div
                key={index}
                className="flex items-center justify-center w-full lg:w-1/4 cursor-pointer">
              <button
                  onClick={() => changeStep(index)}
                  className={`font-bold rounded-full uppercase text-xs px-4 py-2 w-full ${
                      step.active
                          ? "bg-blue-500 text-white"
                          : "opacity-25 bg-white text-gray-900"
                  }`}
                  type="button">
                {step.title}
              </button>
            </div>
        ))}
      </div>
  );
};

export default Index;