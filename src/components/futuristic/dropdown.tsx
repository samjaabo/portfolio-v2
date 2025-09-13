"use client";

import Collapsible from "react-collapsible";
import { useState } from "react";
import clsx from "clsx";
import { BsFillCaretDownFill } from "react-icons/bs";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col border-t border-line-color-soft/60 last:rounded-b-xl overflow-hidden">
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full p-8 font-bold cursor-pointer text-md md:text-xl flex flex-row justify-between items-baseline"
      >
        <div className="gap-x-4 flex justify-center items-center w-fit h-fit">
          <div className="w-fit items-center flex">
            <BsFillCaretDownFill
              className={clsx(
                "w-6 h-6 transition-transform origin-center rounded-full text-color duration-200",
                isOpen ? "rotate-0" : "rotate-180"
              )}
            />
          </div>
          <div className="block">{leftTitle}</div>
        </div>
        <span className="hidden sm:block flex-1 text-right">{rightTitle}</span>
      </button>

      {/* Content */}
      <div
        className={clsx(
          "overflow-hidden transition-[max-height] duration-200 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="p-8 bg-white/40 flex flex-col gap-2 border-t border-line-color-soft/60 text-xl">
          {children}
        </div>
      </div>
    </div>
  );
}
