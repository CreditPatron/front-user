import {useForm, FormProvider} from "react-hook-form";
import {InputWrapper} from "components/react-hook-form/input-wrapper";
import {Label} from "components/react-hook-form/label";
import {ErrorMessage} from "components/react-hook-form/error-message";
import {Input} from "components/react-hook-form/input";

export type FormProps = {
  email: string;
  password: string;
};

const Index: React.FC = () => {
  const methods = useForm<FormProps>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    reset,
    formState: {errors},
  } = methods;

  const onSubmit = async (data: FormProps) => {
    //eslint-disable-next-line
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-y-1 gap-x-2 sm:grid-cols-12">
            <InputWrapper outerClassName="sm:col-span-12">
              <Label id="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                rules={{required: "Please enter a valid email"}}
              />
              {errors?.email?.message && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </InputWrapper>

            <InputWrapper outerClassName="sm:col-span-12">
              <Label id="password">Hasło</Label>
              <Input
                id="password"
                name="password"
                type="password"
                rules={{
                  required: "Please enter a password",
                  minLength: {
                    value: 4,
                    message: "Your password should have at least 4 characters",
                  },
                  maxLength: {
                    value: 8,
                    message:
                      "Your password should have no more than 8 characters",
                  },
                }}
              />
              {errors?.password?.message && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </InputWrapper>
          </div>
        </div>

        <div className="flex justify-start space-x-2">
          <button
            onClick={() => {
              reset();
            }}
            type="button"
            className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:border-gray-700 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Anuluj
          </button>
          <button
            type="submit"
            className="inline-flex justify-center px-3 py-2 ml-3 text-sm font-medium text-white duration-500 bg-slate-700 border border-transparent shadow-sm rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
            Zaloguj
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
export default Index;
