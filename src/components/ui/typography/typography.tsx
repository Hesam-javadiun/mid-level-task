import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Typography<T extends ElementType> = {
  children: ReactNode;

  as?: T;
} & ComponentPropsWithoutRef<T>;

export default function Typography<C extends ElementType>(
  props: Typography<C>
) {
  const { as, children, ...attributes } = props;
  const Component = as ?? "p";
  return (
    <Component {...attributes} className={`${attributes.className || ""}`}>
      {children}
    </Component>
  );
}
