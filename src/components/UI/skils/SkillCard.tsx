import React from "react";

import { Compare } from "../../AceternityUI/skils/compare";

export function SkillCard() {
  return (
    <div className=" rounded-2xl border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-900 shadow-md transition hover:shadow-lg">
      <Compare
        autoplay={true}
        className="h-full w-full md:h-[360px] md:w-[360px]"
        firstImage="https://assets.aceternity.com/code-problem.png"
        firstImageClassName="object-cover object-left-top"
        secondImage="https://assets.aceternity.com/code-solution.png"
        secondImageClassname="object-cover object-left-top"
        slideMode="hover"
      />
    </div>
  );
}
