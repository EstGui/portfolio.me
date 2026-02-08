import clsx from "clsx";
import { ElementType } from "react";

type ActionButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  icon: ElementType;
};

export default function ActionButton({
  text,
  icon: Icon,
  type = "button",
  className,
  ...props
}: ActionButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={clsx(
        "border-highlight/50 lg:hover:border-highlight/90 row-4 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border bg-black/20 px-5 py-3 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out active:scale-98 min-h-[50]",
        className
      )}
    >
      <Icon size={18} color="#7297E9" className="z-10" />
      <span>{text}</span>
    </button>
  );
}
