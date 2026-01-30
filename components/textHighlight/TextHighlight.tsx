import clsx from "clsx";
import { ReactNode } from "react";

type TextHighlightProps = {
  children: ReactNode;
  className?: string;
};

export default function TextHighlight({
  children,
  className,
}: TextHighlightProps) {
  return (
    <span className={clsx("text-highlight font-medium", className)}>
      {children}
    </span>
  );
}
