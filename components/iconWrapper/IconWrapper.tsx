import { ElementType } from "react";

type IconWrapperProps = {
  icon: ElementType;
  className?: string;
};

export default function IconWrapper({ icon: Icon, className }: IconWrapperProps) {
  return (
    <div className={`relative z-0 flex h-[31px] w-[31px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#606060,#22222200)] before:absolute before:inset-px before:z-[-1] before:rounded-[inherit] before:bg-[#222] before:content-[''] ${className}`}>
      <Icon className="z-1 h-[18px] w-[18px] text-highlight" />
    </div>
  );
}
