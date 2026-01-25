import { LucideIcon } from "lucide-react";

import { TimelineItem } from "@/app/types/TimelineItem";

import IconWrapper from "../iconWrapper/IconWrapper";

export default function Timeline({
  title,
  timelineItems,
  icon: Icon,
}: {
  title: string;
  timelineItems: TimelineItem[];
  icon: LucideIcon;
}) {
  return (
    <section>
      <div className="mb-6 flex items-center gap-3.5">
        <IconWrapper icon={Icon} />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <ol className="ml-11">
        {[...timelineItems].map((item, i) => {
            const isLast = i === timelineItems.length - 1;

            return (
              <li
                key={item.id}
                className={`timeline-item relative mb-5 ${
                  !isLast
                    ? `before:absolute before:-top-6.25 before:-left-7.5 before:h-[calc(100%+50px)] before:w-px before:bg-[#383838] before:content-['']`
                    : ""
                } after:absolute after:top-2 after:-left-8.25 after:h-[7] after:w-[7] after:rounded after:bg-[#6699ff] after:shadow-[0_0_0_4px_#484848] after:content-['']`}
              >
                <h4 className="mb-0.5 leading-[1.3] font-normal">
                  {item.title}
                  <span className="font-extralight">
                    {" "}
                    • {item.jobTitle || item.institution}
                  </span>
                </h4>

                <span className="text-highlight leading-7">
                  {`${item.startDate ? item.startDate + " - " : ""} ${item.endDate}`}
                </span>

                <p className="text-muted text-sm leading-[1.6] font-light">
                  {item.description}
                </p>
              </li>
            );
          })}
      </ol>
    </section>
  );
}
