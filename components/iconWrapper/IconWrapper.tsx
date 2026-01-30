import clsx from "clsx";
import { ElementType } from "react";

type IconWrapperProps = {
  icon: ElementType;
  className?: string;
};

export default function IconWrapper({
  icon: Icon,
  className,
}: IconWrapperProps) {
  return (
    <div
      className={clsx(
        "relative z-0 flex h-7.75 w-7.75 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#606060,#22222200)] before:absolute before:inset-px before:z-[-1] before:rounded-[inherit] before:bg-[#222] before:content-['']",
        className
      )}
    >
      <Icon className="text-highlight z-1 h-4.5 w-4.5" />
    </div>
  );
}
