import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LinkButton({
  tab,
  text,
}: {
  tab: string;
  text: string;
}) {
  return (
    <>
      <Link
        href={`?tab=${tab}`}
        className={`flex h-full cursor-pointer items-center transition-colors duration-500`}
      >
        <span className="text-sm">{text}</span>
        <ChevronRight color="var(--color-highlight)" opacity={0.7} />
      </Link>
    </>
  );
}
