import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { type LinkProps, Link } from "react-router";

type AnchorProps = LinkProps & { children: ReactNode };

type HTMLButtonProps = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
};

type ButtonProps = AnchorProps | HTMLButtonProps;

function isAnchor(props: ButtonProps): props is AnchorProps {
  return "href" in props;
}

const buttonClasses = "px-4 py-2 bg-blue-500 text-white rounded";

export default function Button(props: ButtonProps) {
  if (isAnchor(props)) {
    const { children, ...anchorProps } = props;
    return (
      <Link
        {...anchorProps}
        className={`${buttonClasses} ${anchorProps.className || ""}`}
      >
        {children}
      </Link>
    );
  }

  const { children, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={`${buttonClasses} ${buttonProps.className || ""}`}
    >
      {children}
    </button>
  );
}
