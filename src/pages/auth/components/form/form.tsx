import { useForm } from "react-hook-form";
import Input from "@/components/controlled-input/controlled-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./form-schema";
import Typography from "@/components/ui/typography";
import Button from "@/components/ui/button";

type SubmitHandlerType = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => void;

type FormProps = {
  onSubmit: SubmitHandlerType;
  isSubmitActionPending: boolean;
  serverError?: string;
};

export type FormDataType = {
  username: string;
  password: string;
};

const formInputs: {
  name: string;
  label: string;
  type: string;
  placeholder: string;
}[] = [
  {
    name: "username",
    label: "Username",
    type: "text",
    placeholder: "admin",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "admin123",
  },
];

const defaultFormValues = {
  username: "",
  password: "",
};

export default function Form({
  onSubmit,
  isSubmitActionPending,
  serverError = "",
}: FormProps) {
  const { control, handleSubmit } = useForm<FormDataType>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: defaultFormValues,
    resolver: zodResolver(loginFormSchema),
  });

  const submit = handleSubmit((formData: FormDataType) => {
    onSubmit(formData);
  });

  const inputs = formInputs.map((input) => (
    <Input {...input} control={control} key={input.name} />
  ));

  const error = !!serverError && <Typography className='text-rose-400'>{serverError}</Typography>;

  return (
    <>
      <form
        onSubmit={submit}
        className="flex flex-col gap-4 justify-between grow"
      >
        <div className="flex flex-col gap-4">{inputs}</div>
        {isSubmitActionPending ? (
          <Typography className="text-gray-600 bg-gray-200 rounded w-full text-center py-2">
            loading
          </Typography>
        ) : (
          <Button type="submit">
            <Typography>Submit</Typography>
          </Button>
        )}
      </form>
      {error}
    </>
  );
}
