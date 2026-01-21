import "react-loading-skeleton/dist/skeleton.css";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function ProjectsSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#303030">
      <div className="flex flex-col gap-7">
        <div className="h-fit w-full leading-none">
          <Skeleton
            height={42}
            borderRadius={8}
            className="border-border border"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="border-border relative  overflow-hidden rounded-lg border bg-[#202020] aspect-video"
              >
                <div className="bg-background absolute bottom-0 flex max-h-21 w-full flex-col gap-1 p-4">
                  <Skeleton height={22} width="75%" />
                  <div className="flex gap-2">
                    <Skeleton width={60} height={16} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </SkeletonTheme>
  );
}
