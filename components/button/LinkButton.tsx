import { ChevronRight } from "lucide-react";
import Link from "next/link";

type LinkButtonProps = {
  tab: string;
  text: string;
};

export default function LinkButton({ tab, text }: LinkButtonProps) {
  return (
    <>
      <Link
        href={`?tab=${tab}`}
        className={`flex h-full cursor-pointer items-center transition-colors duration-500`}
      >
        <span className="text-muted font-light">{text}</span>
        <ChevronRight color="var(--color-highlight)" opacity={0.7} />
      </Link>
    </>
  );
}
