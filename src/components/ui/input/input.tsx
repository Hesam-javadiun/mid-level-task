import { type ComponentPropsWithoutRef } from "react";
import Typography from "@/components/ui/typography";
import { forwardRef } from "react";

type InputProps = {
  shouldBeRed?: boolean;
  label?: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function (props, ref) {
  const { shouldBeRed, label, ...inputAttributes } = props;

  return (
    <Typography>
      {label && <label>{label}</label>}
      <input
        ref={ref}
        {...inputAttributes}
        className={`${
          inputAttributes.className || ""
        }  focus:border-blue-500 md:text-[0.8em] p-2 rounded m-[2px] border border-solid ${
          shouldBeRed
            ? "border-red-500 focus:border-zinc-200"
            : "border-zinc-200"
        } w-full `}
      />
    </Typography>
  );
});

export default Input;
