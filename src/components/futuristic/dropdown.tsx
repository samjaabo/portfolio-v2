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
    <div className="w-full flex flex-col border-t border-line-color-soft">
      {/* Header */}
      <Collapsible
        trigger={
          <div className="w-full p-4  font-bold cursor-pointer text-xl flex justify-between">
            <span>{leftTitle}</span>
            <span>{rightTitle}</span>
          </div>
        }
        transitionTime={200}
        openedClassName="bg-white/25"
      >
        {/* Content */}
        <div className="p-4 bg-white/40 flex flex-col gap-2 bord border-t border-line-color-soft">
          {children}
        </div>
      </Collapsible>
    </div>
  );
}
