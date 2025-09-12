"use client";

import Collapsible from "react-collapsible";

export interface DropdownProps {
  leftTitle: string;
  rightTitle: string;
  children: React.ReactNode;
}

export default function Dropdown({
  leftTitle = "Left Title",
  rightTitle = "Right Title",
  children = null,
}: DropdownProps) {
  return (
    <div className="w-full flex flex-col border-t border-line-color-soft/60 last:rounded-b-xl overflow-hidden">
      {/* Header */}
      <Collapsible
        id="collapsible-header"
        trigger={
          <div
            id="collapsible-trigger-1"
            className="w-full p-8  font-bold cursor-pointer text-xl flex justify-between"
          >
            <span id="left-title">{leftTitle}</span>
            <span id="right-title">{rightTitle}</span>
          </div>
        }
        transitionTime={200}
        // openedClassName="bg-white/25"
      >
        {/* Content */}
        <div
          className="p-8 bg-white/40 flex flex-col gap-2 border-t border-line-color-soft/60"
          id="dropdown-content"
        >
          {children}
        </div>
      </Collapsible>
    </div>
  );
}
