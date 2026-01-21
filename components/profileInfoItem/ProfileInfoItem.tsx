import { ExternalLink } from "lucide-react";
import { ElementType } from "react";

import IconWrapper from "../iconWrapper/IconWrapper";

type ProfileItemProps = {
  title: string;
  text: string;
  link?: string;
  icon: ElementType;
  external?: boolean;
};

export default function ProfileInfoItem({
  title,
  text,
  link = "",
  icon: Icon,
  external = true,
}: ProfileItemProps) {
  const isLink = Boolean(link);

  return (
    <>
      <div className="group flex flex-row items-center justify-center gap-3.5">
        {isLink ? (
          <a
            href={link}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <IconWrapper icon={Icon} />
          </a>
        ) : (
          <IconWrapper icon={Icon} />
        )}

        <div className="hidden lg:block">
          <p className="text-xs font-normal">{title}</p>
          {isLink ? (
            <a
              href={link}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="text-foreground flex items-center gap-2 text-sm"
            >
              {text}
              {external && (
                <ExternalLink
                  size={12}
                  color="var(--font-secondary)"
                  strokeWidth={1.5}
                />
              )}
            </a>
          ) : (
            <p className="text-foreground text-sm">{text}</p>
          )}
        </div>
      </div>
    </>
  );
}

// transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-highlight/10