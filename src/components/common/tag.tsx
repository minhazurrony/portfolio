import React from "react";

function Tag({ label }: { label: string }) {
  return (
    <p className="rounded-md border border-brand-one bg-bg-two px-2 text-[14px] leading-[2] text-brand-one">
      {label}
    </p>
  );
}

export default Tag;
