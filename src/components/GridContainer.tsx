import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type GridContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function GridContainer<T extends ElementType = "div">({
  as,
  children,
  className = "",
  ...rest
}: GridContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={`mx-auto grid w-full max-w-[1500px] grid-cols-4 gap-x-4 gap-y-8 px-[6vw] md:grid-cols-8 md:gap-x-5 md:gap-y-10 md:px-[4vw] lg:grid-cols-12 lg:gap-x-[22px] lg:gap-y-12 ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

