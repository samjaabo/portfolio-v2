"use client";

import Collapsible from "react-collapsible";
import { BiCaretDownCircle } from "react-icons/bi";
import { useState } from "react";
import clsx from "clsx";
import { BsCaretDown } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronCompactDown } from "react-icons/bs";
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
  const transitionTime = 200;
  return (
    <div className="w-full flex flex-col border-t border-line-color-soft/60 last:rounded-b-xl overflow-hidden">
      {/* Header */}
      <Collapsible
        onOpening={() => setIsOpen(true)}
        onClosing={() => setIsOpen(false)}
        id="collapsible-header"
        trigger={
          <div
            id="collapsible-trigger-1"
            className="w-full p-8  font-bold cursor-pointer text-md md:text-xl flex flex-row justify-between items-baseline "
          >
            <div
              className="gap-x-4 flex justify-center items-center w-fit h-fit "
              id="left-title "
            >
              <div className=" w-fit items-center flex">
                <BsFillCaretDownFill
                  className={clsx(
                    "w-6 h-6 transition-transform origin-center rounded-full text-color",
                    {
                      "rotate-0 ": isOpen,
                      "rotate-180 ": !isOpen,
                    },
                    `duration-${transitionTime}`
                  )}
                />
              </div>
              <div className="block">{leftTitle}</div>
            </div>
            <span
              id="right-title"
              className="hidden sm:block flex-1 text-right"
            >
              {rightTitle}
            </span>
          </div>
        }
        transitionTime={transitionTime}
        // openedClassName="bg-white/25"
      >
        {/* Content */}
        <div
          className="p-8 bg-white/40 flex flex-col gap-2 border-t border-line-color-soft/60 text-xl"
          id="dropdown-content"
        >
          {children}
        </div>
      </Collapsible>
    </div>
  );
}
