import { LucideIcon } from "lucide-react";

import { TimelineItem } from "@/app/types/TimelineItem";

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
    <section className="mb-7">
      <div className="mb-6 flex items-center gap-3.5">
        <div className="relative z-0 flex h-[31px] w-[31px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#606060,#22222200)] before:absolute before:inset-px before:z-[-1] before:rounded-[inherit] before:bg-[#222] before:content-['']">
          <Icon size={18} color="#7297E9" className="z-1" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <ol className="ml-11">
        {timelineItems.map((item, i) => {
          const isLast = i === timelineItems.length - 1;

          return (
            <li
              key={item.id}
              className={`timeline-item relative mb-5 ${
                !isLast
                  ? `before:absolute before:top-[-25px] before:left-[-30px] before:h-[calc(100%+50px)] before:w-px before:bg-[#383838] before:content-['']`
                  : ""
              } after:absolute after:top-2 after:left-[-33px] after:h-[7] after:w-[7] after:rounded after:bg-[#6699ff] after:shadow-[0_0_0_4px_#484848] after:content-['']`}
            >
              <h4 className="mb-0.5 leading-[1.3] font-medium">
                {item.title}
                <span className="font-light">
                  {" "}
                  • {item.jobTitle || item.institution}
                </span>
              </h4>

              <span className="text-highlight leading-7">
                {`${item.startDate} - ${item.endDate}`}
              </span>

              <p className="text-sm leading-[1.6] font-light">
                {item.description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
