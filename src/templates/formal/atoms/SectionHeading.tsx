import React from "react";

export const SectionHeading = ({ title }: { title: string }) => {
    return (
      <div className="relative mb-2 text-lg font-medium border-b-2 border-cyan-950 pb-2">
        {title}
      </div>
    );
  };
  