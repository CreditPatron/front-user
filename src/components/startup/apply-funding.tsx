import {useForm, FormProvider} from "react-hook-form";
import Widget from "components/widget";
import {InputWrapper} from "components/react-hook-form/input-wrapper";
import {Label} from "components/react-hook-form/label";
import {Input} from "components/react-hook-form/input";
import {Textarea} from "components/react-hook-form/textarea";
import {Radio} from "components/react-hook-form/radio";
import SubmitApplyFundingFormModalWindow from "./submit-apply-funding-form";

export type FormProps = {
  name: string;
  email: string;
  password: string;
  number: string | number;
  custom: string | number;
  pattern: string;
  textarea: string;
  select: string;
  reactSelect: string;
  reactSelectMulti: string;
  switch: boolean;
  checkbox: boolean;
  radio: string;
};

const ApplyFunding: React.FC = () => {
  const methods = useForm<FormProps>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      number: "",
      custom: "",
      pattern: "",
      textarea: "",
      select: "",
      reactSelect: "",
      reactSelectMulti: "",
      switch: false,
      checkbox: false,
      radio: "",
    },
  });
  const {
    handleSubmit
  } = methods;

  const onSubmit = (data: FormProps) => {
    //eslint-disable-next-line
    console.log(JSON.stringify(data, null, 2));
  };

  return (
      <>
        <Widget>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-10">
                  <InputWrapper outerClassName="sm:col-span-4">
                    <Label id="name">Startup Name</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        rules={{required: "Name is required"}}
                    />
                  </InputWrapper>
                  <InputWrapper outerClassName="sm:col-span-4">
                    <Label id="name">Website URL</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        rules={{required: "Name is required"}}
                    />
                  </InputWrapper>
                  <InputWrapper outerClassName="sm:col-span-4">
                    <Label id="name">Startup Country</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        rules={{required: "Name is required"}}
                    />
                  </InputWrapper>
                  <InputWrapper outerClassName="sm:col-span-4">
                    <Label id="name">Startup headquarters (Street, Nr, Zip-Code, City)</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        rules={{required: "Name is required"}}
                    />
                  </InputWrapper>

                  <InputWrapper outerClassName="sm:col-span-4">
                    <Label id="name">Contact Person</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        rules={{required: "Name is required"}}
                    />
                  </InputWrapper>
                  <InputWrapper outerClassName="sm:col-span-4">
                    <Label id="pattern">Contact number</Label>
                    <Input
                        id="pattern"
                        name="pattern"
                        type="text"
                        placeholder="00##-###-###-####"
                        rules={{
                          required: "Phone number is required",
                          pattern: {
                            value:
                                /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{3}$/,
                            message: "Please enter a valid phone number",
                          },
                        }}
                    />
                  </InputWrapper>
                  <InputWrapper outerClassName="sm:col-span-4">
                    <Label id="email">Contact email address</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        rules={{required: "Please enter a valid email"}}
                    />
                  </InputWrapper>
                  <InputWrapper outerClassName="sm:col-span-4">
                    <Label id="pattern">Start date (day-month-year)</Label>
                    <Input
                        id="pattern"
                        name="pattern"
                        type="text"
                        placeholder="##-##-####"
                        rules={{
                          required: "Date is required",
                          pattern: {
                            value:
                                /^\(?\d{2}\)?[\s.-]\d{2}[\s.-]\d{4}$/,
                            message: "Please enter a valid phone number",
                          },
                        }}
                    />
                  </InputWrapper>                 
                  <InputWrapper outerClassName="sm:col-span-4">
                    <Label id="radio">Category</Label>
                    <Radio
                        name="radio"
                        rules={{required: "This is required"}}
                        options={[
                          {key: "PaymentServices", value: "PaymentServices"},
                          {key: "Consulting", value: "Consulting"},
                          {key: "AlgoTrading", value: "AlgoTrading"},
                          {key: "Banking", value: "Banking"},
                          {key: "Insurance", value: "Insurance"},
                          {key: "Crowdfunding", value: "Crowdfunding"},
                          {key: "OTHER", value: "OTHER"},
                        ]}
                    />
                  </InputWrapper>
                  <InputWrapper outerClassName="sm:col-span-4">
                    <Label id="radio">Business Model</Label>
                    <Radio
                        name="radio"
                        rules={{required: "This is required"}}
                        options={[
                          {key: "B2B", value: "B2B"},
                          {key: "B2C", value: "B2C"},
                          {key: "B2G", value: "B2G"},
                          {key: "C2C", value: "C2C"},
                          {key: "B2B2C", value: "B2B2C"},
                          {key: "OTHER", value: "OTHER"},
                        ]}
                    />
                  </InputWrapper>                  
                  <InputWrapper outerClassName="sm:col-span-8">
                    <Label id="textarea">Startup summary</Label>
                    <Textarea
                        id="textarea"
                        name="textarea"
                        rules={{required: "This is required"}}
                    />
                  </InputWrapper>
                  <InputWrapper outerClassName="sm:col-span-8">
                    <label htmlFor="dropzone-file" className="flex flex-col pt-5 items-center justify-center w-full text-xl text-gray-700 dark:text-gray-200 font-light h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      Attachments
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload or drag and drop</span></p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PDF (MAX. 5 MB)</p>
                      </div>
                      <input id="dropzone-file" type="file"
                             className="hidden"
                             multiple
                             // onChange={onSelectingLogFile}
                             accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
                    </label>
                  </InputWrapper>
                </div>
              </div>
              <SubmitApplyFundingFormModalWindow/>
            </form>
          </FormProvider>
        </Widget>
      </>
  );
};
export default ApplyFunding;