import React from "react";

export const SectionHeading = ({ title }: { title: string }) => {
    return (
      <div className="relative mb-2 text-lg font-medium  pb-2 italic">
        {title}
      </div>
    );
  };
  