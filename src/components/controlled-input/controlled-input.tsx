import type { ComponentPropsWithoutRef } from "react";
import { useController, type UseControllerProps } from "react-hook-form";
import Input from "@/components/ui/input";
import Typography from "@/components/ui/typography";

// import { UseControllerProps } from "react-hook-form";
// ToDo correct the control type

type ControlledInputProps = {
  label?: string;
  name: string;
  control: unknown;  
  showErrorBelowInput?: boolean;
} & Omit<
  ComponentPropsWithoutRef<"input">,
  "onChange" | "value" | "onBlur" | "disabled" | "id" | "name"
> &
  Omit<UseControllerProps, "control">;

const ControlledInput = function ({
  label,
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...inputAttributes
}: ControlledInputProps) {
  const {
    // field: { onBlur, onChange, ref, value, disabled },
    field,
    fieldState: { invalid, isTouched, error },
    formState: { isSubmitted },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  const shouldBeRed = (isTouched && invalid) || (isSubmitted && invalid);

  return (
    <>
      <Input
        {...inputAttributes}
        id={name}
        label={label}
        shouldBeRed={shouldBeRed}
        {...field}
      />

      {shouldBeRed && error && error.message && (
        <Typography className='text-rose-400 '>{error.message}</Typography>
      )}
    </>
  );
};

export default ControlledInput;
